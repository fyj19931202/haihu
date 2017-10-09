<template>
	<div class="car">
		<div class="car_1">
		<img src="../assets/car.png" alt="" /><br />
		<button>
		<router-link tag='a' to="/home" >
			去首页逛逛
	    </router-link>	
			
		</button>
		</div>
		
		
	</div>
	
</template>

<script type="text/javascript">
	import bus from '../bus.js'
	export default {
		name:'car',
		data(){
			return {
				
				
			}
			
		},
		methods:{

			
		},
		
		created(){
			 bus.$emit('tell-show',true)
     
		}
		
	}
	
	
</script>
<style scoped>
.car{
	width: 100%;
	height: 100%;
	background-color: whitesmoke;
	text-align: center;
	
}
.car_1{
	position: relative;
	top: 10rem;
}
.car_1 img{
	width: 5rem;
	height: 6rem;
}
.car_1 button{
	width: 5rem;
	height: 1.5rem;
	font-size: 0.65rem;
	
}
.car_1 button a{
	color: gray;
}
</style>