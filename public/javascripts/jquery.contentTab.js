// JavaScript Document
(function($){
	$.fn.contentTab = function(options){
		var defaults = {
			tabUl : '.tab_l',
			tabContentUl : '.tab_content_l'
		};
		var options = $.extend(defaults, options);
		return this.each(function(){
			var content = this;
			$(content).find(options.tabUl + ' li').eq(0).addClass('current');
			$(content).find(options.tabContentUl + ' li').eq(0).addClass('current');
			$(content).find(options.tabUl + ' li a').click(
				function(){
					var index = $(this).parent().index();
					$(content).find(options.tabUl + ' li').removeClass('current');
					$(this).parent().addClass('current');
					$(content).find(options.tabContentUl + ' li').removeClass('current');
					$(content).find(options.tabContentUl + ' li').eq(index).addClass('current');
				}
			);
		});
	};
})(jQuery);