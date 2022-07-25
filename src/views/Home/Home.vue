<template>
  <div class="home" ref="homeRef">
    <el-container class="home-container">
			
      <el-header>
				<home-nav />
			</el-header>

      <el-container class="home-main">
        <el-aside width="200px" class="aside-container">
          <router-link class="router-link" :to='{name:"findMusic"}'>发现音乐</router-link>
          <router-link class="router-link" :to='{name:"podcast"}'>播客</router-link>
          <router-link class="router-link" :to='{name:"video"}'>视频</router-link>
          <router-link class="router-link" :to='{name:"concern"}'>关注</router-link>
          <router-link class="router-link" :to='{name:"personal-fm"}'>私人FM</router-link>

        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
        
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
			.el-aside.aside-container{
				border-right: 1px solid @borderColor;
        display: flex;
        flex-direction: column;
        padding-left: 30px;
        .router-link{
          height: 40px;
          line-height: 40px;
          margin: 5px 0;
          background: @asideSelectColor;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          padding-left: 10px;
          text-decoration: none;
          color: @asideFontColor;
          font-size: 15px;
        }
        .router-link-active{
          font-size: 17px;
          font-weight: bolder;
        }
			}
		}
		.el-footer{
			border-top: 1px solid @borderColor;
		}
  }
}
</style>
