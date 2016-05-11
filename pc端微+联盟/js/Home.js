$(document).ready(function(){

	//顶部标签滑动切换样式
	$("li a").bind("mouseover",function(){
		$("li a").removeClass();
		$(this).addClass("expecial");
	})

    //点击登录出现登录框
    $('#login').bind('click',function(){
        $('#mask').css("display","block");
        $('#signInBox').css("display","block");
        $(document.body).css({"overflow-x":"hidden",
                              "overflow-y":"hidden"})
    })
    //点击“x”按键，退出登录
    $('#signOut').bind('click',function(){
        $('#mask').css("display","none");
        $('#signInBox').css("display","none");
        $(document.body).css({"overflow-x":"auto",
                              "overflow-y":"auto"})
    })
    //用户点击登录
    $('#signIn').bind('click',function(){
        $.ajax({
            url:"",
            type:"POST",
            dataType:"json",
            success:function(){
                //........
            }
        })
    })


	//入驻按钮滑动切换渐变色
	$("#join").hover(function(){
		$(this).css("background","url(../image/joinbtn2.png)");
	},function(){
		$(this).css("background","url(../image/joinbtn.png)");
	})

	//入驻按钮下的li列表滑动切换样式
	$("#box_1_left li").hover(function(){
		$(this).css({"color":"#fe9c1d",
	                 "text-decoration":"underline"});
	},function(){
		$(this).css({"color":"#009cfe",
	                 "text-decoration":"none"});
	})

	//点击切换、自动切换显示图片
	var Index=1;
	var autoplay = document.getElementById('autoplay');
	var aImg = autoplay.getElementsByTagName('img');
	var aLeft = document.getElementById('img_left');
	var aRight = document.getElementById('img_right');
	var box = document.getElementById('box_1_right');
	var aLi = box.getElementsByTagName('li');
	var played=false;
	var timer;
//封装：点击左右切换按钮进行显示图片的切换
	function click(val){//参数val判断点击的是左按钮还是右按钮
		if (played) {
			return false;//如果正在执行动画，则直接返回
		}
		else{
			startMove(val*422);
			Index-=val;
			if (Index>3) {
    			Index=1;
    		}
    		if (Index<1) {
    			Index=3;
    		}
    		tab();//调用按钮显示函数
		}
	}
	//封装：自动切换
	function play(){
        timer = setTimeout(function () {
            aRight.onclick();
            play();
        }, 3000);//递归，每隔3s调用一次
    }
    //封装：运动函数
	function startMove (offset) {//封装成函数，每次只需传递正负数
		played=true;
        var speed = offset/30;//运动速度
        var left = autoplay.offsetLeft + offset;//运动后的距离等于原来的值加上变动的距离就等于新值
        var go = function (){//进行运动
            if ( (speed > 0 && autoplay.offsetLeft < left) || (speed < 0 && autoplay.offsetLeft > left)) {
                //判断向左运动还是向右运动并判断是否停止运动
                autoplay.style.left = autoplay.offsetLeft + speed + 'px';//位移运动
                setTimeout(go, 10);//递归，每隔10ms进行一次运动
            }
            else {//否则
                autoplay.style.left = left + 'px';//避免运动时的像素小偏移
                if(left>-422){
                    autoplay.style.left = -422 * 3 + 'px';//切换到第一张图片时，自动跳转到第四张图片
                }
                if(left<(-422*3)) {
                    autoplay.style.left = -422 + 'px';//切换到第五张图片时，自动跳转到第二张图片
                }
                played=false;    
            }
        }
        go();//调用一下，执行函数
    }
    //封装：随着图片切换，Li圆点样式改变
    function tab(){
    	for (var i = 0; i < aLi.length; i++) {
    		aLi[i].className='';
    	}
    	aLi[Index-1].className='checked';
    }
    //封装：停止函数
    function stop(){
    	clearTimeout(timer);
    }
    //左切换按钮与右切换按钮调用函数
    aLeft.onclick=function(){
		click(1);
    }
    aRight.onclick=function(){
    	click(-1);
    }
    //点击Li圆点按钮切换自身样式及改变图片
    for (var i = 0; i < aLi.length; i++) {
    	aLi[i].onclick=function(){
    	    var id=this.id;
    		if (id==Index) {
    		    return;
    	    }
    	    var distance=(Index-id)*422;
    	    startMove(distance);
    	    Index=id;
    	    tab();
    	}
    }
    //Li圆点、切换按钮、图片：滑过时，停止自动运动，移出时，开始自动运动
    aLi.onmouseover=stop;
    aLi.onmouseout=play;
    aLeft.onmouseover=stop;
    aLeft.onmouseout=play;
    aRight.onmouseover=stop;
    aRight.onmouseout=play;
    box.onmouseover=stop;
    box.onmouseout=play;

    play();//调用一下自动切换函数
    
})