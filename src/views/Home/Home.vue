<template>
  <div class="home" ref="homeRef">
    <el-container class="home-container">
			
      <el-header>
				<home-nav />
			</el-header>

      <el-container class="home-main">
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
        
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeNav from './home-nav/home-nav.vue'
export default {
	components:{
		HomeNav
	}

}
</script>

<style lang="less" scoped>
div.home {
  position: absolute;
  width: 700px;
  height: 500px;
	box-shadow: 1px -1px 10px @borderColor,
							-1px 1px 10px @borderColor;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  .el-container.home-container {
		height: 100%;
    .el-header {
      border-bottom: 1px solid @borderColor;
			background-color: @navColor;
    }
		.el-container.home-main{
			height: 100%;
			.el-aside{
				border-right: 1px solid @borderColor;
			}
		}
		.el-footer{
			border-top: 1px solid @borderColor;
		}
  }
}
</style>
