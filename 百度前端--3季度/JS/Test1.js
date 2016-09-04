var button = document.getElementsByTagName('button')[0],
	down = document.getElementById('down'),
	other = document.getElementById('other'),
	move = document.getElementById('move'),
	body = document.getElementsByTagName('body')[0],
	isDown = false,
	mouseOffsetX = 0,
	mouseOffsetY = 0,
	input = document.getElementsByTagName('input')[0];

button.addEventListener('click',function(){
	down.style.display = "block";
	other.style.display = "block";
	body.style.overflow = "hidden";
})

input.addEventListener('click',function(){
	down.style.display = "none";
	other.style.display = "none";
	body.style.overflow = "scroll";
})

move.addEventListener('mousedown',function(event){
	var event = event || window.event;
	mouseOffsetX = event.pageX - other.offsetLeft;
	mouseOffsetY = event.pageY - other.offsetTop;
	isDown = true;
})

document.onmousemove = function(event){
	var event = event || window.event;
	var mouseX = event.pageX,
		mouseY = event.pageY,
		moveX = 0,
		moveY = 0;
	if (isDown === true) {
		moveX = mouseX - mouseOffsetX;
		moveY = mouseY - mouseOffsetY;

		var pageWidth = document.documentElement.clientWidth,
			pageHeight = document.documentElement.clientHeight,
			divWidth = other.offsetWidth,
			divHeight = other.offsetHeight,

			maxX = pageWidth - divWidth,
			maxY = pageHeight - divHeight;

		moveX = Math.min(maxX,Math.max(0,moveX));
		moveY = Math.min(maxY,Math.max(0,moveY));
		other.style.left = moveX + "px";
		other.style.top = moveY + "px";
	}
}

document.onmouseup = function(){
	isDown = false;
}