<template>
	<div class="swiperBox">
		<swiper ref="mySwiper1" :options="swiperOptions" v-if="showSwiper">
			<swiper-slide v-for="(item, index) in banners" :key="index">
				<a :href="item.traget"><img class="swpier-img" :src="item.src" alt="" /></a>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>		
	</div>
</template>

<script>
import {swiper, swiperSlide} from "vue-awesome-swiper";  


var vm = null;
export default {
	name: 'HomeSwiper',
	components: {		
		swiper,
		swiperSlide
	},
	props: {
		banners: Array
	},
	created() {		
	},
	data() {
		return {
			imgs: ['https://img1.qunarzz.com/sight/p0/1807/f3/f3a998c29724c22aa3.water.jpg_600x330_c61a3161.jpg'],
			showGallary: false,
			swiperOptions: {
				autopay: 3000,
				loop: true,
				pagination: '.swiper-pagination', //这里修改
				
			}
		};
	},
	computed: {
		showSwiper() {
			return this.banners.length;
		}
	},
	mounted() {
		
	},
	methods: {
		
	}
};
</script>

<style>
.swiperBox {
	margin-top: 1.2rem;
	width: 100%;
	height: 0;
	overflow: hidden;
	padding-bottom: 42%;
}
.swpier-img {
	width: 100%;
}
.swiperBox .swiper-pagination-bullet {
	width: 8px;
	height: 8px;
	display: inline-block;
	border-radius: 100%;
	background: #fff;
	opacity: 0.9;
}
.swiperBox .swiper-pagination-bullet-active {
	background: #f77309;
	opacity: 0.9;
}
</style>
