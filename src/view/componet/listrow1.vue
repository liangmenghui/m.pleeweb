<template>
	<div class="listbody">
		<div class="item-title" style="pdding:0;">
			行业解决方案
			<em>Solution</em>
		</div>
		<el-row>
		  <el-col :span="24" v-for="(item, index) in listInfo" :key="index" >
		    <el-card :body-style="{ padding: '0px' }"  shadow="never" style="margin-top:15px">
		      <img :src="item.img" class="image">
		      <div style="padding: 14px;">
		        <span class="title">{{item.title}}</span>
				<p>{{item.content}}</p>
		        <div class="bottom clearfix">		          
		          <el-button  type="primary" plain class="button" >查看详情</el-button>
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>

	</div>
</template>

<script>
	export default{
		name:"listrow1",
		props:{
			listInfo:Array
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.listbody{
		background: #f3f3f3;
		width: 96%;
		margin:0 auto;
		padding:0.2rem;
		margin-top:-30px;
	}
	.image{
		width: 100%;
	}
	.listbody .title{
		font-size: 0.4rem;
		font-weight: 600;
		font-family: "microsoft yahei";
	}
	.listbody p{
		font-size: 0.3rem;
		color: #666666;
		line-height: 30px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>
