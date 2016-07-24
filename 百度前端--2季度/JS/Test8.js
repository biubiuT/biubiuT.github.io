var leftIn = document.getElementById('leftIn');
	var leftOut = document.getElementById('leftOut');
	var rightIn = document.getElementById('rightIn');
	var rightOut = document.getElementById('rightOut');
	var search = document.getElementById('search');
	var list = document.getElementById('list');

	var chartData = [];
	leftIn.addEventListener('click',function(){
		var input = document.getElementById('input').value.trim();
		var okData = input.split(/[^0-9a-zA-Z\u4e00-\u9fa5]/).filter(function(e) {
            if (e != null && e.length > 0) {
                return true;
            } else {
                return false;
            }
        });
			chartData = okData.concat(chartData);
			data();
			clickIn()
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
		var input = document.getElementById('input').value.trim();
		var okData = input.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e) {
            if (e != null && e.length > 0) {
                return true;
            } else {
                return false;
            }
        });
			chartData = chartData.concat(okData);
			data();
			clickIn()
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

	search.addEventListener('click',function(){
		var searchVal = document.getElementById('searchVal').value.trim();
		for (var j = 0; j < chartData.length; j++) {
			list.childNodes[j].style.backgroundColor = "red";
		}
		for (var i = 0; i < chartData.length; i++) {
			chartData[i].index = i;
			if (chartData[i].indexOf(searchVal) >= 0) {
				list.childNodes[i].style.backgroundColor = "green";
			}
		}
	})

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