<template>
	<div>
		<div class="item-title" style="pdding:0;margin-top:-30px">
			客户案例
			<em>Client Case</em>
		</div>
		<div class="caseSec">
			<ul class="triumph">
				<li>
					<a class="clearfix">
						<span>
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
	}
	.triumph{
		margin-bottom: 0.34rem;
	}
	ul.triumph li {
	    padding: 0.32rem 0;
	    border-bottom: 1px solid #e1e1e1;
		width: 100%;
	}
</style>
