var table = document.getElementsByTagName('tbody')[0],
	arr,
	span1,span2,span3,span4,span5,span6,span7,span8,
	data = [
			["小明",80,90,70,240],
			["小红",90,60,90,240],
			["小亮",60,100,70,230],
			["小韬",90,100,85,275],
			["小艾",85,90,85,260]
			];
function render(){
	table.innerHTML = "<tr><th>姓名</th><th>语文<span class='top'></span><span class='bot'></span></th><th>数学<span class='top'></span><span class='bot'></span></th><th>英语<span class='top'></span><span class='bot'></span></th><th>总分<span class='top'></span><span class='bot'></span></th></tr>";
	for (var i = 0; i < data.length; i++) {
		arr = "";
		for (var j = 0; j < data[i].length; j++) {
			arr += "<td>" + data[i][j] + "</td>";
		}
		table.innerHTML += "<tr>" + arr + "</tr>";
	}
	span1 = document.getElementsByTagName('span')[0],
	span2 = document.getElementsByTagName('span')[1],
	span3 = document.getElementsByTagName('span')[2],
	span4 = document.getElementsByTagName('span')[3],
	span5 = document.getElementsByTagName('span')[4],
	span6 = document.getElementsByTagName('span')[5],
	span7 = document.getElementsByTagName('span')[6],
	span8 = document.getElementsByTagName('span')[7];
	int();
}

function dataSortTop(n){
	data.sort(function(a,b){
		return a[n] - b[n];
	})
}

function dataSortBot(m){
	data.sort(function(a,b){
		return b[m] - a[m];
	})
}

function int(){
	span1.addEventListener('click',function(){
		dataSortTop(1);
		render();
	});
	span2.addEventListener('click',function(){
		dataSortBot(1);
		render();
	});
	span3.addEventListener('click',function(){
		dataSortTop(2);
		render();
	});
	span4.addEventListener('click',function(){
		dataSortBot(2);
		render();
	});
	span5.addEventListener('click',function(){
		dataSortTop(3);
		render();
	});
	span6.addEventListener('click',function(){
		dataSortBot(3);
		render();
	});
	span7.addEventListener('click',function(){
		dataSortTop(4);
		render();
	});
	span8.addEventListener('click',function(){
		dataSortBot(4);
		render();
	});
}
render();
int();
