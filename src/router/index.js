import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },{
    path:'/home',
    component:Home,
    redirect:{name:'findMusic'},
    children:[
      {
        path:'findMusic',  //发现音乐
        name:'findMusic',
        component:()=>import('@/views/Main/findMusic.vue')
      },{
        path:'podcast',  // 播客
        name:'podcast',
        component:()=>import('@/views/Main/podcast.vue')
      },{
        path:'video',   // 视频
        name:'video',
        component:()=>import('@/views/Main/video.vue')
      },{
        path:'concern',  // 关注
        name:'concern',
        component:()=>import('@/views/Main/concern.vue')
      },{
        path:'personal-fm',  // 私人fm
        name:'personal-fm',
        component:()=>import('@/views/Main/personal-fm.vue')
      }
     
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
