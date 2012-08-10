$(document).ready(function(){

	
	//调用设置快捷键函数
	setHotkeys("F1","shows1");
	setHotkeys("F2","shows2");
	setHotkeys("F3","shows3");
	setHotkeys("F9","shows6");
	setHotkeys("F10","shows7");
	$(".select_box2 .checkbox").not(":first").click(function(){
		setHotkeys("F7","shows4");
		setHotkeys("F8","shows5");
	})
	

});

//快捷键的功能函数start


function mask1()
{
	var n=$(".mask:visible").length;
	if(n<1){$(".mask1").show();}

}
function mask2()
{
	var m=$(".mask:visible").length;
	if(m<1){$(".mask2").show();}

}
function mask3()
{
	var k=$(".mask:visible").length;
	if(k<1){$(".mask3").show();}

}
//销售开单部分的快捷键     f1----预报价历史记录    f2----销售历史记录    f3----新建预报价
function show_menu1(obj) 
{
	mask1();
	$(obj).show().find(".text").val("");
	$(obj).addClass("z-1000").siblings(".z-1000").removeClass("z-1000");
	$(obj).filter(".z-1000").find(".text").first().focus();
	
}
//盘亏盘盈部分的快捷键     f7----盘盈数据    f8----盘亏数据   
function show_menu2(obj) 
{
	mask2();
	$(obj).show().find(".text").val("");
	$(obj).addClass("z-1000").siblings(".z-1000").removeClass("z-1000");
	$(obj).find(".text").first().focus();
}
//退货验货确认     f9----退货数量    f10----损坏数量
function show_menu3(obj) 
{
	$(".select_box3 .checkbox").not(":first").each(function(){//判断先被选中，然后才能使用快捷键
		if($(this).is(":checked"))
		{
			mask3();
			$(obj).show().find(".text").val("");
			$(obj).addClass("z-1000").siblings(".z-1000").removeClass("z-1000");
			$(obj).filter(".z-1000").find(".text").first().focus();
		}
		
	});
	
}
function show_menu4(obj) 
{
	$(".select_box4 .checkbox").not(":first").each(function(){//判断先被选中，然后才能使用快捷键
		if($(this).is(":checked"))
		{
			mask3();
			$(obj).show().find(".text").val("");
			$(obj).addClass("z-1000").siblings(".z-1000").removeClass("z-1000");
			$(obj).filter(".z-1000").find(".text").first().focus();
		}
		
	});
}

function shows1(){
	show_menu1('.f1_code');
}
function shows2(){
	show_menu1('.f2_code');
}
function shows3(){
	show_menu1('.f3_code');
}
function shows4(){
	show_menu2('.f7_code');
}
function shows5(){
	show_menu2('.f8_code');
}
function shows6(){
	show_menu3('.f9_code');
}
function shows7(){
	show_menu4('.f10_code');
}


//快捷键的功能函数end






