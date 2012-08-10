$(document).ready(function(){

	
	//调用设置快捷键函数
	setHotkeys("down","focus_menu");
	setHotkeys("up","focus_menu2");
	setHotkeys("left","focus_menu2");
	setHotkeys("right","focus_menu");
	
	
		
	
});


//设置快捷键start
function setHotkeys(key,fun){
	if(isNull(key)==false && isNull(fun)==false){
		$.hotkeys.add(key,function(){eval( fun + "()" ); });
	}
	
}
//设置快捷键end

//快捷键的功能函数start




//快捷键的功能函数end
var j=0;
function focus_menu(){
	var _obj=$(".tip_window30:visible").find(".text");
	var _length=$(_obj).length;
	$(_obj).first().focus();
	j++;
	if(j<_length)
	{
		$(_obj).eq(j).focus();
	}
	else
	{
		$(_obj).first().focus();
		j=0;
	}
}
function focus_menu2(){
	var _obj=$(".tip_window30:visible").find(".text");
	var _length2=$(_obj).length;
	$(_obj).first().focus();
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
	
}


//判断是否为空或未定义
function isNull(obj){
	if(obj==null || obj=="" || obj=="undefined"){
		return true;
	}else{
		return false;
	}
}
