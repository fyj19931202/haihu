<template>
	<div class="me">
		<!--头部-->
	<div class="me_1">
		<img src="https://m.haihu.com/icon/mine/mytopbg@3x.png" alt="" />
		<div class="me_2">
			<div><img :src="me.userPicPath" alt="" /></div>
			<span>{{me.userId}}</span>
		</div>
	</div>	
	   <!--分类-->
	   <!--全部订单-->
	<div class="me_3">
		
	<div class="me_3_1">
		<i class="iconfont icon-quanbudingdan-01" ></i>
	</div>
	<div class="me_3_2">
		<span>全部订单</span>
	 <div class="me_3_3">
		<i class="iconfont icon-dayu" ></i>
	</div>
		
	</div>
	
	</div>
	<!--红包-->
	<div class="me_3">
		
	<div class="me_3_1">
		<i class="iconfont icon-hongbao" ></i>
	</div>
	<div class="me_3_2 qu">
		<span>红包</span>
	 <div class="me_3_3">
		<i class="iconfont icon-dayu" ></i>
	</div>
		
	</div>
	
	</div>
	<!--小横条-->
	<div class="heng"></div>
	<!--地址管理-->
	<div class="me_3">
		
	<div class="me_3_1">
		<i class="iconfont icon-dizhiguanlixiugaidizhi" ></i>
	</div>
	<div class="me_3_2">
		<span>地址管理</span>
	 <div class="me_3_3">
		<i class="iconfont icon-dayu" ></i>
	</div>
		
	</div>
	
	</div>
	<!--联系客服-->
	<div class="me_3">
		
	<div class="me_3_1">
		<i class="iconfont icon-lianxikefuzhengchangzhuangtai" ></i>
	</div>
	<div class="me_3_2">
		<span>联系客服</span>
	 <div class="me_3_3">
		<i class="iconfont icon-dayu" ></i>
	</div>
		
	</div>
	
	</div>
	<!--海狐达人-->
	<div class="me_3">
		
	<div class="me_3_1">
		<i class="iconfont icon-zhuanshi" ></i>
	</div>
	<div class="me_3_2">
		<span>海狐达人</span>
	 <div class="me_3_3">
		<i class="iconfont icon-dayu" ></i>
	</div>
		
	</div>
	
	</div>
	<!--帮助中心-->
	<div class="me_3">
		
	<div class="me_3_1">
		<i class="iconfont icon-bangzhuzhongxin" ></i>
	</div>
	<div class="me_3_2">
		<span>帮助中心</span>
	 <div class="me_3_3">
		<i class="iconfont icon-dayu" ></i>
	</div>
		
	</div>
	
	</div>
	<!--关于-->
	<div class="me_3">
		
	<div class="me_3_1">
		<i class="iconfont icon-guanyu" ></i>
	</div>
	<div class="me_3_2 qu">
		<span>关于</span>
	 <div class="me_3_3">
		<i class="iconfont icon-dayu" ></i>
	</div>
		
	</div>
	
	</div>
	
	</div>
	
</template>

<script type="text/javascript">
	import bus from '../bus.js'
	export default {
		name:'me',
		data(){
			return {
				me:[]
				
			}
			
		},
		methods:{
            getMe(){
				
				this.$http.get('https://api.haihu.com/h5?requestData=%257B%2522operation%2522%253A%257B%2522method%2522%253A%2522ht.ginza.getUserInfo%2522%257D%252C%2522common%2522%253A%257B%2522ua%2522%253A%2522133mozilla%252F5.0%2520(iphone%253B%2520cpu%2520iphone%2520os%25209_1%2520like%2520mac%2520os%2520x)%2520applewebkit%252F601.1.46%2520(khtml%252C%2520like%2520gecko)%2520version%252F9.0%2520mobile%252F13b143%2520safari%252F601.1%2522%252C%2522product_id%2522%253A%2522h5%2522%252C%2522h5_union_id%2522%253A%252202OWr65Wbaja%2522%252C%2522product_version%2522%253A%25223.7%2522%252C%2522time%2522%253A1507222431701%252C%2522cookie%2522%253A%2522khIDF5jppMRz8ihNjCCZPQ%253D%253D%2522%252C%2522partner_type%2522%253A%2522%2522%257D%257D&sign=0d1e22a3ee37cb91367c5285673b66f5')
				.then((res)=>{
					console.log(res)
				this.me = res.body.operation
				})
				
				
			}
			
		},
		
		created(){
		this.getMe()
      bus.$emit('tell-show',true)
		}
		
	}
	
	
</script>
<style scoped>
.me{
	width: 100%;
	height: 100%;
	background-color: whitesmoke;
}
.me_1{
	width: 100%;
	height: 7rem;
	position: relative;
	
}
.me_1>img{
	width: 100%;
	height: 100%;
}
.me_2{
	position: absolute;
	top: 1.3rem;
	left: 42%;
	
}
.me_2 div{
	width: 3rem;
	height: 3rem;
}
.me_2 div img{
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
}
.me_2 span{
	font-size: 0.7rem;
	color: white;
	position: relative;
	top: 0.3rem;
}
.me_3{
	width: 100%;
	height: 2rem;
	background-color: white;
	display: flex;
}
.me_3_1{
	width: 10%;
	/*background-color: firebrick;*/
	text-align: center;
}
.me_3_1 i{
font-size: 0.9rem;
line-height: 2rem;
}
.me_3_2{
	width: 90%;
	/*background-color: darkcyan;*/
	border-bottom: solid 0.005rem gainsboro;
	position: relative;
}
.me_3_2 span{
	font-size: 0.7rem;
	line-height: 2rem;
}
.me_3_3{
	width: 10%;
	/*background-color: lightcoral;*/
	position: absolute;
	right: 0;
	top: 0;
}
.me_3_3 i{
	font-size: 1.6rem;
}
.qu{
	border-bottom: hidden;
}
.heng{
	width: 100%;
	height: 0.5rem;
	
}
.icon-quanbudingdan-01{
	color: red;
}
.icon-hongbao{
	color: red;
}
.icon-dizhiguanlixiugaidizhi{
	color: forestgreen;
}
.icon-lianxikefuzhengchangzhuangtai{
	color: forestgreen;
}
.icon-bangzhuzhongxin{
	color: forestgreen;
}
.icon-guanyu{
	color: brown;
}
</style>