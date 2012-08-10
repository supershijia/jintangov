$(document).ready(function(){
 setHotkeys("return","shows11");
 setHotkeys("down","select_c");
 setHotkeys("up","select_u");


})



function tip_show(obj){
	
  $(".select_box .checkbox").each(function(){
		 var m=$(this).is(":checked");
		 var n=$(".select_box th .checkbox").is(":checked");
		 
		 if(m==true)
		 {
			 $(this).parent().parent().addClass("tr_bg").siblings(".tr_bg").removeClass("tr_bg");
			 $(obj).show().find(".text").val("");
			 $(obj).each(function(){
				$(this).find(".text").first().focus();
			 })
			 $(".mask").show();
		 }
		 if(n==true)
		 {
			 $(obj).hide();
			 $(".mask").hide();
		 }
   })

}

function shows11(){
	tip_show('.tip_box');
}


/*k=0;
function select_c(){
	k++;	
	var obj1=$(".checkbox:checked").parents(".table_cont");
	var obj=$(obj1).find(".checkbox");
	var _length=$(obj).length;
	//alert(_length);
	if(k<_length)
	{
		$(obj).attr("checked",false);
		$(obj).eq(k).attr("checked",true).parent().parent().addClass("tr_bg").siblings().removeClass("tr_bg");
		
	}
	else
	{
		$(obj).last().attr("checked",false).removeClass("tr_bg");
		$(obj).first().attr("checked",true);
		k=0;
		
	}

}
function select_u(){
	k--;
	var obj1=$(".checkbox:checked").parents(".c_table");
	var obj=$(obj1).find(".checkbox");
	var _length=$(obj).length;
	//alert(_length);
	if(k==0)
	{
		$(obj).first().attr("checked",false);
		$(obj).last().attr("checked",true).parent().parent().addClass("tr_bg");
		k=_length;
	}	
	else
	{
		$(obj).eq(k).attr("checked",true).parent().parent().addClass("tr_bg").siblings(".tr_bg").removeClass("tr_bg");
	}
	

}*/

	


 


 



