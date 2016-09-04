var date = new Date(),
	table = document.getElementsByTagName('table')[0],
	resort = table.innerHTML,
	left,right,
	j=-1,//被点击的index
	year = date.getFullYear(),//年
	month = date.getMonth() + 1,//月
	day = date.getDay(),//日
	number = 0,//时间段选择选择时间的数量
	num = [],//选择时间段的两个时间段的下标
	time = false,//选择时间段的标签
	chooser = false,//判断时间段是否选择完毕
	less,//选择时间段的当月显示的前一月的日期数目
	input = document.getElementsByTagName('input')[0],
	button1 = document.getElementsByTagName('button')[0],
	button2 = document.getElementsByTagName('button')[1],
	button3 = document.getElementsByTagName('button')[2],
	row = "";

function styleShow(){
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
	if (time === false) {
		choose(lessDay,dataLength);
	}
	else{
		timer(lessDay,dataLength);
	}
}

function show() {
	styleShow();
	int();
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

function timer(lessDay,dataLength){
	var td = document.getElementsByTagName('td');
	for (var i = 0; i < td.length; i++) {
		td[i].index = i;
		td[i].addEventListener('click',function(){
			if (j!==-1) {
				td[j].style.border = "1px solid #fff";
			}
			if (number == 0) {
				td[this.index].style.border = "1px solid red";
				number += 1;
				num.push(this.index);}
			else if (number == 1) {
				td[this.index].style.border = "1px solid red";
				number += 1;
				num.push(this.index);
				num.sort(function(a,b){
					return a-b;
				})
				if (num[0]<=(lessDay-1)||num[1]>=(lessDay+dataLength)) {
					alert('请选择本月内的时间！');
					for (var z = num[0]; z <= num[1]; z++) {
						td[z].style.backgroundColor = "#fff";
						td[z].style.borderColor = "#fff";
					}
					number = 0;
					num.length = 0;
				}
				else{
					for (var z = num[0]; z <= num[1]; z++) {
						td[z].style.backgroundColor = "#ccc";
						less = lessDay;
						chooser = true;
					}
				}
			}
			else{
				for (var z = num[0]; z <= num[1]; z++) {
						td[z].style.backgroundColor = "#fff";
						td[z].style.borderColor = "#fff";
					}
				chooser = false;
				number = 1;
				num.length = 0;
				td[this.index].style.border = "1px solid red";
				num.push(this.index);
			}
		})
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
	input.addEventListener('click',function(){
		var or = getStyle(table,"display");
		if (or === "none") {
			table.style.display = "inline-block";
		}  
		else{
			table.style.display = "none";
		}
	})
	button1.addEventListener('click',function(){
		table.innerHTML = resort;
		time = true;
		styleShow();
	})
	button2.addEventListener('click',function(){
		if (chooser == true) {
			input.value = year + "年" + month +"月"+(num[0]+1-less)+"日——"+year + "年" + month +"月"+(num[1])+"日";
			table.style.display = "none";
		}
		else{
			return false;
		}
	})
	button3.addEventListener('click',function(){
		time =false;
		chooser = false;
		table.innerHTML = resort;
		styleShow();
	})
	
}
show(year,month);



