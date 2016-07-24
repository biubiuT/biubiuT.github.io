var root_0 = document.getElementById('root_0'),
	root_1 = document.getElementsByClassName('root_1'),
	root_2 = document.getElementsByClassName('root_2'),
	root_3 = document.getElementsByClassName('root_3'),
	forIn = document.getElementById('forIn'),
	search = document.getElementById('search'),
	aDelete = document.getElementById('delete'),
	add = document.getElementById('add'),
	data = [],
	timer = null,
	i = 0, 
	o = 0, //判断查询是否有结果
	p = 0,	//查询有结果时被改变样式的下标
	j = 0,	//动画是否在运动的标识符
	num = 0,	//点击获取到的节点下标
	number = 0;	//点击获取到的节点属于父元素的第几子元素

//先序遍历
function preOrder(arr) {
	if (!(arr==null)) {
		data.push(arr);
		for (var z = 0; z < arr.children.length; z++) {
			preOrder(arr.children[z]);
		}
	}
}

//遍历时改变颜色
function changeColor(a,b,c){
	if (a == 0) {
		data[a].style.backgroundColor = "#000";
		var input = document.getElementById("input").value.trim();
		if (input == data[0].firstChild.nodeValue.trim()) {
			data[0].style.backgroundColor = "red";
			changeColor(++a,0,0);
			o = 1;
		}
	}
	timer = setTimeout(function(){
			if (a<(data.length-1)) {
				if (c!=0) 
				{data[a].style.backgroundColor = "#fff";}
				data[a+1].style.backgroundColor = "#000";
				if (b == 0) {
					var input = document.getElementById("input").value.trim();
					if (input == data[a+1].firstChild.nodeValue.trim()) {
						data[a+1].style.backgroundColor = "red";
						o = 1;
						p = a+1;
						changeColor(++a,0,0);
					}
					else{changeColor(++a,0);}
				}
				else{changeColor(++a)};
			}
			else{
				if (b==0&&o==0) {
					alert("没有搜寻到符合内容的结果！");
				}
				data[a].style.backgroundColor = "#fff";
				clearTimeout(timer);
				o=0;
				j=0;
				data.length = 0;
			}
	},500)
}

function stopEventBubble(event){
        var e=event || window.event;

        if (e && e.stopPropagation){
            e.stopPropagation();    
        }
        else{
            e.cancelBubble=true;
        }
    }

//点击改变颜色
function clickChange(){
	preOrder(root_0);
	for (var n = 0; n < data.length; n++) {
		data[n].index = n;
		data[n].addEventListener('click',function(event){
			data[num].style.backgroundColor = "#fff";
			num = event.target.index;
			data[num].style.backgroundColor = "green";
			for (var l = 0; l < data[num].parentNode.children.length; l++) {
				if (data[num].parentNode.children[l].index == num) {
					number = l;
				}
			}
			stopEventBubble(event);
		})
	}
}

//删除节点
function deleteFor(n,m){//n为节点下标，m为节点自身是父元素的第几个子元素
	data[n].parentNode.removeChild(data[n].parentNode.children[m]);
}

//添加节点
function addFor(n){
	var addInput = document.getElementById('addInput').value.trim();
	if (addInput != "") {
	var m = data[n].className.substr(data[n].className.length-1);
	var newnode = document.createElement('span');
	newnode.innerHTML = addInput;
	newnode.className = "root_" + (+m+1);
	data[n].appendChild(newnode);
	data[n].style.backgroundColor = "#fff";
	int();
	}
	else{
		alert('请输入要添加的节点的内容！');
	}
}

function int(){
	forIn.addEventListener('click',function(){
		if (j == 0) {
			data.length = 0;
			preOrder(root_0);
			j = 1;
			changeColor(i);
		}
		else{
			return false;
		}
	})
	search.addEventListener('click',function(){
		if (j == 0) {
			data.length = 0;
			preOrder(root_0);
			if (p!==0) {
				data[p].style.backgroundColor = "#fff";
			}
			var input = document.getElementById('input').value.trim();
			if (input!="") {
				j=1;
				changeColor(i,0);	
			}
			else{
				return false;
			}	
		}
		else{
			return false;
		}
	})
	clickChange();
	aDelete.addEventListener('click',function(){
		deleteFor(num,number);
	})
	
}
add.addEventListener('click',function(){
		addFor(num);
	})
int();