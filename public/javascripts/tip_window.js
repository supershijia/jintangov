$(document).ready(function(){

//setHotkeys("down","focus_menu");
//setHotkeys("up","focus_menu2");
setHotkeys("left","focus_menu2");
setHotkeys("right","focus_menu");
//关闭按钮
 $(".info_window_close").click(function(){
		$(this).parent().parent().hide();
		$(".content").each(function(){
			$(this).find(".text").first().focus();
		})
		$(".tip_window30:visible").each(function(){
			$(this).find(".text").first().focus();
		})
		var n=$(".tip_window30:visible").length;
		if(n<1)
		{
			$(".mask").hide();
		}
		//$(".select_box .checkbox").attr("checked", false); 
		$(".select_box3 .checkbox").attr("checked", false)
			.parent().parent().removeClass("tr_bg");
		$(".select_box4 .checkbox").attr("checked", false)
			.parent().parent().removeClass("tr_bg");
		

	 })
//点击让所选div置顶
$(".tip_window30").click(function(){
	$(this).addClass("z-1000").siblings(".z-1000").removeClass("z-1000");
	
	 
})
//判断如果被选中表格里的字体上色
function click_checkbox(obj){
    var m=$(obj).is(":checked"); 
	if(m==true)
	{ 
		 $(obj).parents(".content").find("tr").removeClass("tr_bg");
		 $(obj).parent().parent().addClass("tr_bg");
	}
}

$(".select_box td .checkbox").each(function(){
	click_checkbox(this);
	$(this).click(function(){
		 click_checkbox(this);
	})
})
$(".select_box3 td .checkbox").each(function(){
	click_checkbox(this);
	$(this).click(function(){
		 click_checkbox(this);
	})
})
$(".select_box4 td .checkbox").each(function(){
	click_checkbox(this);
	$(this).click(function(){
		 click_checkbox(this);
	})
})

})


//设置快捷键start
function setHotkeys(key,fun){
	if(isNull(key)==false && isNull(fun)==false){
		$.hotkeys.add(key,function(){eval( fun + "()" ); });
	}
	
}
//设置快捷键end
//判断是否为空或未定义
function isNull(obj){
	if(obj==null || obj=="" || obj=="undefined"){
		return true;
	}else{
		return false;
	}
}

var j=0;
function focus_menu(){  //移动down/left键的效果
	j++;
    $(".tip_window30:visible").each(function(){
       var aa=$(this).css("z-index");
	   var bb=$(".tip_window30").filter(".z-1000").css("z-index");
	  
	   if(aa==bb)//筛选出z-index最大的
	   {
		   var _obj=$(".tip_window30").filter(".z-1000").find(".text");
		   var _length=$(_obj).length;
			if(j<_length)
			{
				$(_obj).eq(j).focus();
			}
			else
			{
				$(_obj).first().focus();
				j=0;
			} 
		   return false;  //不往下执行
	   }
	   else//帅选出当前现实的弹出层的最后一个，也就是z-index相同却在上面得哪一个
	   {
		   var _obj=$(".tip_window30:visible").last().find(".text");
		   var _length=$(_obj).length;
		   if(j<_length)
			{
			    $(_obj).blur();
				$(_obj).eq(j).focus();
			}
			else
			{
				$(_obj).first().focus();
				j=0;
			} 
			    return false;
	   }
	   
	
	
	})
}
function focus_menu2(){  //移动up/right键的效果

	$(".tip_window30:visible").each(function(){
       var aa=$(this).css("z-index");
	   var bb=$(".tip_window30").filter(".z-1000").css("z-index");
	   if(aa==bb)
	   {
		   var _obj=$(".tip_window30").filter(".z-1000").find(".text");
		   var _length2=$(_obj).length;
			if(j==0)
			{
				j=_length2;
				$(_obj).first().focus();
			}
			else
			{
				$(_obj).eq(j).focus();
			}
			j--;
			return false;
	   }
	   else
	   {
		   var _obj=$(".tip_window30:visible").last().find(".text");
		   var _length2=$(_obj).length;
		   if(j==0)
			{
				j=_length2;
				$(_obj).first().focus();
			}
			else
			{
				$(_obj).eq(j).focus();
			}
		
			j--;
			return false;
	   }
   
    })

	
	
	
	
}


	


 


 



