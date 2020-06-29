<template>
	<div>		
		<home-header></home-header>
		<home-swiper :banners="banners"></home-swiper>	
		<company :swiperTame="swiperTame"></company>			
		<page-footer></page-footer>
		<foot-cantact></foot-cantact>	
	</div>
</template>

<script>
	import HomeHeader from './componet/header.vue'
	import HomeSwiper from './componet/swiper.vue'	
	import pageFooter from './componet/footer'
	import footCantact from './componet/foot-contact'
	import company from './componet/company'
	export default{
		name:"home",
		components:{
			HomeHeader,
			HomeSwiper,	
			company,
			pageFooter,
			footCantact,
			
		},
		data(){
			return{					
				banners:[
					{						
						imgs:require("../assets/image/mesBanner.jpg"),
						target:""
					},{
						imgs:require("../assets/image/maxBanner3.jpg"),
						target:""
					}
				],
				swiperTame:[
					{
						imgs:require("../assets/teamSwiper/fusheng.jpg"),
						target:""
					},{
						imgs:require("../assets/teamSwiper/heying.jpg"),
						target:""
					}
				]
				
			}
		}
	}
</script>

<style>
	body{
		width: 100%;
		overflow: hidden;
	}
	.el-timeline-item__timestamp{
		color:#0075c1;
		font-size:0.3rem
	}
</style>
