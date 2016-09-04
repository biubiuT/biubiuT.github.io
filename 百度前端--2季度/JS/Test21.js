var span = document.getElementsByTagName('span')[0],
	list = [],
	left = document.getElementsByTagName('input')[0],
	right = document.getElementsByTagName('input')[1],
	go = document.getElementsByTagName('input')[2],
	border = ["0px","0px","0px","0px"],
    pin = 0;
function getData(){
	var data = getStyle(span,"border-width").split(" ");
    list = [];
	for (var i = 0; i < data.length; i++) {
		var j = parseInt(data[i]);
		list.push(j);
	}
	for (var z = 0; z < list.length; z++) {
		if(list[z]!==0){
			pin = z;
		}
	}
}

function turn(n){
	if (n>3) {n=0;}
	else if (n<0) {n=3;}
	if (n%2==0) {
		span.style.height = "27px";
		span.style.width = "30px";
	}
	else{
		span.style.height = "30px";
		span.style.width = "27px";
	}
	border[pin] = "0px";
	border[n] = "3px";
	var data = border.join(" ");
	span.style.borderWidth = data;
}

function gogo(){
	getData();

	if (pin == 0) {
		var a = parseInt(getStyle(span,"top"));
		if (a>30) {
			span.style.top = (a-30) + "px";
		}
		else{
			alert("已经到顶了！")
		}
	}
	else if (pin == 1) {
		var b = parseInt(getStyle(span,"left"));
		if (b<300) {
			span.style.left = (b+30) + "px";
		}
		else{
			alert("已经到顶了！")
		}
	}
	else if (pin == 2) {
		var c = parseInt(getStyle(span,"top"));
		if (c<300) {
			span.style.top = (c+30) + "px";
		}
		else{
			alert("已经到顶了！")
		}
	}
	else{
		var d = parseInt(getStyle(span,"left"));
		if (d>30) {
			span.style.left = (d-30) + "px";
		}
		else{
			alert("已经到顶了！")
		}
	}
}

function getStyle(obj,attr){
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return document.defaultView.getComputedStyle(obj,false)[attr];
	}
}

function int(){
	left.addEventListener('click',function(){
		getData();
		turn(pin+1);
	})
	right.addEventListener('click',function(){
		getData();
		turn(pin-1);
	})
	go.addEventListener('click',function(){
		gogo();
	})
}
int();