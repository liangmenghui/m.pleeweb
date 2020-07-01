<template>
	<div>
		<home-header></home-header>
		<home-swiper :banners="banners"></home-swiper>
		<product-detail :productList="productList" :serice="serice"></product-detail>
		<page-footer></page-footer>
		<foot-cantact></foot-cantact>
	</div>
</template>

<script>
	import HomeHeader from './componet/header.vue'
	import HomeSwiper from './componet/swiper.vue'
	import productDetail from './componet/product-detail'
	import pageFooter from './componet/footer'
	import footCantact from './componet/foot-contact'
	export default{
		name:"product",
		components:{
			HomeHeader,
			HomeSwiper,
			productDetail,
			pageFooter,
			footCantact
		},
		data(){
			return{
				banners:[
					{						
						src:require("../assets/prdouct/bannerpic.jpg"),
						target:""
					},{
						src:require("../assets/image/maxBanner3.jpg"),
						target:""
					}
				],
				productList:[
					{
						icon:"icon-youhuayunhang",
						url:"",
						text:"快速开发配置平台"
					},
					{
						icon:"icon-shujujicheng",
						url:"",
						text:"MES生产制造执行系统"
					},
					{
						icon:"icon-cangku",
						url:"",
						text:"WMS仓库管理系统"
					},
					{
						icon:"icon-shouye-xiangmushishi",
						url:"",
						text:"设备管理系统"
					},
					{
						icon:"icon-fuwu",
						url:"",
						text:"QMS质量管理系统"
					},
					{
						icon:"icon-chenben",
						url:"",
						text:"阿米巴经营管理系统"
					},
					{
						icon:"icon-rlzy",
						url:"",
						text:"HR人力资源管理系统"
					},
					{
						icon:"icon-_renliziyuan",
						url:"",
						text:"MOM企业运营管理系统"
					},					
					{
						icon:"icon-kanban",
						url:"",
						text:"电子看板管理系统"
					},					
				],
				serice:[
					{
						pic:require("../assets/service/ansj.jpg"),
						title:"方案设计",
						content:"智慧工厂/规划工厂/仿真设计/智能制造/方案设计/智能物流设计"
					},{
						pic:require("../assets/service/zx.jpg"),
						title:"咨询服务",
						content:"精益咨询/分析诊断/数字化体验/流程优化"
					},{
						pic:require("../assets/service/ldsh.jpg"),
						title:"系统集成",
						content:"设备集成/系统集成/自动化方案集成/IOT物联网集成"
					},{
						pic:require("../assets/service/MES.jpg"),
						title:"落地实施",
						content:"Plee Way/项目实施/二次开发/应用培训"
					},{
						pic:require("../assets/service/ldss.jpg"),
						title:"运维服务",
						content:"方案优化/定期巡检/系统升级/远程监控"
					}
				]
			}
		}
	}
</script>

<style>
</style>
