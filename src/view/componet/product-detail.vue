<template>
	<div class="common1 product">		
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
					<p class="cont">{{item.text}}</p>
				</a>
			</li>
		</ul>
		
		<div class="sec2">
			<div class="item-title">
				服务产品
				<em>Product Service</em>
			</div>
			<ul class="service">
				<li v-for="(item,index) in serice" :key="index">
					<a  class="clearfix">
						<span class="serimg">
							<img :src="item.pic" alt="">
						</span>
						<div class="operate">
							<h6 class="aptit">{{item.title}}</h6>
							<p>{{item.content}}</p>
							<i></i>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"product-list",
		props:{
			productList:Array,
			serice:Array
		},
		data(){
			return{
				
			}
		},
		methods:{
			toUrl(url){
				
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
	.product .brand{
		margin-top:0.3rem;
		margin-bottom: 0.3rem;
	}
	.product .brand li{
		width: 33%;
		text-align: center;
		float: left;
		margin-bottom: 0.4rem;
	}
	.product .band li a{
		display: block;
		width: 100%;
		color:#686868;
		font-size: 0.3rem;
	}
	.product .icons{
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 1.2rem;
		margin-bottom: 0.23rem;
		box-shadow: 1px 1px 0.12rem #e5e5e5;
		background: #fff;
		display: inline-block;
		text-align: center;
		line-height: 1.2rem;
		font-weight: 500;
	}
	.product .icons .iconfont{
		font-size:0.7rem;
		color:#0077AA;
	}
	.product .cont{
		/* display:block;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis; */
		white-space:normal; 
		width:200px;
		width: 80%;
		padding:0 5px;
		line-height: 1.5;
	}
	.sec2{
		padding:0.64rem 0.32rem 1.1rem 0.3rem;
		background:#f2f6fb;		
	}
	ul.service{
		margin-top:0.28rem;
		background:#fff;
	}
	
	ul.service li{
		margin-bottom: 10px;
	}
	
	.serimg{
		width: 50%;
		display: inline-block;
		float: left;
	}
	
	  
	.operate{
		width: 50%;	
		float:right;
		text-align: center;
		position:relative;
		padding:0.08rem 0.38rem 0;
		box-sizing: border-box;
	}
	
	.aptit{
		line-height: 0.6rem;
		color:#ec6b00;
		font-size: 0.3rem;
	}
	.operate p {
	    font-size: 0.26rem;
	    color: #666;
	    line-height: 0.4rem;
	    display: inline-block;
	}
	.serimg img{
		width: 100%;
	}
</style>
