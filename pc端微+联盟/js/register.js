$(document).ready(function() {
    //标题栏点击切换样式
	$("li").hover(function(){
			$("li").removeClass();
			$(this).addClass("expecial");
			$("li:eq(1)").addClass("expecial");
		},function(){
			$("li").removeClass();
			$("li:eq(1)").addClass("expecial");
		})
})