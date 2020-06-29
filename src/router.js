import Vue from 'vue'
import Router from 'vue-router'
import home from './view/home.vue'
import about from './view/about.vue'
import product from './view/product.vue'
import absolute from './view/absolute.vue'
import clientCase from './view/clientCase.vue'
Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			name:'home',
			component:home,
			meta:{
				title:"惠州市朋乐信息技术有限公司"
			}
		},
		{
			path:'/about',
			name:'about',
			component:about,
			meta:{
				title:"关于我们"
			}
		},
		{
			path:'/product',
			name:'product',
			component:product,
			meta:{
				title:"产品中心"
			}
		},
		{
			path:'/absolute',
			name:'absolute',
			component:absolute,
			meta:{
				title:"解决方案"
			}
		},
		{
			path:'/clientCase',
			name:'clientCase',
			component:clientCase,
			meta:{
				title:"客户案例"
			}
		}
	]	
})
