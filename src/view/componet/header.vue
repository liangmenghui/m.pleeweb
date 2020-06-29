<template>
	<div >
		<div class="header">
			<div class="container-s c">
				<div class="logo fl">
					<a href=""><img src="../../assets/image/logo.png" alt=""></a>
				</div>
				<div class="menuBtn fr wap-nav-click" @click="drawer = true">
					<img src="../../assets/image/menu.png" alt="">
				</div>
			</div>
		</div>
		<el-drawer		  
		  title="PLEE"
		  :direction="direction"
		  :visible.sync="drawer"
		  :with-header="true">
		  <ul class="menu">
		  	<li class="active"><router-link to="/">公司首页</router-link></li>
		  	<!-- <li><a href="">关于朋乐</a></li> -->
		  	<li><router-link to="/product">产品服务</router-link></li>
		  	<li><router-link to="/absolute">解决方案</router-link></li>
		  	<li><router-link to="/clientCase">客户案例</router-link></li>
		  	<li><router-link to="">新闻中心</router-link></li>
		  	<li><router-link to="/about">关于我们</router-link></li>
		  </ul>
		</el-drawer>
	</div>
</template>

<script>
	export default{
		name:"homeHeader",
		data(){
			return{
				  drawer: false,
				  direction:"rtl"
			}
		}
	}
</script>

<style>
	/* 1rem = html font-size = 50px
	86/100 =0.86rem */
	.el-drawer__header{
		margin-bottom: 10px;
	}
	
	.header{
		width: 100%;
		position: fixed;
		top:0px;
		z-index: 222;
		background: #fff;
		height:.9rem;
	}
	.header .container-s{
		width: 96%;
		margin:0 auto;
	}
	.container-s .logo{
		width: 50%;
		margin:.2rem 0;
	}
	.logo img{
		width: 3rem;
	}
	.menuBtn{
		width: 8.5%;
		margin-top:.16rem;
	}
	.menuBtn img{
		width:0.7rem;
	}
	.el-drawer__body{
		background: #255084;
		z-index: 1111;
		width: 4rem;
	}
	.menu {
		padding-top:0.5rem;
	}
	.menu li{
		height:1rem;
		border:1px solid #255084;		
		line-height: 1rem;
		padding-left:0.6rem;
	}
	.menu li a{
		font-size: 0.3rem;
		color:#fff;
	}
</style>
