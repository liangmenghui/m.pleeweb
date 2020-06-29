<template>
	<div class="foot">
		<div class="col-xs-4 foot-nav">
			<span class="el-icon-s-home ficon"></span>
			<router-link to="/" class="ftext">首页</router-link>
		</div>
		<div class="col-xs-4 foot-nav foot-nav-2">
			<span class="iconfont ficon">&#xe66f;</span>
			<a class="ftext" href="tel:0752-3165698">电话</a>
			<!-- <router-link to="/" class="ftext">电话</router-link> -->
		</div>
		<div class="col-xs-4 foot-nav">
			<span class="el-icon-s-comment ficon"></span>
			<a class="ftext" href="tel:13928309049">咨询</a>
			<!-- <router-link to="/" class="ftext">咨询</router-link> -->
		</div>
	</div>
</template>

<script>
</script>

<style>
	.foot{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 54px;
		line-height: 54px;
		background: #255084;
		z-index: 2222;		
	}
	.foot-nav{
		width: 33.3%;
		float: left;
		text-align: center;		
		color:#fff;
	}
	.foot-nav .ficon{
		font-size: 0.45rem;
	}
	.foot-nav .ftext{
		font-size: 0.35rem;
		color:#fff;
		margin-left:5px;
	}
	.foot-nav-2 {
	    background: #fbb200;
	}
</style>
