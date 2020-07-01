<template>
	<div class="clientCase">		
		<home-header></home-header>
		<home-swiper :banners="banners"></home-swiper>		
		<case-list :caseInfo="caseInfo" ></case-list>
		<page-footer></page-footer>
		<foot-cantact></foot-cantact>
	</div>
</template>

<script>
	import HomeHeader from './componet/header.vue'
	import HomeSwiper from './componet/swiper.vue'
	import caseList from './componet/case-list.vue'
	import pageFooter from './componet/footer'	
	import footCantact from './componet/foot-contact'
	export default{
		name:"ClientCase",
		components:{
			HomeHeader,
			HomeSwiper,			
			pageFooter,
			footCantact,
			caseList
		},
		data(){
			return{					
				banners:[
					{						
						src:require("../assets/case/casebanner.jpg"),
						target:""
					}
				],
				caseInfo:[
					{
						id:'001',
						pic:require("../assets/case/EVE.png"),
						url:"",
						cusName:"EVE亿纬锂能MES系统",
						content:"亿纬锂能创立于2001年,自2009年在深圳创业板上市至今,已形成锂原电池、锂离子电池、电源系统... ",
						time:"2019-03"
						
					},
					{
						id:'002',
						pic:require("../assets/case/sumeida.jpg"),
						url:"",
						cusName:"江苏苏美达MES系统",
						content:"江苏苏美达集团有限公司（苏美达集团）成立于1978年，是中国机械工业集团有限公司（国机集团）的重要成员企业。国机集团是由中央直接管理的国有重要骨干企业，位于世界500强企业第250位",
						time:"2018年9月"
					
					},
					{
						id:'003',
						pic:require("../assets/case/hge.jpg"),
						url:"",
						cusName:"HEG海格科技HR系统",
						content:"惠州海格科技股份有限公司成立于2008年，经过多年专注的发展，在电子制造服务（EMS）领域积累了丰富的经验和技术。",
						time:"",
						time:"2018-05"
						
					},
					{
						id:'004',
						pic:require("../assets/case/junya.jpg"),
						url:"",
						cusName:"广东俊骏亚电子科技MES系统",
						content:"骏亚集团，成立于2005年，作为亚洲大型PCB制造及配套服务商，国家级高新技术企业，其产品广泛应用于IT通讯器材、消费电子、电脑及周边、 汽车电子、工控能源等行业，销售遍布",
						time:"2019-08"
						
					}
					
				],	
				
				
			}
		}
	}
</script>

<style>
	body{
		overflow: hidden;
	}
	.clientCase{
		background:#f3f3f3;
	}
</style>
