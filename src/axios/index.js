import axios from 'axios'

// const inter = axios.create({
// 	baseURL:'/api',

// })
axios.defaults.baseURL='/api'

axios.interceptors.request.use(config=>{
	return config
})

axios.interceptors.response.use(config=>{
	if(config.status===200){
		return config.data
	}
},error=>{
	console.log(error);
})

export default axios