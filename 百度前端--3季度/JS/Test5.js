var date = new Date(),
	table = document.getElementsByTagName('table')[0],
	resort = table.innerHTML,
	left,right,
	j=-1,//被点击的index
	year = date.getFullYear(),//年
	month = date.getMonth() + 1,//月
	day = date.getDay(),//日
	input = document.getElementsByTagName('input')[0],
	row = "";


function show() {
var dataLength = new Date(year,month,0).getDate(),//本月天数
	lessDay =  new Date(year,(month-1),1).getDay()//上一月应显示出的日数
	moreDay = 7-((dataLength - (7 - lessDay))%7),//下一月应显示出的日数
	data = [],//整个月的日期数组
	inMonth = month-1,//上一月
	p = document.getElementsByTagName('p')[0],
	inDay = new Date(year,inMonth,0).getDate();//上一月的总天数
	p.innerHTML = year + "年" + month + "月";
	//将上月的日期添加入数组
	for (var i = 0; i < lessDay; i++) {
		data.unshift(inDay-i);
	}
	//将本月的日期添加入数组
	for (var i = 0; i < dataLength; i++) {
		data.push(i+1);
	}
	//将下月的日期添加入数组
	for (var i = 0; i < moreDay; i++) {
		data.push(i+1);
	}
	for (var i = 0; i < data.length; i+=7) {
		row = "";
		for (var j = 0; j < 7; j++) {
			row += "<td>" + data[i+j] + "</td>";
		}
		table.innerHTML += "<tr>" + row + "</tr>";
	}
	var td = document.getElementsByTagName('td');
	for (var i = 0; i < lessDay; i++) {
		td[i].style.color = "#aaa";
	}//将上一月显示的日期显示为灰色
	for (var i = 0; i < moreDay; i++) {
		td[lessDay+dataLength+i].style.color = "#aaa";
	}//将下一月显示的日期显示为灰色
	left = document.getElementsByTagName('span')[0];
	right = document.getElementsByTagName('span')[1];
	int();
	choose(lessDay,dataLength);
}

function choose(lessDay,dataLength){
	var td = document.getElementsByTagName('td');
	for (var i = 0; i < td.length; i++) {
		td[i].index = i;
		td[i].addEventListener('click',function(){
			if (j!==-1) {
				td[j].style.border = "1px solid #fff";
			}
			td[this.index].style.border = "1px solid green";
			if (this.index>=lessDay&&this.index<(lessDay+dataLength)) {
				input.value = year+"年"+month+"月"+this.index+"日";
				table.style.display = "none";
			}
			j = this.index;
		})
	}
	if ((date.getMonth()+1)===month&&date.getFullYear()===year) {
		td[lessDay+day-1].style.backgroundColor = "orange";}
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
		table.innerHTML = resort;
		month -= 1;
		if (month<1) {
			year -= 1;
			month = 12;
		}
		show();
	})
	right.addEventListener('click',function(){
		table.innerHTML = resort;
		month += 1;
		if (month>12) {
			year += 1;
			month = 1;
		}
		show();
	})
	document.addEventListener('click',function(){
		
	})	
	input.addEventListener('click',function(){
		var or = getStyle(table,"display");
		if (or === "none") {
			table.style.display = "inline-block";
		}  
		else{
			table.style.display = "none";
		}
	})
	
}
show(year,month);



