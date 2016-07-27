var root_0 = document.getElementById('root_0'),
	root_1 = document.getElementsByClassName('root_1'),
	root_2 = document.getElementsByClassName('root_2'),
	root_3 = document.getElementsByClassName('root_3'),
	search = document.getElementById('search'),
	aDelete = document.getElementById('delete'),
	add = document.getElementById('add'),
	data = [],
	timer = null,
	i = 0, 
	j = 0,
	o = 0, //判断查询是否有结果
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

//有子元素的元素颜色改变
function hasChild(){
	for (var j = 0; j < data.length; j++) {
		if (data[j].children.length>0) {
			data[j].style.color = "blue";
		}
		else{
			data[j].style.color = "#000";
		}
	}
}

//查询内容
function changeColor(){

	for (var arr = 0; arr < data.length; arr++) {
		var input = document.getElementById("input").value.trim().toLowerCase();
		if (input == data[arr].firstChild.nodeValue.trim().toLowerCase()) {
			data[arr].style.color = "red";
			data[arr].style.display = "block";
			var x = data[arr];
			var brother = data[arr].parentNode.children;
			for (var i = 0; i < brother.length; i++) {
				brother[i].style.display = "block";
			}
			while(x.tagName.toLowerCase() != "body"){
				x.style.display = "block";
				x = x.parentNode;
			}
			o = 1;
		}
	}
		if (o == 0) {
			alert('无搜寻结果！');
		}
	
}

//阻止冒泡
function stopEventBubble(event){
        var e=event || window.event;

        if (e && e.stopPropagation){
            e.stopPropagation();    
        }
        else{
            e.cancelBubble=true;
        }
    }

//获取style属性
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


//点击改变颜色
function clickChange(){
	preOrder(root_0);
	for (var n = 0; n < data.length; n++) {
		data[n].index = n;
		data[n].addEventListener('click',function(event){
			hasChild();
			num = event.target.index;
			data[num].style.color = "green";
			if (data[num].children.length>0) {
				for (var v = 0; v < data[num].children.length; v++) {
					var styleDisplay = getStyle(data[num].children[v],"display"); 
					if (styleDisplay == "block") {
						j = 1;
					}
					else{
						j = 0;
					}
				}
					for (var i = 0; i < data[num].children.length; i++) {
						if (j == 1) {
							data[num].children[i].style.display = "none";
						}
						else{
							data[num].children[i].style.display = "block";
						}
				}
			}
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
	var mgnLeft = parseInt(getStyle(data[n],"margin-left"));
	newnode.style.marginLeft =  mgnLeft + 5 + "px";
	newnode.style.display = "block";
	data[n].appendChild(newnode);
	data[n].style.backgroundColor = "#fff";
	int();
	}
	else{
		alert('请输入要添加的节点的内容！');
	}
}

function int(){
	search.addEventListener('click',function(){
		var input = document.getElementById('input').value.trim();
		if (input!="") {
			changeColor();	
		}
		else{
			return false;
		}	
	})
	clickChange();
	aDelete.addEventListener('click',function(){
		deleteFor(num,number);
	})
	hasChild();
}
add.addEventListener('click',function(){
		addFor(num);
	})
int();