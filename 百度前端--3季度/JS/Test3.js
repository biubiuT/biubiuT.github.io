var tbody = document.getElementsByTagName('tbody')[0],
	arr,
	span1,span2,span3,span4,span5,span6,span7,span8,
	data = [
			["小明",80,90,70,240],
			["小红",90,60,90,240],
			["小亮",60,100,70,230],
			["小韬",90,100,85,275],
			["小艾",85,90,85,260],
			["小明",80,90,70,240],
			["小红",90,60,90,240],
			["小亮",60,100,70,230],
			["小韬",90,100,85,275],
			["小艾",85,90,85,260],
			["小明",80,90,70,240],
			["小红",90,60,90,240],
			["小亮",60,100,70,230],
			["小韬",90,100,85,275],
			["小艾",85,90,85,260],
			["小明",80,90,70,240],
			["小红",90,60,90,240],
			["小亮",60,100,70,230],
			["小韬",90,100,85,275],
			["小艾",85,90,85,260],
			["小明",80,90,70,240],
			["小红",90,60,90,240],
			["小亮",60,100,70,230],
			["小韬",90,100,85,275],
			["小艾",85,90,85,260],
			["小明",80,90,70,240],
			["小红",90,60,90,240],
			["小亮",60,100,70,230],
			["小韬",90,100,85,275],
			["小艾",85,90,85,260]
			];

function render(){
	tbody.innerHTML = "<tr><th>姓名</th><th>语文<span class='top'></span><span class='bot'></span></th><th>数学<span class='top'></span><span class='bot'></span></th><th>英语<span class='top'></span><span class='bot'></span></th><th>总分<span class='top'></span><span class='bot'></span></th></tr>";
	for (var i = 0; i < data.length; i++) {
		arr = "";
		for (var j = 0; j < data[i].length; j++) {
			arr += "<td>" + data[i][j] + "</td>";
		}
		tbody.innerHTML += "<tr>" + arr + "</tr>";
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

function scroll(){
	document.getElementsByTagName('body')[0].onscroll = function(){
		var table = document.getElementsByTagName('table')[0],
		tableTop = table.offsetTop,
		tableHeight = parseInt(getStyle(table,"height")),
		tr = document.getElementsByTagName('tr')[0],
		scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop>tableTop) {
			table.style.paddingTop = "30px";
			tr.style.position = "fixed";
			tr.style.top = "0";
			if (scrollTop>(tableHeight+tableTop+27)) {
				tr.style.position = "absolute";
			}
		}
		else if (scrollTop<=tableTop) {
			tr.style.position = "static";
			table.style.paddingTop = "0";
		}
	}
}

render();
scroll();









