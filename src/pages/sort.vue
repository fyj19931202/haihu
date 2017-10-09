<template>
	<div class="sort">
	<div class="header">
	
	<div class="sou">
		<i class="iconfont icon-sousuo"></i>
		<span class="sp">输入商品关键字查找</span>
		
	</div>
	
	</div>	
	<div class="header_1">
	<div class="div2">
		<div class="div1" :class="classObject" @click='add1'>
		分类
		</div>
	</div>
	<div class="div2">
		<div class="div3" @click="add">
			品牌
		</div>
	</div>
	
	</div>	
	<div class="tiao"></div>	
	
	<!--遍历-->
	<div class="sort_1" v-for="sorts in sort.category_list">
	<!--图片-->	
	<div class="sort_2">
	<img :src="sorts.category_img" alt="" />
	</div>
	<!--品种-->
	<div class="sort_3">
		<div>
		<span v-for="sortss in sorts.category_keywords" class="span" :class='sortss.is_hot'>{{sortss.tag_name}}</span>
		</div>
	</div>
	
	
	</div>
	
	<!--品牌-->
	<div class="brand">
		
	<div class="brand_1" v-for="brands in brand.hot_brand_list">
		
	 <div class="brand_2">{{brands.desc}}</div>
	 <div class="brand_3">
	 	
	  <div class="brand_4" v-for="brandss in brands.brand_list">
	  	<img :src="brandss.avatar" alt="" />
	  </div>
	  
	 </div>	
		
		
	</div>	
		
		
	</div>
	
	
	
	
	<div class="guding"></div>
	</div>
	
</template>

<script type="text/javascript">
	import bus from '../bus.js'
	export default {
		name:'sort',
		data(){
			return {
				sort:[],
				brand:[],
				classObject:{
					'active':true
				}
				
				
			}
			
		},
		methods:{
       getSort(){
				
				this.$http.get('http://localhost:3000/sort')
				.then((res)=>{
//					console.log(res)
				this.sort = res.body.operation
				})
				
				
			},
			getBrand(){
				this.$http.get('http://localhost:3000/brand')
				.then((res)=>{
					console.log(res)
					this.brand = res.body.operation
				})
				
			},
			add(){
				
				$('.div1').removeClass('active')
				$('.div3').addClass('active')
				$('.sort_1').css('display','none')
				$('.brand').css('display','block')
			},
			add1(){
				
				$('.div1').addClass('active')
				$('.div3').removeClass('active')
				$('.sort_1').css('display','block')
				$('.brand').css('display','none')
				
			}
			
		},
		
		created(){
				this.getSort()
				this.getBrand()
          bus.$emit('tell-show',true)
		}
		
	}
	
	
</script>
<style scoped>
.sort{
	width: 100%;
	height: 100%;
}
.header{
	width: 100%;
	height: 2.5rem;
	/*background-color: firebrick;*/
	border-bottom: solid 1px whitesmoke;
}
.header_1{
	width: 100%;
	height: 2.5rem;
	/*background-color: rosybrown;*/
	display: flex;
}
.tiao{
	width: 100%;
	height: 0.4rem;
	background-color: whitesmoke;
}
.sou{
	width: 90%;
	height: 1.6rem;
	position: relative;
	left: 5%;
	top: 0.45rem;
	background-color: whitesmoke;
	border-radius: 0.3rem;
}
.sou i,span{
	font-size: 0.8rem;
	line-height: 1.6rem;
	position: relative;
	left: 0.4rem;
}
.sou i{
	color: red;
}
.header_1 div{
	width: 50%;
	
	text-align: center;
	line-height: 2.5rem;
}
.header_1 div div{
	width: 50%;
	height: 2.5rem;
	/*background-color: firebrick;*/
	position: relative;
	left: 25%;
	text-align: center;
	font-size: 0.9rem;
}

.active{
	color: red;
	border-bottom: solid 1px red;
}
.sort_1{
	width: 100%;
}
.sort_2{
	width: 100%;
	height: 8rem;
	background-color: fuchsia;
}
.sort_2 img{
	width: 100%;
	height: 8rem;
}
.guding{
	width: 100%;
	height: 2.5rem;
	position: relative;
	bottom: 0;
}
.span{
	display: inline-block;
	margin-left: 0.5rem;
	padding-left: 0.7rem;
	font-size: 0.8rem;
}
.sort_3 div{
	position: relative;
	left: -1rem;
	
}
.YES{
	color: red;
}
.brand{
	width: 100%;
	height: calc(100% - 5.4rem);
	/*background: gold;*/
	position: absolute;
	display: none;
}
.brand_2{
	width: 100%;
	height: 2.5rem;
	/*background-color: firebrick;*/
	text-align: center;
	font-size: 0.8rem;
	border-bottom: solid 0.05rem whitesmoke;
	line-height: 2.8rem;
}
.brand_3{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	
}
.brand_4{
	width: calc(25% - 0.04rem);
	height: 3.5rem;
	border: solid 0.01rem whitesmoke;
	text-align: center;
	
}

.brand_4 img{
	width: 3.5rem;
	height: 2rem;
	position: relative;
	top: 0.8rem;
	
}
</style>