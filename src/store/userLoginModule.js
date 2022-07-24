import $axios from '@/axios/index.js'
import tempAvatarImg from '@/static/temp-avatar.png'


export default {
	namespaced:true,
	state:{
		userInfo:{
			avatarUrl:tempAvatarImg,
			nickname:'未登录',
			token:''
		}
	},
	mutation:{
		changeUserLoginStatus(){

		}
	},
	actions:{
		async userLogin({commit},{phone,password}){
			const res =await $axios.get(`/login/cellphone?phone=${phone}&password=${password}`)
			// const res = await $axios.post('/register/anonimous')
			// const res = await $axios.get('/personalized/newsong')

			console.log(res);
		},
		async userLogout(){
			const res = await $axios.get('/logout')
			if(res.code===200){
				return true
			}
			return false
		}
	}
}