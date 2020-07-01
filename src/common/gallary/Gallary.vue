<template>
	<div class="cont" @click="handleGallaryClick">
		<div class="wrapper">
		  <swiper :options="swiperOptions">
		    <swiper-slide
		      v-for="(item, index) in imgs"
		      :key="index"
		    >
		      <img class="gallary-img" :src="item" />
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		  </swiper>
		</div>			
	</div>
</template>

<script>
	import {swiper, swiperSlide} from "vue-awesome-swiper";	
	export default{
		name:"commonGallary",	
		components:{
			swiper, 
			swiperSlide
		},
		props: {
		  imgs: Array
		},		
		data(){
			return{
				showGallary:true,
				swiperOptions:{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					observeParents: true,
					observer: true					
				}
			}
		},
		methods:{
			handleGallaryClick(){
				this.$emit("close")
			}
		}
	}
</script>

<style scoped>
	.cont{
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 999;
		position: fixed;
		left:0;
		right:0;
		top:0;
		bottom: 0;
		background:#000;
	}
	.cont .swiper-container{
		overflow: inherit;
	}
	.wrapper{	
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	}
	.gallary-img{
		width: 100%;
	}
	.wrapper .swiper-pagination{
		color:#fff;
		bottom:-1rem;
	}
</style>
