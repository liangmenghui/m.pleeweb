<template>
	<div>		
		<home-header></home-header>
		<home-swiper :banners="banners"></home-swiper>
		<index-about></index-about>
		<product-list :productList="productList"></product-list>
		<product-swiper></product-swiper>
		<case-list :caseInfo="caseInfo" :customer="customer"></case-list>
		<page-footer></page-footer>
		<foot-cantact></foot-cantact>
	</div>
</template>

<script>
	import HomeHeader from './componet/header.vue'
	import HomeSwiper from './componet/swiper.vue'
	import IndexAbout from './componet/about.vue'
	import productList from './componet/product-list'
	import productSwiper from './componet/product-swiper'
	import pageFooter from './componet/footer'
	import caseList from './componet/case'
	import footCantact from './componet/foot-contact'
	export default{
		name:"home",
		components:{
			HomeHeader,
			HomeSwiper,
			IndexAbout,
			productList,
			productSwiper,
			caseList,
			pageFooter,
			footCantact
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
				caseInfo:[
					{
						img:require("../assets/image/dztx.jpg"),
						url:"",
						title:"电子通讯行业",
						eglis:"Electronic"
					},
					{
						img:require("../assets/image/xny.png"),
						url:"",
						title:"新能源行业",
						eglis:"New Energy"
					},
					{
						img:require("../assets/image/wjcz.jpg"),
						url:"",
						title:"五金制造行业",
						eglis:"Hardware Manufact"
					},
					{
						img:require("../assets/image/PCB.jpg"),
						url:"",
						title:"PCB行业",
						eglis:"PCB"
					}
					
				],
				customer:[
					{imgs:require("../assets/logo/smd.png")},
					{imgs:require("../assets/logo/htkj.png")},
					{imgs:require("../assets/logo/xinyu.png")},
					{imgs:require("../assets/logo/huayang.png")},
					{imgs:require("../assets/logo/yiwei.png")},
					{imgs:require("../assets/logo/pft.png")},
					{imgs:require("../assets/logo/tianbao.png")},
					{imgs:require("../assets/logo/yizhang.png")},
					{imgs:require("../assets/logo/yongxin.png")},
					{imgs:"http://www.shpcb.com/templates/default/images/logo.png",},
					{imgs:"http://www.szxinken.com/cn/images/logo.png"},
					{imgs:require("../assets/logo/fnkj.jpg")},
				],
				productList:[
					{
						icon:"icon-zixun",
						url:"",
						text:"顾问服务"
					},
					{
						icon:"icon-fangan",
						url:"",
						text:"方案设计"
					},
					{
						icon:"icon-shujujicheng",
						url:"",
						text:"系统集成"
					},
					{
						icon:"icon-shouye-xiangmushishi",
						url:"",
						text:"落地实施"
					},
					{
						icon:"icon-yunying",
						url:"",
						text:"运营服务"
					},
				]
				
			}
		}
	}
</script>

<style>
	body{
		overflow: hidden;
	}
</style>
