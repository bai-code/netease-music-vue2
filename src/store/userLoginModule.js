import $axios from '@/axios/index.js'
import tempAvatarImg from '@/static/temp-avatar.png'

const  loginTempUserInfo =  {
  avatarUrl: tempAvatarImg,
  nickname: '未登录',
  token: ''
}

// 读取本地用户信息
const userInfo = JSON.parse(localStorage.getItem('userInfo')) || loginTempUserInfo

export default {
  namespaced: true,
  state: {
    userInfo,
  },
  mutations: { 
    // 登录 或  退出 修改本地存储信息
    changeUserLoginStatus(state, { avatarUrl, nickname, token }) {
      const userInfo = {
        avatarUrl,
        nickname,
        token
      }
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  },
  actions: {
    async userLogin({ commit }, { phone, password }) {
      const { profile:{avatarUrl,nickname}, token, code } = await $axios.get(
        `/login/cellphone?phone=${phone}&password=${password}`
      )
      if (code === 200) {
        commit('changeUserLoginStatus',{avatarUrl,nickname,token})
        return true
      } else {
        return false
      }
    },
    async userLogout({commit}) {
      const res = await $axios.get('/logout')
      if (res.code === 200) {
        commit('changeUserLoginStatus',loginTempUserInfo)
        return true
      }
      return false
    }
  }
}
