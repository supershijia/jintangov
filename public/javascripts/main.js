/**************************************页面顶部信息提示区域相关函数start******************************/
var info_window_timer;
function info_window_hide(){
	$('#info_window_cont').find('.info_window_div').height(0);
	$('#info_window_cont').find('#info_window_close').live('click', function(){
		info_window_up();
	});
}
//显示信息层
function info_window_down(html){
	$('#info_window_cont').find('.info_window_content').html(html);
	$('#info_window_cont').find('.info_window_div').animate(
		{
			height: $('#info_window_cont').find('.info_window').outerHeight()
		},
		400,
		function(){
			info_window_timer = setTimeout("info_window_up()",2000);
			$('#info_window_cont').find('.info_window').on('mouseenter', function(){
					clearTimeout(info_window_timer);
				}
			);
			$('#info_window_cont').find('.info_window').on('mouseleave', function(){
					info_window_timer = setTimeout("info_window_up()",2000);
				}
			);
		}
	);
}
//隐藏信息层
function info_window_up(){
	$('#info_window_cont').find('.info_window').off('mouseenter');
	$('#info_window_cont').find('.info_window').off('mouseleave');
	$('#info_window_cont').find('.info_window_div').animate(
		{
			height: 0
		},
		400,
		function(){
			//隐藏之后要执行的动作
			//alert("信息层隐藏了！");
		}
	);
}
/********************************页面顶部信息提示区域相关函数end**************************************/
$(function(){
	//导航栏菜单鼠标移动效果start
	//一级菜单
	$('#nav li').hover(function(){
                $(this).addClass('hover');
                $(this).removeClass('hover');
	});
	//二级菜单
	$('.nav_l_l li.nav_li2').hover(
		function(){
			$(this).find("ul.nav_l_l_l").show();
			$(this).find("a").css("background-color","#373D42");
		},
		function(){
			$(this).find("ul.nav_l_l_l").hide();
			$(".nav_l_l_l").hide();
			$(this).find("a").css("background-color","#FFFFFF");
		}
	);
	//三级菜单
	$('.nav_l .nav_l_l_l').hover(
		function(){
			$(this).parent(".nav_li2").find("a").css("background-color","#373D42");
		},
		function(){
			
		}
	);
	//导航栏菜单鼠标移动效果end
	//选中第一个tab
	$('#tab_div0').contentTab();
	$('#tab_div1').contentTab();
	//文本框、密码框获得焦点和失去焦点的样式变化start
	$("input[type='text'], input[type='password'], textarea").live({
		'focus':function(){
			var css = $(this).attr('class');
			$(this).parent().removeClass('span_'+css+'_err').addClass('span_'+css+'_act');
		},
		'blur':function(){
			var css = $(this).attr('class');
			$(this).parent().removeClass('span_'+css+'_act');
		}
	});
	//文本框、密码框获得焦点和失去焦点的样式变化end
	$('#open_close').live('click',function(){
		if($(this).text() == '收起'){
			$(this).removeClass('close_cont').addClass('open_cont').children('span').html('展开');
			$(this).parent().next('div').eq(0).addClass('term_list_h0');
		}else if($(this).text() == '展开'){
			$(this).removeClass('open_cont').addClass('close_cont').children('span').html('收起');
			$(this).parent().next('div').eq(0).removeClass('term_list_h0');
		}
	});
	//增加列表功能start
	$('.add_row_symbol').live('click',function(){
		$(this).parent().prev('table').append('<tr><td class="txt_m"><span class="del_row_symbol"><em></em></span></td><td>表格第一列</td><td>表格第二列</td></tr>');
		var s = $(this).parent().prev('table').find('tr').size()%2;
		$(this).parent().prev('table').find('tr').last().addClass('tr_'+s);
	});
	//增加列表功能end
	//删除列表功能start
	$('.del_row_symbol').live('click',function(){
		var tbody = $(this).parents('tr:first').parent();
		var index = tbody.children('tr').index($(this).parents('tr:first')) - 1;
		$(this).parents('tr:first').remove();
		var count = tbody.children('tr').size();
		tbody.children('tr').eq(index).nextAll('tr').each(function(){
			if($(this).hasClass('tr_0')){
				$(this).removeClass('tr_0').addClass('tr_1');
			}else if($(this).hasClass('tr_1')){
				$(this).removeClass('tr_1').addClass('tr_0');
			}
		});
	});
	//删除列表功能end
	info_window_hide();//页面加载时弹出信息提示层
	//滚动条移动的时候重新定位信息层高度值start
	$(window).scroll(function(){
		 $('#info_window_cont').css('top', $(window).scrollTop());
	});
	//滚动条移动的时候重新定位信息层高度值end
	info_window_down('提示信息内容部分');//弹出页面顶部信息层
	//当按钮点击和松开是改变按钮背景图片，实现按钮效果start
	$(".submit").mousedown(function(){
		$(this).css("background-position","-163px -550px");
	});
	$(".submit").mouseup(function(){
		$(this).css("background-position","-81px -550px");
	});
	$(".submit_bg").mousedown(function(){
		$(this).css("background","url(images/button_bg.gif) no-repeat");
	});
	$(".submit_bg").mouseup(function(){
		$(this).css("background","url(images/button_bg.gif) no-repeat");
	});
	//当按钮点击和松开是改变按钮背景图片，实现按钮效果start


	//左边下滑效果
	//$(".side_l li").not(".current").hide();
	$(".side_l .current").click(function(){
		//$(this).nextUntil('.current').slideToggle(500);
	
	})
	//$(".hide_li").hide().first().show();
	$(".side_l .current").each(function(i){
		$(this).click(function(){
			if($(".hide_li").eq(i).is(":visible"))
			{
				$(".hide_li").eq(i).slideUp();
			}
			else
			{
				$(".hide_li").slideUp().eq(i).slideDown();
				//$(this).siblings().next(".hidelii").hide();
			}
		})
	})
	//跳到新建条目的按钮
    $(".submit_c").click(function(){
		window.location.href="add_shop.html";
	})
	$(".add_s").click(function(){
		window.location.href="add_space.html";
	})
	$(".add_men").click(function(){
		window.location.href="add_man.html";
	})
	$(".add_p").click(function(){
		window.location.href="add_PDA.html";
	})
	$(".add_cost").click(function(){
		window.location.href="add_costs.html";
	})
	$(".submit_cos").click(function(){
		window.location.href="add_customers.html";
	})
	$(".submit_j").click(function(){
		window.location.href="add_ji.html";
	})

	////遮罩层的高度问题
	var _height1=$(document).height();
	$(".mask").height(_height1);
	$(".content").each(function(){
		$(this).find(".text").first().focus();
	})

	$(".hide_left span").toggle(function(){
		$(this).text("点击展开");
		$(".left_cont").css("margin-left","-200%");
		$(".body_box").addClass("bg_c");
		$(".content,.foot_cont").css("margin-left","0px");
	},function(){
		$(this).text("点击隐藏");
		$(".left_cont").css("margin-left","-100%");
		$(".body_box").removeClass("bg_c");
		$(".content,.foot_cont").css("margin-left","180px");
	})

});