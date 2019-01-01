//鼠标进入离开搜索框
	$(function(){
		$("#myinp").mouseover(function(){
			$(this).removeAttr("value");
		})	
		$("#myinp").mouseout(function(){
			if($("#myinp").val()==""){
				//alert(1);
				$("#myinp").val("输入关键字");
			}
		})	
	})
	
	$(function(){
		$("#ds01").mouseover(function(){
			$(this).removeAttr("value");
		})	
		$("#ds01").mouseout(function(){
			
			if($("#ds01").val()==""){
				//alert(1);
				$("#ds01").val("请输入商品名称或订单号进行搜索");
			}
		})	
	})