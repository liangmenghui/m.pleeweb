<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="albumImgs" />
			<div class="banner-info">
				<div class="banner-tittle">{{ this.sightName }}</div>
				<div class="banner-number">
					<span class="el-icon-picture"></span>
					{{ this.gallaryImgs.length }}
				</div>
			</div>
		</div>

	<!-- 	<fade-animation> -->
			<common-gallary 
				:imgs="gallaryImgs" 
				v-show="showGallary" 
				@close="handleGallaryClose">
			</common-gallary>
	<!-- 	</fade-animation> -->
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';
import FadeAnimation from 'common/fade/FadeAnimation';
export default {
	name: 'FadeAnimation',
	props: {
		sightName:String,
		albumImgs: String,
		gallaryImgs: Array
	},
	components: {
		CommonGallary,
		FadeAnimation
	},
	data() {
		return {
			showGallary: false
		};
	},
	created() {
		
	},
	methods:{
		handleBannerClick(){			
			this.showGallary = true
		},
		handleGallaryClose(){
			this.showGallary = false
		}
	}
};
</script>

<style scoped>
	.banner{
		position: relative;
		overflow: hidden;
		height: 0;
		padding-bottom:55%;
		margin:0 auto;
		text-align: center;
		width: 100%;
		margin-bottom: 50px;
	}
	.banner-img{
		width: 98%;
	}
	.banner-info{
		display: flex;
		position: absolute;
		left: 0;
		right: 10px;
		bottom: 0;
		line-height: .6rem;
		color: #fff;
		background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
	}
	.banner-tittle{
		flex:1;
		font-size: .32rem;
		padding: 0 .2rem;
	}
	.banner-number{
		height: .32rem;
		line-height: .32rem;
		margin-top: .14rem;
		padding: 0 .4rem;
		border-radius: .2rem;
		background: rgba(0, 0, 0, .8);
		font-size: .24rem;
	}
	.banner-icon{
		font-size:0.24rem;
	}
</style>
