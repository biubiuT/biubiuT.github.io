var span = document.getElementsByTagName('span')[0],
	TraTop = document.getElementsByTagName('input')[0],
	TraRight = document.getElementsByTagName('input')[1],
	TraBottom = document.getElementsByTagName('input')[2],
	TraLeft = document.getElementsByTagName('input')[3],
	MoveTop = document.getElementsByTagName('input')[4],
	MoveRight = document.getElementsByTagName('input')[5],
	MoveBottom = document.getElementsByTagName('input')[6],
	MoveLeft= document.getElementsByTagName('input')[7],
	b = 0,
	a=0;	

function turn(n){
	if (n == 0) {
		span.style.transform = 'rotateZ(-180deg)';
	}
	else if (n == 1) {
		span.style.transform = 'rotateZ(-90deg)';
	}
	else if (n == 2) {
		span.style.transform = 'rotateZ(-0deg)';
	}
	else {
		span.style.transform = 'rotateZ(-270deg)';
	}
}


function gogo(n){
	if (n == 0) {
		a = parseInt(getStyle(span,"top"));
		if (a>=60) {
			if (a%30!==0) {
				a=(parseInt(a/30))*30;
			}
			span.style.top = (a-30) + "px";
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
			span.style.left = (a+30) + "px";
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
				if (a>300) {a=300;}
			}
			span.style.top = (a+30) + "px";
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
			span.style.left = (a-30) + "px";
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
	TraTop.addEventListener('click',function(){
		gogo(0);
	})
	TraRight.addEventListener('click',function(){
		gogo(1);
	})
	TraBottom.addEventListener('click',function(){
		gogo(2);
	})
	TraLeft.addEventListener('click',function(){
		gogo(3);
	})
	MoveTop.addEventListener('click',function(){
		turn(0);
		gogo(0);
	})
	MoveRight.addEventListener('click',function(){
		turn(1);
		gogo(1);
	})
	MoveBottom.addEventListener('click',function(){
		turn(2);
		gogo(2);
	})
	MoveLeft.addEventListener('click',function(){
		turn(3);
		gogo(3);
	})
}
int();