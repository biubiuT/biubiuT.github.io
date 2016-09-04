var boxList = document.getElementsByClassName('box'),
    arr = [],
    main = document.getElementsByClassName('main')[0];
for (var i = 0; i < 4; i++) {
	var high = getStyle(boxList[i],"height");
	arr.push(parseInt(high));
}
for (var j = 4; j < boxList.length; j++) {
	boxList[j].style.position = "absolute";
	var minBox = Math.min(arr[0],arr[1],arr[2],arr[3]);
	var index = arr.indexOf(minBox);
	boxList[j].style.left = boxList[index].offsetLeft +"px";
	boxList[j].style.top = boxList[index].offsetTop + arr[index] +"px";
	arr[index] += parseInt(getStyle(boxList[j],"height"));
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