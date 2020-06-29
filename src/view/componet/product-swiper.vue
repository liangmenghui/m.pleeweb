<template>
	<div class="common1">
		<div class="item-title">
			核心产品
			<em>Core Products</em>
		</div>
		<swiper ref="mySwiper" :options="swiperOptions" class="slider">
		    <swiper-slide v-for="(item,index) in swiperList" :key="index">
				<div class="content">
					<img :src="item.img" alt="">
					<div class="recomment">
						<a href="">
							<h6 class="systit">{{item.title}}</h6>
							<p>{{item.content}}</p>
						</a>
						<a href="" class="goto"></a>
					</div>
				</div>
			</swiper-slide>		
		    <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				swiperList:[
					{
						img:require('../../assets/image/swipersc.jpg'),
						title:"MES生产管理",
						content:"MES系统是一套面向制造企业车间执行层的生产信息化管理系统.."
					},
					{
						img:require('../../assets/image/swipercanku.jpg'),
						title:"仓库管理",	
						content:""
					},
					{
						img:require('../../assets/image/swipercj.jpg'),
						title:"车间管理",
						content:""
					},
					{
						img:require('../../assets/image/kanban.jpg'),
						title:"生产看板",
						content:""
					}
					
				],
				swiperOptions:{
					pagination:{
						el:'.swiper-pagination'
					}
				}
			}
		}
	}
</script>


<style>
	.slider{
		width: 96%;
		margin:0 auto;
	}
	.content{
		width:100%;
		margin:0 atuo;
	}
	.content img{
		width: 99%;
		height: 240px;
	}
	.systit {
	    font-size: 0.3rem;
	    color: #333;
	    font-weight: bold;
	    height: 0.58rem;
	    line-height: 0.58rem;
	    background: url(../../assets/image/systit.png) no-repeat left bottom;
	    margin-bottom: 0.2rem;
	    background-size: 0.64rem 1px;
	}
	.content p{
		line-height: 0.5rem;
		font-size: 0.3rem;
		color: #999;
	}
	.goto {
	    display: inline-block;
	    padding-top: 0.22rem;
	    background: url(../../assets/image/goto.jpg) no-repeat left bottom;
	    width: 0.46rem;
	    height: 0.46rem;
	    background-size: 0.46rem auto;
	}
</style>
