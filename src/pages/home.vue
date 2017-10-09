<template>
	<div class="home">
		<!--头部-->
		<div class="fix">
		<header class="header">
		<div class="header_1"><img src="../assets/logo1.png"/></div>
		<div class="header_2">
			<router-link tag='a' to="/search" >
			<div>
				<i class="iconfont icon-sousuo"></i>
				<span class="sp">输入商品关键字查找</span>
			</div>
			</router-link>		
		</div>	
		</header>
		<nav class="nav">
			<ul>
				<li v-for="(datas,k) in data.category_list"><a href="javascript:;" class="aa" @click='add(k)' ref="a1">{{datas.category_name}}</a></li>
			</ul>
			
		</nav>
		</div>
		<div class="fix1"></div>
		<!--轮播图-->
		<div class="lunbo">  
            <swiper :options="swiperOption"  ref="mySwiper" class='lunbo_1'>  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="imgs in img.action_image_list" class='lunbo_2'> 
            
              <img :src="imgs.image_url" alt=""/>
          
            </swiper-slide>  
            <div id="qinchu"></div>
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div> 
            <div class="swiper-pagination1" slot="pagination"></div>  
        </swiper>  
    </div>  
	<!--每日签到-->
	<div class="qiandao">
	<ul>
	<li v-for="i in img1.action_image_list" class="qiandao_1">
		<img :src="i.image_url" alt="" /><br />
		<span>{{i.title}}</span>
	</li>
	<div id="qinchu1"></div>
	</ul>
		
	</div>
	<!--两张图片-->
	<div v-for="im in img2.action_image_list" class="two_picture">
		<a href="javascript:;"><img :src="im.image_url" alt="" /></a>
	</div>
	<div v-for="im1 in img3.action_image_list" class="two_picture two_picture_1">
		<a href="javascript:;"><img :src="im1.image_url" alt="" /></a>
	</div>
	<!--通知-->
	<div class="inform" v-for="im2 in img4.action_image_list">
	<a href="javascript:;"><img :src="im2.image_url" alt="" /></a>
	</div>
	<!--通知下图片-->
	<div class="inform_img" v-for="im3 in img5.action_image_list">
		<a href="javascript:;"><img :src="im3.image_url" alt="" /></a>
		
	</div>
	<div class="huitiao"></div>
	
	<div class="inform_img1">
		<a href="javascript:;"><img src="../assets/tu.png" alt="" /></a>
		
	</div>
	
	<div class="inform_img1" v-for="im4 in img6.action_image_list">
		<a href="javascript:;"><img :src="im4.image_url" alt="" /></a>
		
	</div>
	<!--遍历-->
	<div class="shop">
		<ul>
			<li v-for="shops in shop">
			<div class="shop_1">
				<span>{{shops.global_discount.count_desc}}</span>
			</div>
			<div class="shop_2">
				<h2>{{shops.global_discount.title}}</h2>
			</div>
			<div class="shop_3">
				<span>{{shops.global_discount.end_time | getTime}}</span>
			</div>
			<div class="shop_4">
				<ul>
					<li v-for="shopss in shops.global_discount.goods_list">
						<div class="shop_4_1">
							<img :src="shopss.selected_sku.image_url" alt="" />
							<span v-if='shopss.voucher_list[0]'>{{shopss.voucher_list[0].desc}}</span>
						</div>
						<div class="shop_4_2">
							<span>{{shopss.title}}</span>
						</div>
						<div class="shop_4_3">
							<span>￥{{shopss.selected_sku.current_price_rmb}}</span>  <del>{{shopss.selected_sku.fixed_price}}</del>
						</div>
						<div class="shop_4_4">
							<img :src="shopss.country_icon" alt="" />
							<span>{{shopss.mall_name}}直邮</span>
						</div>	
					</li>
					<div class="shop_4_5">
						<span>查看更多</span><br />
						<span>MORE</span>
					</div>
				</ul>
				
			</div>	
				
			</li>
		</ul>
		
	</div>
	
	
<div id="bot"></div>
	</div>
	
</template>

