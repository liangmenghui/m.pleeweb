<template>
	<div>
		<div class="aboutInfo">
			<div class="container-s">
				<div class="title txt-c">
					<h2>关于朋乐</h2>
					<em>ABOUT US</em>
				</div>
				<p>惠州市朋乐信息技术有限公司成立于2014年，是一家国家高新技术企业，下设华南区和华东区分公司，现有员工45+人，其中博士2人.
朋乐信息拥有强大的研发能力、自主研发开源式的快速开发平台；拥有卓越的服务能力，为制造企业提供全面的顾问咨询、方案设计、软硬件系统集成、建设实施和运维服务等系列服务......</p>
			<router-link to="/about" class="more txt-c">MORE+</router-link>
			<!-- <a class="more txt-c" >MORE+</a> -->
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"aboutpage",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.container-s{
		width: 96%;
		margin:0 auto;
	}
	.aboutInfo p{
		font-size: .25rem;
		line-height: 200%;
		text-indent: 2em;
		margin-bottom: .15rem;		
	}
	.more{
		display: block;
		width: 96%;
		border:1px solid #255084;
		font-size:0.3rem;
		line-height: 240%;
		color:#255084;
		text-align: center;
		margin-top:10px;
	}
</style>
