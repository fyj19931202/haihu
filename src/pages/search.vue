<template>
	<div class="search">
	<div class="search_1">
		<div class="search_1_1">
		  <input type="text" />	
		</div>
		<div class="search_1_2">
			<span>取消</span>
		</div>
		
	</div>
	<!--遍历-->
	<div class="search_2">
		
	<div class="search_2_1">
		<span class="span2">热搜</span>
		<span v-for="searchs in search.keywords_list" class="span1">{{searchs}}</span>
	</div>	
		
	</div>
	
	<!--横条-->
	<div class="ht"></div>	
		
		
	</div>
	
</template>

<script type="text/javascript">
	
	import bus from '../bus.js'
	
	export default {
		name:'search',
		data(){
			return {
				search:[]
				
			}
			
		},
		methods:{
          getSearch(){
				
				this.$http.get('https://api.haihu.com/h5?requestData=%257B%2522operation%2522%253A%257B%2522method%2522%253A%2522ht.ginza.getSearchKeywords%2522%257D%252C%2522common%2522%253A%257B%2522ua%2522%253A%2522133mozilla%252F5.0%2520(iphone%253B%2520cpu%2520iphone%2520os%25209_1%2520like%2520mac%2520os%2520x)%2520applewebkit%252F601.1.46%2520(khtml%252C%2520like%2520gecko)%2520version%252F9.0%2520mobile%252F13b143%2520safari%252F601.1%2522%252C%2522product_id%2522%253A%2522h5%2522%252C%2522h5_union_id%2522%253A%252202OWr65Wbaja%2522%252C%2522product_version%2522%253A%25223.7%2522%252C%2522time%2522%253A1507226470940%252C%2522cookie%2522%253A%2522khIDF5jppMRz8ihNjCCZPQ%253D%253D%2522%252C%2522partner_type%2522%253A%2522%2522%257D%257D&sign=eab115857225ec055879ef9b77c829b1')
				.then((res)=>{
					console.log(res)
				this.search = res.body.operation
				})
				
				
			}
			
		},
		
		created(){
		this.getSearch()	 
      bus.$emit('tell-show',false)
		}
		
	}
	
	
</script>
<style scoped>
.search_1{
	width: 100%;
	height: 2.5rem;
	/*background-color: rosybrown;*/
	display: flex;
	background-color: white;
	border-bottom: solid 0.01rem whitesmoke;
}
.search_1_1{
	width: 85%;
	/*background-color: darkcyan;*/
}
.search_1_2{
	width: 15%;
	/*background-color: tomato;*/
	text-align: center;
	line-height: 2.5rem;
}
.search_1_2 span{
	font-size: 0.65rem;
}
.search_1_1>input{
	width: 96%;
	height: 1.8rem;
	position: relative;
	top: 0.35rem;
	left: 2%;
	border: hidden;
	border-radius: 0.3rem;
	background-color: whitesmoke;
}
.search_2{
	width: 100%;
	height: 2.5rem;
	/*background-color: tomato;*/
	overflow: hidden;
	overflow-x: scroll;
}
.search_2::-webkit-scrollbar {display:none}
.search_2_1{
	width: 200%;
	line-height: 2.5rem;
}
.search_2_1 span{
	/*display: inline-block;*/
	font-size: 0.7rem;
}
.span1{
	background-color: whitesmoke;
	margin-left: 0.55rem;
	padding: 0.2rem;
	border-radius: 0.3rem;
}
.span2{
	margin-left: 0.5rem;
}
.ht{
	width: 100%;
	height: 0.3rem;
	background-color: whitesmoke;
}
</style>