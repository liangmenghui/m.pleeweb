<template>
	<div class="swiperBox">
		<swiper ref="mySwiper1" :options="swiperOptions" v-if="showSwiper">
			<swiper-slide v-for="(item,index) in banners" :key="index">
				<a :href="item.traget">
					<img class="swpier-img" :src="item.imgs" alt="">
				</a>
			</swiper-slide>	
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
	  banners: Array
	},
	data() {
		return {			
			swiperOptions: {
				autopay:true,
				loop:true,
				pagination: {
					el: '.swiper-pagination'
				},				
			}
		};
	},
	computed:{
		showSwiper(){			
			return this.banners.length
		}
	},
	mounted() {
		console.log(this.banners)
	}
	
};
</script>

<style>
	.swiperBox{
		margin-top:1.2rem;
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom:42%;		
	}
	.swpier-img{
		width: 100%;
	}
</style>
