var leftIn = document.getElementById('leftIn');
	var leftOut = document.getElementById('leftOut');
	var rightIn = document.getElementById('rightIn');
	var rightOut = document.getElementById('rightOut');
	var list = document.getElementById('list');

	var chartData = [];
	leftIn.addEventListener('click',function(){
		var input = document.getElementById('input').value;
		if (input) {
			chartData.unshift(input);
			data();
			clickIn()
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
		if (input!="") {
			chartData.push(input);
			data();
			clickIn()
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

	function data(){
		list.innerHTML = "";
		for(var i = 0; i<chartData.length; i++){
				list.innerHTML += "<li>" + chartData[i] + "</li>";
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