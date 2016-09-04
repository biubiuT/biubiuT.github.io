var span = document.getElementsByTagName('span')[0],
	data = [],
	go = document.getElementsByTagName('input')[0],
	textValue = document.getElementsByTagName('textarea')[0],
	b = 0,
	pin = 0,
	c=0,
	a=0;	

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
	if (n == 0) {
		pin = 0;
		span.style.transform = 'rotateZ(-180deg)';
	}
	else if (n == 1) {
		pin = 1;
		span.style.transform = 'rotateZ(-90deg)';
	}
	else if (n == 2) {
		pin = 2;
		span.style.transform = 'rotateZ(-0deg)';
	}
	else {
		pin = 3;
		span.style.transform = 'rotateZ(-270deg)';
	}
}

function text(){
	var c = 0;
	var textVal = document.getElementsByTagName('textarea')[1].value.trim();
	data = textVal.split("\n");
	for (var i = 0; i < data.length; i++) {//!!!!修改！！
		textValue.innerHTML += (i+1);
	}
	var timer = setInterval(function(){
		if (c < data.length) {
			var num = data[c].replace(/[^0-9]/ig,"");
			var n = data[c].replace(/[^a-zA-Z]/ig,"");
			++c;
			if (!num) {num = 1;}
			time(n,num);
		}
		else{
			clearInterval(timer);
			c=0;
		}
	},1000);
}

function time(n,num){
	if (n.toLowerCase().trim()==="go") {
		gogo(pin,num);
	}
	else if (n.toLowerCase().trim()==="tratop") {
		gogo(0,num);
	}
	else if (n.toLowerCase().trim()==="trarig") {
		gogo(1,num);
	}
	else if (n.toLowerCase().trim()==="trabot") {
		gogo(2,num);
	}
	else if (n.toLowerCase().trim()==="tralef") {
		gogo(3,num);
	}
	else if (n.toLowerCase().trim()==="movtop") {
		turn(0);
		gogo(0,num);
	}
	else if (n.toLowerCase().trim()==="movrig") {
		turn(1);
		gogo(1,num);
	}
	else if (n.toLowerCase().trim()==="movbot") {
		turn(2);
		gogo(2,num);
	}
	else if (n.toLowerCase().trim()==="movlef") {
		turn(3);
		gogo(3,num);
	}
}

function gogo(n,num){
	if (n == 0) {
		a = parseInt(getStyle(span,"top"));
		if (a>=60) {
			if (a%30!==0) {
				a=(parseInt(a/30))*30;
			}
			if ((a-30)<(30*num)) {
				span.style.top = "30px";
			}
			else{
			span.style.top = (a-(30*num)) + "px";}
		}
		else{
			return false;
		}
	}
	else if (n == 1) {
		a = parseInt(getStyle(span,"left"));
		if (a<=270) {
			if (a%30!==0) {
				a=(parseInt(a/30)+1)*30;
			}
			if ((300-a)<(30*num)) {
				span.style.left = "300px";
			}
			else{
			span.style.left = (a+(30*num)) + "px";}
		}
		else{
			return false;
		}
	}
	else if (n == 2) {
		a = parseInt(getStyle(span,"top"));
		if (a<=270) {
			if (a%30!==0) {
				a=(parseInt(a/30)+1)*30;
			}
			if ((300-a)<(30*num)) {
				span.style.top = "300px";
			}
			else{
			span.style.top = (a+(30*num)) + "px";}
		}
		else{
			return false;
		}
	}
	else{
		a = parseInt(getStyle(span,"left"));
		if (a>=60) {
			if (a%30!==0) {
				a=(parseInt(a/30))*30;
			}
			if ((a-30)<(30*num)) {
				span.style.left = "30px";
			}
			else{
			span.style.left = (a-(30*num)) + "px";}
		}
		else{
			return false;
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
	go.addEventListener('click',function(){
		if (c === 1) {
			return false;
		}
		else{
			c=1;
			getData();
			text();
		}
	})
}
int();