<template>
	<div>
		<div class="item-title" style="pdding:0;margin-top:-30px">
			客户案例
			<em>Client Case</em>
		</div>
		<div class="caseSec">
			<ul class="triumph">
				<li v-for="(item,index) in caseInfo" :key="index">
					<a class="clearfix">
						<span class="timg">
							<img :src="item.pic" alt="">
						</span>
						<div class="histry">
							<h6 class="catit">{{item.cusName}}</h6>
							<p>{{item.content}}</p>
							<span class="clock">{{item.time}}</span>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"case-list",
		props:{
			caseInfo:Array
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.caseSec{
		padding: 0.1rem 0.32rem 0;
		min-height: 380px;
		background: #fff;
	}
	.triumph{
		margin-bottom: 0.34rem;
	}
	ul.triumph li {
	    padding: 0.32rem 0;
	    border-bottom: 1px solid #e1e1e1;
		width: 100%;
	}
	.timg {
	    width: 40%;
	    height: 2rem;
	    display: inline-block;
	    float: left;
	}
	.timg img{
		width: 100%;
	}
	.histry{		
		float: right;
		width: 55%;
	}
	.catit{
		font-size:0.3rem;
		color:#202020;
		margin-bottom: 0.14rem;
	}
	.histry p{
		font-size:0.25rem;
		color:#888;
		height: 60px;
		line-height: 0.45rem;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;  /* 超出两行*/
		-webkit-box-orient: vertical;
		overflow: hidden;

	}
	.clock {
	    margin-top: 0.16rem;
	    font-size: 0.2rem;
	    color: #989898;
	    display: block;
	    line-height: 0.24rem;
	    background: url(../../assets/case/clock.png) no-repeat;
	    padding-left: 0.36rem;
	    background-size: 0.24rem auto;
	}
</style>
