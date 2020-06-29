<template>
	<div class="common1">		
		<div class="item-title">
			主营业务
			<em>Product Service</em>
		</div>
		<ul class="brand clearfix">
			<li v-for="(item,index) in productList" :key="index">
				<a @click="toUrl(item.url)">
					<div class="icons">
						<em :class="item.icon"  class="iconfont"></em>
					</div>
					<p>{{item.text}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"product-list",
		props:{
			productList:Array
		},
		data(){
			return{
				
			}
		},
		methods:{
			toUrl(url){
				console.log(url)
			}
		}
	}
</script>

<style>
	.brand{
		margin-top:0.3rem;
		margin-bottom: 0.3rem;
	}
	.brand li{
		width: 20%;
		text-align: center;
		float: left;
	}
	.band li a{
		display: block;
		width: 100%;
		color:#686868;
		font-size: 0.3rem;
	}
	.icons{
		width: 1.13rem;
		height: 1.13rem;
		border-radius: 1.13rem;
		margin-bottom: 0.23rem;
		box-shadow: 1px 1px 0.12rem #e5e5e5;
		background: #fff;
		display: inline-block;
		text-align: center;
		line-height: 1.13rem;
		font-weight: 500;
	}
	.icons .iconfont{
		font-size:0.6rem;
		color:#0077AA;
	}
</style>