<script type="text/javascript">
	import bus from '../bus.js'
	import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
	 import PullTo from 'vue-pull-to'
	export default {
		name:'home',
		data(){
			return {
				data:[],
				img:[],
				img1:[],
				img2:[],
				img3:[],
				img4:[],
				img5:[],
				img6:[],
				shop:[],
				page:1,
				pageSize:6,
		swiperOption: {
         autoplay: 3000,
         setWrapperSize :true,
         pagination : '.swiper-pagination',
         paginationClickable :true,
         mousewheelControl : true,
         observeParents:true,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup:1,
          paginationClickable: true,
          spaceBetween: 0
       }
				
			}
			
		},
		methods:{
        getHome(){
				
				this.$http.get('http://localhost:3000/data')
				.then((res)=>{
					
//					console.log(res.body)
					this.data = res.body.operation
					this.img = res.body.operation.theme_list[0]
					this.img1 = res.body.operation.theme_list[1]
					this.img2 = res.body.operation.theme_list[2].special.theme
					this.img3 = res.body.operation.theme_list[3].special.theme
					this.img4 = res.body.operation.theme_list[4]
					this.img5 = res.body.operation.theme_list[5]
					this.img6 = res.body.operation.theme_list[6]
				})
				
				
			},
			
			getShopping(){
//				console.log(this.page)
				this.$http.get('http://localhost:3000/data')
				.then((res)=>{
					console.log(res.body.operation.theme_list.slice(7,this.page*this.pageSize+7))
					this.shop = res.body.operation.theme_list.slice(7,this.page*this.pageSize+7)
				})
				
				
			},
			add(i){
				
				$('.aa').eq(i).css('color','red').parent('li').siblings().children('a').css('color','black')
			}
			
		},
		computed:{
			
			
		},
		filters:{
			
			getTime:function(time){
				var time1 = Date.parse(new Date())
				var time2 = time-time1
				
				//多少秒
				var time2 = time2/1000
				//天数
				var day = Math.floor(time2/3600/24)
				//小时
				var hour = Math.floor((time2-day*24*3600)/3600) 
				hour = hour < 10 ? '0'+ hour :  hour
				//分
				var second = Math.floor((time2-day*24*3600-hour*3600)/60)
				second = second < 10 ? '0'+second : second
				//秒
				var minute = Math.floor((time2-day*24*3600-hour*3600-second*60))
				minute = minute < 10 ? '0'+minute : minute
				return '仅剩'+day+'天'+hour+':'+second+':'+minute+'结束'
				
				
			}
			
		},
		created(){
			this.getHome()
            this.getShopping()
       var self = this
      $(window).scroll(function () {
        let scrollTop = $(this).scrollTop()
        let scrollHeight = $(document).height()
        let windowHeight = $(this).height()
        if (scrollTop + windowHeight == scrollHeight) {
         		
         		self.getShopping()
         		self.page++
         	}
         })
      
     bus.$emit('tell-show',true)
     $('.aa')[0].style.color = 'red'
    
     
		}
		
	}
	
	
	
	
</script>
<style scoped>
	.fix{
		position: fixed;
		z-index: 1000;
		background-color: white;
	}
	.fix1{
		width: 100%;
		height:4.2rem ;
	}
.home{
	width: 100%;
	height: 100%;
}
.header{
	width: 100%;
	height: 2.4rem;
	/*background-color: red;*/
	display: flex;
	border-bottom: solid 1px whitesmoke;
	
}
.header_1{
	width: 17%;
	/*background-color: fuchsia;*/
}
.header_2{
	width: 83%;
	/*background-color: darkgoldenrod;*/
}
.header_2>a>div{
	width: 98%;
	height: 1.5rem;
	position: relative;
	top: 0.45rem;
	line-height: 1.5rem;
	background-color: whitesmoke;
	border-radius: 0.3rem;
	padding-left: 0.5rem;
	box-sizing: border-box;
	color: black;
}
.icon-sousuo{
	color: red;
	font-size: 0.75rem;
}
.sp{
	font-size: 0.75rem;
}
.nav{
	width: 100%;
	height: 1.8rem;
	/*background-color: gold;*/
	overflow: hidden;
	overflow-x: scroll;
}
.nav::-webkit-scrollbar {display:none}
.nav>ul{
	display: flex;
	width: 250%;
	justify-content:  space-around;
	
}

.nav>ul>li>a{
	color: black;
	display: inline-block;
	font-size: 0.8rem;
	line-height: 1.9rem;
	/*padding-left: 0.8rem;*/
	box-sizing: border-box;
}
.lunbo{
	width: 100%;
}
.lunbo_1{
	width: 400%;
	height: 8rem;
	/*background-color:hotpink;*/
	
}
.lunbo_2{
	float: left;
	width: 25%;
	
}
.lunbo_2>img{
width: 25%;

}
#qinchu{
	clear: both;
}

