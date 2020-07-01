<template>
	<div class="container-s">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="公司简介" name="first">
				<div class="absect1">
					<div class="item-title" style="margin-bottom: 10px;">
						公司简介
						<em>Company Profile</em>
					</div>
					<div class="spica"><img src="../../assets/image/timg.jpg" alt="" /></div>
					<p style="text-indent: 2em; line-height: 2em;">
						惠州市朋乐信息技术有限公司成立于2014年，是一家国家高新技术企业，下设华南区和华东区分公司，现有员工45+人，其中博士2人.
						朋乐信息拥有强大的研发能力、自主研发开源式的快速开发平台；拥有卓越的服务能力，为制造企业提供全面的顾问咨询、方案设计、软硬件系统集成、建设实施和运维服务等系列服务
						朋乐信息将持续秉着“朋乐我乐、是客户亦是朋友”的经营理念，通过平台级的产品和专业的实施服务，以科技为核心，以服务为导向，多层次、多模式实现企业数字化转型升级，为中国制造企业打造智慧工厂，全力推进工业互联网发展，核心助力中国制造2025.
					</p>
					<p></p>
				</div>
				<div class="absect2">
					<div class="item-title" style="margin-bottom: 10px;">
						发展历程
						<em>Development</em>
					</div>
					<div class="development">
						<div class="timelines">
							<el-timeline>
								<el-timeline-item
									v-for="(activity, index) in activities"
									:key="index"
									:icon="activity.icon"
									:type="activity.type"
									:color="activity.color"
									:size="activity.size"
									:timestamp="activity.timestamp"
								>
									{{ activity.content }}
								</el-timeline-item>
							</el-timeline>
						</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="资质证书" name="second">
				<div class="item-title" style="margin-bottom: 10px;">
					资质证书
					<em>Certificate</em>
				</div>
				<ul class="case-list">
					<li v-for="(item, index) in caseList" :key="index">
						<a href="">
							<img :src="item.img" alt="" />
							<p class="case-name txt-c">{{ item.text }}</p>
						</a>
					</li>
				</ul>
			</el-tab-pane>
			<el-tab-pane label="企业理念" name="third">
				<div class="item-title" style="margin-bottom: 10px;">
					企业理念
					<em>manager Idea</em>
					<p class="text-center"><img class="mancenter" src="../../assets/image/about.jpg" alt="" /></p>
				</div>
			</el-tab-pane>
			<el-tab-pane label="企业相册" name="team">
				<album
				 :albumImgs="albumImgs" 
				 :sightName="sightName"
				 :gallaryImgs="gallaryImgs"
				 >
				</album>
				<!-- <swiper ref="mySwiper1" :options="swiperOption" >
					<swiper-slide class="teamSwiper" v-for="(item,index) in swiperTame" :key="index">
						<a>
							<img class="swpier-img" :src="item.imgs" alt="">
						</a>
					</swiper-slide>	
					<div class="swiper-pagination"  slot="pagination"></div>
				</swiper> -->				 
			</el-tab-pane>			
			<el-tab-pane label="人才招聘" name="fourth" style="margin-bottom: 4.5rem;">
				<el-collapse v-model="activeCollapse">
					<el-collapse-item v-for="(apply, index) in employList" :key="index">
						<template slot="title">
							<div @click="handleChange(apply)">
								<span class="">{{ apply.empName }}</span>
								<span class="addr">{{ apply.empAddr }}</span>
							</div>
						</template>
						<div>{{ apply.content }}</div>
						<div style="margin-top:10px">
							岗位要求:
							<br />
							{{ apply.requireTxt }}
						</div>
					</el-collapse-item>
				</el-collapse>
			</el-tab-pane>
			<el-tab-pane label="联系我们" name="fifth">
				<baidu-map :center="center" :zoom="zoom" @ready="handler" class="bm-view" ak="67jMQ5DmYTe1TLMBKFUTcZAR">
					<bm-marker :position="{ lng: 114.348905, lat: 23.027115 }" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
						<bm-label content="惠州市朋乐信息技术有限公司" :labelStyle="{ color: 'red', fontSize: '14px' }" :offset="{ width: -35, height: 30 }" />
					</bm-marker>
				</baidu-map>
			</el-tab-pane>
		</el-tabs>	
	</div>
</template>

