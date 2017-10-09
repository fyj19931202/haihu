var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
//处理文件上传和下载的post请求(特别是使用formdata数据当做参数传递到服务器时候，引入multer框架)
//用formData获取表单数据的时候,引用的模块,data是二进制数据,如图片,视频,音频等
var multer = require('multer')
var form = multer();
app.use(express.static('src'));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/data',function(req,res){
	
	res.set('Access-Control-Allow-Origin','*')
	 
	http.get('http://api.haihu.com/h5?requestData=%257B%2522operation%2522%253A%257B%2522method%2522%253A%2522ht.path.startup4%2522%252C%2522category_id%2522%253A%2522-1%2522%257D%252C%2522common%2522%253A%257B%2522ua%2522%253A%2522133mozilla%252F5.0%2520(iphone%253B%2520cpu%2520iphone%2520os%25209_1%2520like%2520mac%2520os%2520x)%2520applewebkit%252F601.1.46%2520(khtml%252C%2520like%2520gecko)%2520version%252F9.0%2520mobile%252F13b143%2520safari%252F601.1%2522%252C%2522product_id%2522%253A%2522h5%2522%252C%2522h5_union_id%2522%253A%252202OWr65Wbaja%2522%252C%2522product_version%2522%253A%25223.7%2522%252C%2522time%2522%253A1507022814373%252C%2522cookie%2522%253A%2522khIDF5jppMRz8ihNjCCZPQ%253D%253D%2522%252C%2522partner_type%2522%253A%2522%2522%257D%257D&sign=e1852ebd117843337842bd7253c1e706',function(req2,res2){
		        
		      var getData= '';
		      req2.on('data',function(data){
//		      	console.log(data)
		      	getData +=data;
		      	
		      })
		      req2.on('end',function(){
		      	console.log('数据传输结束')
//		      	console.log(getData)
		      	var obj = JSON.parse(getData)
		      	res.send(obj)
		      })
	})
	
	
})

//分类
app.get('/sort',function(req,res){
	
	res.set('Access-Control-Allow-Origin','*')
	 
	http.get('http://api.haihu.com/h5?requestData=%257B%2522operation%2522%253A%257B%2522method%2522%253A%2522ht.seattle.categoryPage2%2522%257D%252C%2522common%2522%253A%257B%2522ua%2522%253A%2522133mozilla%252F5.0%2520(iphone%253B%2520cpu%2520iphone%2520os%25209_1%2520like%2520mac%2520os%2520x)%2520applewebkit%252F601.1.46%2520(khtml%252C%2520like%2520gecko)%2520version%252F9.0%2520mobile%252F13b143%2520safari%252F601.1%2522%252C%2522product_id%2522%253A%2522h5%2522%252C%2522h5_union_id%2522%253A%252202OWr65Wbaja%2522%252C%2522product_version%2522%253A%25223.7%2522%252C%2522time%2522%253A1507145956824%252C%2522cookie%2522%253A%2522khIDF5jppMRz8ihNjCCZPQ%253D%253D%2522%252C%2522partner_type%2522%253A%2522%2522%257D%257D&sign=09554f8f594176c870cb75fd11d7696c',function(req2,res2){
		        
		      var getData= '';
		      req2.on('data',function(data){
//		      	console.log(data)
		      	getData +=data;
		      	
		      })
		      req2.on('end',function(){
		      	console.log('数据传输结束')
//		      	console.log(getData)
		      	var obj = JSON.parse(getData)
		      	res.send(obj)
		      })
	})
	
	
})

//品牌
app.get('/brand',function(req,res){
	
	res.set('Access-Control-Allow-Origin','*')
	 
	http.get('http://api.haihu.com/h5?requestData=%257B%2522operation%2522%253A%257B%2522method%2522%253A%2522ht.seattle.hotBrandPage2%2522%257D%252C%2522common%2522%253A%257B%2522ua%2522%253A%2522133mozilla%252F5.0%2520(iphone%253B%2520cpu%2520iphone%2520os%25209_1%2520like%2520mac%2520os%2520x)%2520applewebkit%252F601.1.46%2520(khtml%252C%2520like%2520gecko)%2520version%252F9.0%2520mobile%252F13b143%2520safari%252F601.1%2522%252C%2522product_id%2522%253A%2522h5%2522%252C%2522h5_union_id%2522%253A%252202OWr65Wbaja%2522%252C%2522product_version%2522%253A%25223.7%2522%252C%2522time%2522%253A1507216248211%252C%2522partner_type%2522%253A%2522%2522%257D%257D&sign=caca245a1da2931c13dae07466fdba68',function(req2,res2){
		        
		      var getData= '';
		      req2.on('data',function(data){
//		      	console.log(data)
		      	getData +=data;
		      	
		      })
		      req2.on('end',function(){
		      	console.log('数据传输结束')
//		      	console.log(getData)
		      	var obj = JSON.parse(getData)
		      	res.send(obj)
		      })
	})
	
	
})

app.listen(3000,function(){
	
	console.log('服务器开启')
})