.qiandao{
	width: 100%;
	height: 3.8rem;
	/*background-color: gold;*/
	
}

.qiandao_1{
	float: left;
	width: 20%;
	height:3.8rem ;
	text-align: center;
	padding-top: 0.5rem;
	box-sizing: border-box;
	line-height: 1.6rem;
}
.qiandao_1>img{
	width: 1.5rem;
	height: 1.5rem;
}
.qiandao_1>span{
	font-size: 0.6rem;
}
#qinchu1{
	clear: both;
}
.two_picture{
	width: 100%;
	height: 4rem;
	
}
.two_picture a img{
	width: 100%;
	height: 4rem;
}

.inform{
	width: 100%;
	height: 2rem;	
}
.inform a img{
	width: 100%;
	height: 2rem;
}
.inform_img{
	width: 100%;
	height: 5rem;
	
}
.inform_img a img{
	width: 100%;
	height: 5rem;
}
#bot{
	width: 100%;
	height: 2.5rem;
	position: relative;
	bottom: 0;
}
.huitiao{
	width: 100%;
	height: 0.3rem;
	background-color: whitesmoke;
}
.inform_img1{
	width: 100%;
}
.inform_img1 a img{
	width: 100%;
	height: 2.5rem;
}
.shop{
	width: 100%;
	height: 15rem;
	/*background-color: palevioletred;*/
	
}
.shop ul li{
    width: 100%;
	height: 15rem;	
	border-bottom: solid 1px gainsboro;
	position: relative;
}
.shop_1{
	width: 100%;
	height: 2rem;
	/*background: cadetblue;*/
}
.shop_2{
	width: 100%;
	height: 2rem;
	/*background-color: violet;*/
	text-align: center;
}
.shop_3{
	width: 100%;
	height: 2rem;
	/*background-color: orangered;*/
}
.shop_4{
	width: 100%;
	height: 9rem;
	/*background-color:coral;*/
	overflow: hidden;
	overflow-x: scroll;
}
.shop_4::-webkit-scrollbar {display:none}
.shop_1>span{
	position: absolute;
	right: 0.5rem;
	font-size: 0.6rem;
	line-height: 2rem;
	color: gainsboro;
}
.shop_2>h2{
	width: 90%;
	position: relative;
	left: 5%;
	line-height: 2rem;
	font-size: 0.9rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.shop_3{
	text-align:center;
}
.shop_4>ul{
	width: 227%;
	display: flex;
}
.shop_4>ul>li{
	width: calc(100% / 7);
	position: relative;
}
.shop_4_1{

	height: 4rem;
	position: relative;
} 

.shop_4_1 img{
	width:4rem;
	height: 5rem;
	margin-left: 1rem;
	box-sizing: border-box;
}
.shop_4_1 span{
    display: inline-block;
   /*padding: 0.05rem;*/
	height: 0.85rem;
	border: solid 2px red;
	color: red;
	background: white;
	position: relative;
	top: -0.8rem;
	left: 0.5rem;
	font-size: 0.6rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	
}
.shop_4_2 span{
	 display: inline-block;
	 width: 90%;
	 
	 overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	position: relative;
	top: 1.4rem;
	left: 0.5rem;
	font-size: 0.7rem;
}

.shop_4_3 span,del{
	position: relative;
	top: 1.4rem;
	position: relative;
	left: 0.5rem;
}
.shop_4_3 del{
color: gainsboro;
}

.shop_4_4>img{
width: 0.5rem;
position: relative;
top:1.5rem;
left:0.5rem
}
.shop_4_4>span{
position: relative;
top:1.65rem;
left:0.5rem;
display: inline-block;
 width: 80%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
color: gainsboro;
}
.shop_4_5{
	width: 4rem;
	height: 4rem;
	border: solid 0.1rem gainsboro;
	position: relative;
	right: -0.7rem;
	top: 0rem;
	text-align: center;
	font-size: 0.6rem;
}
.shop_4_5 span{
	position: relative;
	top: 1.2rem;
}
.shop_4_5>span:nth-of-type(2){
	
	font-size: 0.8rem;
}
</style>