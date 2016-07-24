var leftIn = document.getElementById('leftIn');
	var leftOut = document.getElementById('leftOut');
	var rightIn = document.getElementById('rightIn');
	var rightOut = document.getElementById('rightOut');
	var sort = document.getElementById('sort');
	var list = document.getElementById('list');

	var partn = /^[1-9]\d$|^100$/;

	var chartData = [];
	leftIn.addEventListener('click',function(){
		var input = document.getElementById('input').value;
		if (chartData.length<60) {
			if (partn.test(input)) {
			chartData.unshift(input);
			data();
			clickIn()
			}
			else{
				alert('请输入10-100的整数！');
			}
		}
		else{
			alert('队列已满！')
		}
	});

	leftOut.addEventListener('click',function(){
		if (chartData.length!==0) {
			var a = chartData.shift();
			data();
			alert(a);
			clickIn()
		}
		else{
			alert("队列已空！");
		}
	});

	rightIn.addEventListener('click',function(){
		var input = document.getElementById('input').value;
		if (chartData.length<60) {
			if (partn.test(input)) {
				chartData.push(input);
				data();
				clickIn()
			}
			else{
				alert('请输入10-100的整数！');
			}
		}
		else{
			alert('队列已满！')
		}
	});

	rightOut.addEventListener('click',function(){
		if (chartData.length!==0) {
			var a = chartData.pop();
			data();
			alert(a);
			clickIn()
		}
		else{
			alert("队列已空！");
		}
	});

	sort.addEventListener('click',function(){
		chartData.sort(function(a,b){
			return a-b;
		})
		data();
	})

	function data(){
		list.innerHTML = "";
		for(var i = 0; i<chartData.length; i++){
				list.innerHTML += "<li style='height:" + chartData[i] + "px;' title = '" + chartData[i] + "'></li>";
		}
	}
	function clickIn(){
		var aLi=document.getElementsByTagName("li");
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].addEventListener("click",function(){
			alert(chartData[this.index]);
			chartData.splice(this.index,1);
			data();
			clickIn();
		},false);
		}
	}