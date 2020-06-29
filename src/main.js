import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import router from './router.js'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/common.css'
import './assets/styles/border.css'
import './assets/iconfont/iconfont.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

router.beforeEach((to,from,next)=>{
	if(to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
