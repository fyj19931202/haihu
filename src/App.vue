<template>
   <div id="app">
 
 
    <transition>
    <router-view></router-view>
    </transition>
    
    <transition>
    	<nav class="tab-bar" v-if="isShow">
    		<ul>
    			<router-link tag='li' to="/home" >
    		    
    				<i class="icon iconfont icon-diqiu i1 i2"></i>
    				<p class="sp1 sp2">首页</p>
    			
    				
    			</router-link>
    			<router-link tag='li' to="/sort">
    				 
    			<i class="icon iconfont icon-fenlei i1"></i>
    			<p class="sp1">分类</p>
    				
    			</router-link>
    			<router-link tag='li' to="/car">
    				
    				<i class="icon iconfont icon-gouwuche i1"></i>
    				<p class="sp1">购物车</p>
    					
    			</router-link>
    			<router-link tag='li' to="/me">
    				
    				<i class="icon iconfont icon-home i1"></i>
    				<p class="sp1">我的</p>
    					
    			</router-link>
    		</ul>
    	</nav>
    	
    	
    </transition>
    
  </div>
</template>

<script>
	
import bus from './bus.js'
export default {
  name: 'app',
  data(){
  	return{
  		isShow:true
  	}
  	
  },
  created(){
  	
  	 bus.$on('tell-show',(value)=>{
  		this.isShow = value

  	})
  }
}
</script>

<style>
body{
  width: 100%;
  overflow-x: hidden;
}
.li1{
	width: 25%;
	height: 2.5rem;
}
#app {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 100%;
  font-size: 0.6rem;
}
.root-page{
  position: absolute;
  top: 0;
  right: 0;
  /* bottom: 2.25rem; */
  left: 0;
  min-height: calc( 100%  - 4.5rem);
  padding-bottom: 2.25rem;
  padding-top: 2.25rem;
}
/* 动画效果 */
/* 父页面 进子页面 */
.left-enter-active{
  transition: all 0.4s linear;
}
.left-enter{
  transform: translateX(100%)
}
.left-leave-active{
  transition: all 0.4s linear;
  transform: translateX(-100%)
}
.left-leave{
  transform: translateX(0)
}
/* 子页面 退到父页面 */
.right-enter-active{
  transition: all 0.4s linear;
}
.right-enter{
  transform: translateX(-100%)
}
.right-leave-active{
  transition: all 0.4s linear;
  transform: translateX(100%)
}
.right-leave{
  transform: translateX(0)
}
/* 平行页面 */
/* skip */


/* 导航 */
.icon-changyonglogo40{
	
}

.i1{
	position: relative;
	top: -0.2rem;
	font-size: 1rem;
	
}

p{
	position: relative;
	top: -1.4rem;
}

.tab-bar{
  position: fixed;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  border-top: 0.05rem solid #ccc;
  background-color: white;  
}
.tab-bar li{
  float: left;
  width: 25%;
  cursor: pointer;
  color: #333;
  text-align: center;
  height: 2.5rem;
  line-height: 2.2rem;
  box-sizing: border-box;
  /*border-left: 0.05rem solid #ccc;*/
  font-size: 0.6rem;
  /*z-index: 1000;*/
}
.tab-bar li:first-child{
  border-left: none;
}

.tab-bar .router-link-active{
  color: brown;
  
}

.colorSize{
	color: #00B7FF;
	
}
/* 导入动画 */
.down-enter-active{
 transition: all 0.4s linear;
 /* bottom: 0; */
 transform: translateY(0)
}
.down-enter{
  /* 45px */
  transform: translateY(2.25rem)
}
.down-leave-active{
  transition: all 0.4s linear;
  transform: translateY(2.25rem)
}
.down-leave{
  transform: translateY(0)
}
</style>
