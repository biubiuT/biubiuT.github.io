var date = new Date(),
	table = document.getElementsByTagName('table')[0],
	resort = table.innerHTML,
	left,right,
	j=-1,//被点击的index
	year = date.getFullYear(),//年
	month = date.getMonth() + 1,//月
	day = date.getDay(),//日
	input1 = document.getElementsByTagName('input')[0],
	input2 = document.getElementsByTagName('input')[1],
	input3 = document.getElementsByTagName('input')[2],
	button = document.getElementsByTagName('button')[0],
	row = "";


function show(year,month,arr) {
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
	choose(lessDay,year,month,arr);
}

function choose(lessDay,year,month,arr){
	var td = document.getElementsByTagName('td');
	for (var i = 0; i < td.length; i++) {
		td[i].index = i;
		td[i].addEventListener('click',function(){
			if (j!==-1) {
				td[j].style.border = "1px solid #fff";
			}
			td[this.index].style.border = "1px solid green";
			j = this.index;
		})
	}
	if ((date.getMonth()+1)===month&&date.getFullYear()===year) {
		td[lessDay+day-1].style.backgroundColor = "orange";}
	else if (arr) {
		td[lessDay+arr-1].style.backgroundColor = "orange"
	}	
}

function getdate(){
	table.innerHTML = resort;
	year = +input1.value.trim();
	month = +input2.value.trim();
	day = +input3.value.trim();
	show(year,month,day);
}

function int(){
	left.addEventListener('click',function(){
		table.innerHTML = resort;
		month -= 1;
		if (month<1) {
			year -= 1;
			month = 12;
		}
		show(year,month);
	})
	right.addEventListener('click',function(){
		table.innerHTML = resort;
		month += 1;
		if (month>12) {
			year += 1;
			month = 1;
		}
		show(year,month);
	})	
	button.addEventListener('click',function(){
		getdate();
	})
}
show(year,month);



