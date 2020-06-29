<template>
	<div class="mt-3">
		<div class="item-title">
			成功案例
			<em>Successful Case</em>
		</div>
		<ul class="success clearfix">
			<li v-for="(item,index) in caseInfo" :key="index">
				<a>
					<img :src="item.img" alt="">
					<div class="win clearfix">
						<span class="fly">
							{{item.title}}
							<em>{{item.eglis}}</em>
						</span>
						<em class="iarrow"></em>
					</div>
				</a>				
			</li>
		</ul>
		<div class="customer mt-3">
			<div class="item-title">
				超过<span class="font-weight-bold text-info">100+</span>企业选择朋乐
				<em>More than 100 + Companies Choose PLEE</em>
			</div>
			<div class="swiper-container2">
			  <div class="swiper-wrapper" v-if="showSwiper">
			    <div class="swiper-slide" v-for="(item,index) in customer" :key="index">
					<div class="coop">
						<img :src="item.imgs"  alt="">
					</div>
				</div>			
			  </div>
			  <!-- Add Pagination -->
			  <div class="swiper-pagination2"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'case',
		props:{
			caseInfo:Array,
			customer:Array
		},
		data(){
			return{
				swiperOptions: {
					autopay:true,
					loop:true,
					pagination: {
						el: '.swiper-pagination'
					},				
				}
			}
		},
		computed:{
			showSwiper(){			
				return this.customer.length
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container2', {
			  slidesPerView: 3,
			  slidesPerColumn: 2,
			  spaceBetween: 30,
			  pagination: {
			    el: '.swiper-pagination2',
			    clickable: true,
			  },
			});
		}
	}
</script>

<style>
	.case{
		margin-top:30px;
	}
	ul.success{
		margin-top:0.48rem;
		padding:0 0 0.32rem 0.33rem;
	}
	ul.success li {
	    float: left;
	    width: 45.6%;
	    box-shadow: 1px 1px 0.14rem #e5e5e5;
	    margin-bottom: 0.32rem;
	    margin-right: 0.31rem;
	}
	ul.success li:nth-child(2),ul.success li:nth-child(4){
		margin-right:0;
	}
	ul.success li img{
		width: 100%;
		height:2rem;
		overflow: hidden;
	}
    .win {
        padding-left: 0.2rem;
		position: relative;
    }
	.fly{
		float:left;
		color:#255084;
		font-weight: bold;
		padding-bottom: 0.2rem;
		padding-top:0.3rem;
		font-size:0.3rem;
	}
	.fly em{
		display: block;
		line-height: 0.36rem;
		font-size: 0.26rem;
		color:#999;
		margin-top:5px;
	}
	.iarrow{
		position: absolute;
		padding:0.36rem 0.18rem 0;
		width:0.4rem;
		height: 0.4rem;
		background: url(../../assets/image/goto.jpg) no-repeat center bottom;
		background-size:0.4rem auto;
		top:0.2rem;
		right:0.5rem;		
	}
	.customer{
		background: #faf9f9;		
	}
	.swiper-container2{
		padding-left: 0.3rem;
		padding-bottom: 0.48rem;
		margin-top: 0.38rem;
	}
	.coop {
	    width: 2.6rem;	   
	    display: block;
		background: #fff;
		height:63px;
		text-align: center;
		
	}
	.coop img{
		width: 100%;
		background: #fff;
		text-align: center;
		margin:10px auto;
	}
	.swiper-container2 .swiper-slide{
		margin-top:8px!important
	}
</style>
