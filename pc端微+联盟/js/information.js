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
	//判断是否符合填写规定并显示相应符号
	var $htmlTure="<img src='../image/correct.png' class='ture'>";
	var $htmlFalse="<div id=error_1><img src='../image/error.png' class='error'><p>用户错误、提醒错误</p></div>";
	$("#form :input").bind("blur",function(){
		if($(this).val().length==0)
			$(this).next().html($htmlFalse);
		else
			$(this).next().html($htmlTure);
	})
	
	/*  $("#form #phone").bind("blur",function(){
		if($(this).val()!=(/\d/))
			$(this).parent().next().html($htmlFalse);
		else
			$(this).parent().next().html($htmlTure);
	})  

	正则！！！*/

	//判断点击提交按钮时是否满足提交条件，若满足，则将数据提交
	$("#send").bind("click",function(){
		var tureLength=$("form .ture").length;
		var errorLength=$("form .error").length;
		if (errorLength||tureLength!=5) {
			$("#error").css("display","block");
			return false;
		}

		/*$.post("url",{
			FullName: $("#FullName").val(),
			abbreviation: #("#abbreviation").val(),
			number: $("number").val(),
			name: $("name").val(),
			phone: $("phone").val()
		})*/
	    
	})

	}
)