var div = document.getElementsByTagName('div'),
	divHeight = getStyle(div[0],"height"),
	divWidth = getStyle(div[0],"width");

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

function divIn(div) {
	for (var i = 0; i < div.length; i++) {
		var imgNum = div[i].getElementsByTagName('img');
		imgIn(imgNum);
	}
}

function imgIn(imgNum){
	switch(imgNum.length){
		case 1: imgNum[0].style.width = divHeight;
				imgNum[0].style.height = divWidth;
				break;
		case 2: imgNum[0].className = "imgTwoA";
				imgNum[1].className = "imgTwoB";
				break;
		case 3: var threeHeight = parseInt(divHeight)/2 + "px";
				imgNum[1].style.height = threeHeight;
				imgNum[2].style.height = threeHeight;
				var threeWidth = getStyle(imgNum[2],"width");
				imgNum[1].style.marginLeft = (parseInt(divWidth) - parseInt(threeWidth) - 1)+"px";
				imgNum[2].style.marginLeft = (parseInt(divWidth) - parseInt(threeWidth) - 1)+"px";
				imgNum[2].style.marginTop = threeHeight;
				imgNum[0].style.width = (parseInt(divWidth) - parseInt(threeWidth) - 1)+"px";
				imgNum[0].style.maxHeight = divHeight;
				break;
		case 4: var fourHeight = parseInt(divHeight)/2 + "px",
					fourWidth = parseInt(divWidth)/2 + "px";
				for (var i = 0; i < imgNum.length; i++) {
					imgNum[i].style.height = fourHeight;
					imgNum[i].style.width = fourWidth;
				}
				imgNum[1].style.marginLeft = fourWidth;
				imgNum[2].style.marginTop = fourHeight;
				imgNum[3].style.marginLeft = fourWidth;
				imgNum[3].style.marginTop = fourHeight;
				break;
		case 5: var fiveWidth = parseInt(parseInt(divWidth)/3) + "px";
				imgNum[0].style.position = "absolute";
				imgNum[0].style.height = parseInt(divHeight)*2/3 + "px";
				imgNum[0].style.width = parseInt(divWidth)*2/3 + "px";
				imgNum[1].style.position = "absolute";
				imgNum[1].style.width = parseInt(divWidth) - 2*parseInt(fiveWidth) + "px";
				imgNum[1].style.height = fiveWidth;
				imgNum[1].style.marginLeft = parseInt(divWidth)*2/3 + "px";
				imgNum[2].style.position = "absolute";
				imgNum[2].style.width = fiveWidth;
				imgNum[2].style.height = parseInt(divHeight)/3 + "px";
				imgNum[2].style.marginTop = imgNum[0].style.height;
				imgNum[3].style.position = "absolute";
				imgNum[3].style.width = fiveWidth;
				imgNum[3].style.height = parseInt(divHeight)/3 + "px";
				imgNum[3].style.marginTop = imgNum[0].style.height;
				imgNum[3].style.marginLeft = fiveWidth;
				imgNum[4].style.position = "absolute";
				imgNum[4].style.width = parseInt(divWidth) - 2*parseInt(fiveWidth) + "px";
				imgNum[4].style.marginTop = fiveWidth;
				imgNum[4].style.height = parseInt(divHeight) - parseInt(fiveWidth) + "px";
				imgNum[4].style.marginLeft = parseInt(fiveWidth)*2 + "px";
				break;
		case 6 :var sixWidth = parseInt(parseInt(divWidth)/3) + "px",
					sixHeight = parseInt(parseInt(divHeight)/3) + "px";
				for (var i = 1; i < imgNum.length - 1; i++) {
					imgNum[i].style.width = sixWidth;
					imgNum[i].style.height = sixHeight;
				}
				imgNum[0].style.width = parseInt(divWidth) - parseInt(sixWidth) + "px";
				imgNum[0].style.height = parseInt(divHeight) - parseInt(sixHeight) + "px";
				imgNum[1].style.marginLeft = imgNum[0].style.width;
				imgNum[2].style.marginLeft = imgNum[0].style.width;
				imgNum[2].style.marginTop = sixHeight;
				imgNum[3].style.marginTop = imgNum[0].style.height;
				imgNum[4].style.marginTop = imgNum[0].style.height;
				imgNum[4].style.marginLeft = sixWidth;
				imgNum[5].style.marginLeft = parseInt(sixWidth) * 2 + "px";
				imgNum[5].style.marginTop = parseInt(sixHeight) * 2 + "px";
				imgNum[5].style.width = parseInt(divWidth) - parseInt(sixWidth) * 2 + "px";
				imgNum[5].style.height = parseInt(divHeight) - parseInt(sixHeight) * 2 +"px";
			}
}
divIn(div);