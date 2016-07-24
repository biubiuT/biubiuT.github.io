var root_0 = document.getElementById('root_0'),
	root_1 = document.getElementsByClassName('root_1'),
	root_2 = document.getElementsByClassName('root_2'),
	root_3 = document.getElementsByClassName('root_3'),
	forIn = document.getElementById('forIn'),
	search = document.getElementById('search'),
	data = [],
	timer = null,
	i = 0,
	o = 0,
	p = 0,	
	j = 0;

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
				data.length = 0;
			}
	},500)
}

function int(){
	forIn.addEventListener('click',function(){
		preOrder(root_0);
		changeColor(i);
	})
	search.addEventListener('click',function(){
		preOrder(root_0);
		if (p!==0) {
			data[p].style.backgroundColor = "#fff";
		}
		changeColor(i,0);
	})
}

int();