<script>
import { BaiduMap, BmMarker, BmLabel } from 'vue-baidu-map';
import album from './album.vue';
var vm = null;
export default {
	name: 'company',
	props:{
		swiperTame:Array
	},
	components: {
		BaiduMap,
		BmLabel,
		BmMarker,
	    album,
	},
	data() {
		return {
			center: { lng: 114.348905, lat: 23.027115 },
			zoom: 15,
			activeCollapse: ['1'],
			activeName: 'first',
			albumImgs: 'https://img1.qunarzz.com/sight/p0/1807/f3/f3a998c29724c22aa3.water.jpg_600x330_c61a3161.jpg',			
			gallaryImgs: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
			sightName: "朋乐全体成员",
			activities: [
				{
					content: '研究国内外MES系统的产品及相关标准自主研发PMS快速开发平台，搭建MES系统',
					timestamp: '2009年2月',
					size: 'large',
					icon: 'el-icon-star-on',
					color: '#0bbd87'
				},
				{
					content: '朋乐信息成立并落户科融创业大厦，开启新征程',
					timestamp: '2014年3月',
					color: '#0bbd87'
				},
				{
					content: '取得多项专利和软件著作权自主研发MES系统、QMS系统、设备资产管理系统、HR系统',
					timestamp: '2015年5月',
					size: 'large'
				},
				{
					content: '国家高新技术企业 仲恺恺旋新锐团队',
					timestamp: '2016年1月'
				},
				{
					content: 'PMS系统V3.0发布客户数突破50家',
					timestamp: '2017年10月'
				},
				{
					content: '为150+家制造企业提供智能制造系统解决方案',
					timestamp: '2020年',
					type: 'primary'
				}
			],
			caseList: [
				{
					img: require('../../assets/cerit/axhs.jpg'),
					text: '国家高新技术企业'
				},
				{
					img: require('../../assets/cerit/REELID.jpg'),
					text: 'REELID商标注册证书'
				},
				{
					img: require('../../assets/cerit/zjb.jpg'),
					text: '优秀企业单位'
				},
				{
					img: require('../../assets/cerit/sclpx.jpg'),
					text: '生产力培训'
				}
			],
			employList: [
				{
					empName: 'JAVA工程师',
					empAddr: '广东惠州',
					content: '1.根据开发进度和任务分配，完成相应软件模块的设计、开发任务、2进行程序单元、功能的测试，定位软件存在的缺陷并修复。3、进行项目文档的编写和完善',
					requireTxt: '1.精通Java、Html(5)、JSP、JavaScript；熟悉JQuery、Spring、SpringMvc、Mybatis等开发技术'
				},
				{
					empName: '项目经理&实施顾问',
					empAddr: '广东惠州',
					content: '1.负责IMS项目管理：现场调研、解决方案设计、流程优化、数据整理、用户培训等相关工作、2.保持与项目组成员的良好沟通，保证项目进度与质量',
					requireTxt:
						'1.本科及以上学历，思维清晰，具备良好的沟通表达能力和文档撰写能力；2.熟悉制造业生产制造业务，三年以上制造业工作经验，对现场生产制造管理、生产跟踪、质量管理、生产物流等有深刻理解；对自动化设备整合及其他系统如：ERP、MES等系统有一定了解；'
				}
			],			
			swiperOption: {				
				autoplay: 1000,//这里修改
				loop:true,
				pagination:'.swiper-pagination',//这里修改				
				slidesPerView:1,				
				
			},
		};
	},
	methods: {
		handleClick(tab, event) {
			//console.log(tab, event);
		},
		handleChange(val) {
			//console.log(val);
		},
		handler({ BMap, map }) {
			//console.log(BMap, map);
			this.center.lng = 114.348905;
			this.center.lat = 23.027115;
			this.zoom = 15;
		}		
	},
	mounted() {
		this.lng = 114.348905;
		this.lat = 23.027115;
		this.zoom = 15;
	}
};
</script>

<style>
.bm-view {
	width: 100%;
	height: 300px;
}
.el-tabs__item {
	font-size: 0.3rem;
	height: 50px;
	line-height: 50px;
	font-weight: 600;
}
.absect1 {
	padding: 0.4rem 0.32rem 0.44rem;
}
.spica {
	text-align: center;
	line-height: 3rem;
	margin-bottom: 20px;
}
.absect2 {
	padding: 0.5rem 0.31rem;
}
.development {
	margin-bottom: 0.55rem;
	position: relative;
}
.timelines {
	width: 96%;
	margin: 0 auto;
	margin-top: 1rem;
}
.el-timeline-item__content {
	line-height: 0.45rem;
	font-size: 0.3;
}
.case-list {
	overflow: hidden;
	width: 103%;
	margin: 1rem auto 1.375rem;
}
.case-list li {
	float: left;
	width: 46%;
	margin-right: 4%;
	margin-bottom: 0.5rem;
}
.case-list li a {
	display: block;
}
.case-list li a img {
	display: block;
	border-bottom: none;
	border: solid 1px #f7f7f7;
	width: 100%;
	height: 160px;
	overflow: hidden;
}
.case-list li .case-name {
	width: 100%;
	font-size: 0.3rem;
	line-height: 220%;
	color: #333;
	background: #f9f9f9;
}
.mancenter {
	width: 100%;
}
.addr {
	margin-left: 10px;
}
.teamSwiper{
	width: 100%;
	overflow: hidden;
	height: 0;
	padding-bottom: 19%;	
}
.teamSwiper  a img{
	width: 100%;
	/* height: 5rem; */
	
}
</style>
