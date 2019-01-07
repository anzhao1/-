
$(function(){

	/*反选*/
	$("#qx").click(function(){ 
	$("tbody input[name='checkbox']").each(function(){ 
	if($(this).attr("checked")) 
		{ 
			$(this).removeAttr("checked"); 
		} 
	else
		{ 
			$(this).attr("checked","true"); 
		} 
		}) 
	}) 
 

})
	
