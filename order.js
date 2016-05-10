$(document).ready(function(){
    //点击触发“选中”样式
	var $checked_name,$checked_time,$checked_week;
	$('td').bind('touchstart',function(){
		var $num = $(this).attr("class");
		var value = $num[$num.length-1];
		$('td').removeClass('td-checked');
		$('th').removeClass('th-checked');
		$(this).addClass('td-checked');
		$('th').eq(value).addClass('th-checked');
		$checked_name = $(this).html();//获取选中的老师姓名
		$checked_time = $(this).siblings(".header").html()||$(this).parent().prev().children().eq(0).html();//获取选中的时间段
		$checked_week = $('th').eq(value).html();//获取选中的是星期*

	})
       
	//个人信息页中显示已选择的预约信息
	$('#submit').bind('touchstart',function(){
		if (!$checked_name) {
			return false;
		}
		$('#index').css('display','none');
		$('#selfInformation').css('display','block');
		var html = '当前已选择时间：' + $checked_week + $checked_time + ' ' + $checked_name;
		$('#information').html(html);
	})

	$('#change').bind('touchstart',function(){
		$('#selfInformation').css('display','none');
		$('#index').css('display','block');
	})

	//向后台获取已预约的时间段的时间、星期、老师姓名，改变样式
	//$.getJSON('',function(data){//获取已预约的时间
		//$.each(data,function(index,comment){//遍历获取的数据，并判断该数据所处时间段，为其添加样式
			$time = '10:00~11:30'//comment['time'];
			$name = '罗玉华'//comment['name'];
			$week = '周五'//comment['week'];
            if ($time == '10:00~11:30') {
		        if ($week == '周一') {
			        if ($name == '陈敏') {
				        $('tr').eq(2).children('td').eq(0).addClass('checked').unbind('touchstart');
			        }
			        else{
				        $('tr').eq(1).children('td').eq(0).addClass('checked').unbind('touchstart');
			        }
		        }
		        if ($week == '周二') {
			        if ($name == '熊贤芳') {
			        	$('tr').eq(1).children('td').eq(1).addClass('checked').unbind('touchstart');
			        }
			        else{
			        	$('tr').eq(2).children('td').eq(1).addClass('checked').unbind('touchstart');
			        }
        		}
		        if ($week == '周三') {
			        if ($name == '钟楠') {
	        			$('tr').eq(1).children('td').eq(2).addClass('checked').unbind('touchstart');
	        		}
	        		else{
	        			$('tr').eq(2).children('td').eq(2).addClass('checked').unbind('touchstart');
	        		}
	        	}
	        	if ($week == '周四') {
	        		if ($name == '陆文颖') {
	        			$('tr').eq(1).children('td').eq(3).addClass('checked').unbind('touchstart');
	        		}
		        	else{
		        		$('tr').eq(2).children('td').eq(3).addClass('checked').unbind('touchstart');
		        	}
		        }
		        if ($week == '周五') {
		        	if ($name == '谭静') {
		        		$('tr').eq(1).children('td').eq(4).addClass('checked').unbind('touchstart');
		        	}
		        	else{
			        	$('tr').eq(2).children('td').eq(4).addClass('checked').unbind('touchstart');
		        	}
		        }
	        }
	        if ($time == '15:00~17:00') {
		        if ($week == '周一') {
			        if ($name == '朱卫嘉') {
			        	$('tr').eq(3).children('td').eq(0).addClass('checked').unbind('touchstart');
			        }
			        else{
			        	$('tr').eq(4).children('td').eq(0).addClass('checked').unbind('touchstart');
		        	}
		        }
		        if ($week == '周二') {
		        		$('tr').eq(3).children('td').eq(1).addClass('checked').unbind('touchstart');
	        	}
	        	if ($week == '周三') {
		        	if ($name == '王小运') {
		        		$('tr').eq(3).children('td').eq(2).addClass('checked').unbind('touchstart');
		        	}
		        	else{
		        		$('tr').eq(4).children('td').eq(1).addClass('checked').unbind('touchstart');
		        	}
		        }
		        if ($week == '周四') {
		        	if ($name == '黄小琴') {
				        $('tr').eq(3).children('td').eq(3).addClass('checked').unbind('touchstart');
			        }
			        else{
			        	$('tr').eq(4).children('td').eq(2).addClass('checked').unbind('touchstart');
			        }
	        	}
		        if ($week == '周五') {
		        		$('tr').eq(1).children('td').eq(4).addClass('checked').unbind('touchstart');
		        }
	        }
	        if ($time == '19:30~21:30') {
		        if ($week == '周一') {
			        if ($name == '张汇泉') {
				        $('tr').eq(5).children('td').eq(0).addClass('checked').unbind('touchstart');
			        }
			        else{
			        	$('tr').eq(6).children('td').eq(0).addClass('checked').unbind('touchstart');
			        }
	        	}
		        if ($week == '周二') {
			        if ($name == '陈瑞涵') {
			        	$('tr').eq(5).children('td').eq(1).addClass('checked').unbind('touchstart');
			        }
			        else{
			        	$('tr').eq(6).children('td').eq(1).addClass('checked').unbind('touchstart');
			        }
		        }
		        if ($week == '周三') {
			        if ($name == '何雨桑') {
				        $('tr').eq(5).children('td').eq(2).addClass('checked').unbind('touchstart');
			        }
			        else{
				        $('tr').eq(6).children('td').eq(2).addClass('checked').unbind('touchstart');
			        }
		        }
		        if ($week == '周四') {
			        if ($name == '高延春') {
				        $('tr').eq(5).children('td').eq(3).addClass('checked').unbind('touchstart');
			        }
			        else{
				        $('tr').eq(6).children('td').eq(3).addClass('checked').unbind('touchstart');
			        }
		        }
		        if ($week == '周五') {
			        if ($name == '吴宗志') {
			        	$('tr').eq(5).children('td').eq(4).addClass('checked').unbind('touchstart');
			        }
			        else{
				        $('tr').eq(6).children('td').eq(4).addClass('checked').unbind('touchstart');
			        }
		        }
	        }
        //})
	//})	

	//提交给后台选择的信息及个人信息
	$('#button').bind('touchstart',function(){
		$('#error').css('display','none');
		if($('#nickName').val()==''||$('#college').val()==''||$('#phone').val()==''){
			$('#error').css('display','block');
			return false;
		}
		else{
			$.ajax({
				url: '',
				type:'post',
				dataType:'json',
				data:{
					name:$checked_name,
					time:$checked_time,
					week:$checked_week,
					nickName:$('#nickName').val(),
					college:$('#college').val(),
					phone:$('#phone').val()},
				success:function(){
					$('#success').css('display','block');
				}

			})
		}
	})

})
