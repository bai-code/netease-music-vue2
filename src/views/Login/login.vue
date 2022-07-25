<template>
  <div class="login">
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      append-to-body
      custom-class="dialog-container"
    >
      <template #title>
        <h3 class="title-center">登录</h3>
      </template>

      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">重 置</el-button>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          class="submit-btn"
          :loading="isLoading"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    // 验证手机号码 密码
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      const phoneReg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      if (!phoneReg.test(value)) {
        callback(new Error('号码验证失败'))
      }
      callback()
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        const passReg = /\w{6,16}/
        if (!passReg.test(value)) {
          callback(new Error('密码不符合规范'))
        }
        callback()
      }
    }
    return {
      ruleForm: {
        phone: '17179795962',
        password: 'bgf1580087304'
      },
      rules: {
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      },
      isLoading: false,
      timer: null
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.isLoading = true
          const flag = await this.$store.dispatch(
            'loginModule/userLogin',
            this.ruleForm
          )
          this.$message({
            type: flag ? 'success' : 'error',
            message: flag ? '登录成功' : '登录失败'
          })
          this.timer = setTimeout(() => {
            //美化登录效果
            this.isLoading = false
            this.closeDialog()
            this.resetForm('ruleForm')
          }, 600)
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    closeDialog() {
      this.$emit('closeDialog', false)
    },
    handleClose(done) {
      console.log('关闭')
      this.$confirm('确认关闭？')
        .then((_) => {
          this.closeDialog()
          // done()
        })
        .catch((_) => {})
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
    this.timer = null
  }
}
</script>

<style lang="less" scoped>
/deep/.dialog-container {
  margin-top: 20vh !important;
  padding: 0 20px;
  .el-dialog__body {
    padding: 15px 15px 0 15px !important;
  }
  .el-button.submit-btn {
    width: 100px;
  }
}

h3.title-center {
  text-align: center;
  font-size: 16px;
  letter-spacing: 2px;
}
</style>
