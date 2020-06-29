<template>
	<div class="absolute">		
		<home-header></home-header>
		<home-swiper :banners="banners"></home-swiper>			
		<absolu-list :listInfo="listInfo">				
		</absolu-list>
		<page-footer></page-footer>
		<foot-cantact></foot-cantact>
	</div>
</template>

<script>
	import HomeHeader from './componet/header.vue'
	import HomeSwiper from './componet/swiper.vue'
	import absoluList from './componet/listrow1.vue'
	import pageFooter from './componet/footer'	
	import footCantact from './componet/foot-contact'
	export default{
		name:"absolute",
		components:{
			HomeHeader,
			HomeSwiper,			
			pageFooter,
			footCantact,
			absoluList
		},
		data(){
			return{					
				banners:[
					{						
						imgs:require("../assets/absolut/abslt.jpg"),
						target:""
					}
				],
				
				listInfo:[					
					{
						img:require("../assets/image/dzhy.jpg"),
						url:"",
						title:"电子行业MES系统解决方案",
						content:" 随着全球经济一体化的不断加剧，中国在电子组装、SMT贴片、PCB组装等领域取得了很大的突破，企业规模和数量随着不断增加，造成成本压力增加、产品生命...",
						
					},
					{
						img:require("../assets/image/xny.png"),
						url:"",
						title:"新能源行业MES系统解决方案",
					
					},
					{
						img:require("../assets/image/wjcz.jpg"),
						url:"",
						title:"五金制造行业MES系统解决方案",
						
					},
					{
						img:require("../assets/image/PCB.jpg"),
						url:"",
						title:"PCB行业MES系统解决方案",
						
					}
					
				]	
				
				
			}
		}
	}
</script>

<style>
	body{
		overflow: hidden;
	}
	.absolute{
		background:#f3f3f3;
	}
</style>
