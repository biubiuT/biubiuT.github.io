var root_0 = document.getElementById('root_0'),
	root_1 = document.getElementsByClassName('root_1'),
	root_2 = document.getElementsByClassName('root_2'),
	root_3 = document.getElementsByClassName('root_3'),
	preBtn = document.getElementsByTagName('button')[0],
	inBtn = document.getElementsByTagName('button')[1],
	postBtn = document.getElementsByTagName('button')[2],
	data = [],
	timer = null,
	i = 0,
	j = 0;

//先序遍历
function preOrder(arr){
	if (!(arr==null)) {
		data.push(arr);
		preOrder(arr.children[0]);
		preOrder(arr.children[1]);
	}
}

//中序遍历
function inOrder(arr){
	if (!(arr==null)) {
		inOrder(arr.children[0]);
		data.push(arr);
		inOrder(arr.children[1]);
	}
}

//后序遍历
function postOrder(arr){
	if (!(arr==null)) {
		postOrder(arr.children[0]);
		postOrder(arr.children[1]);
		data.push(arr);
	}
}

//颜色改变函数
function changeColor(a){
	if(a==0){
		data[a].style.backgroundColor = "#000";
	}
	timer = setTimeout(function(){
		if (a<(data.length-1)) {
			data[a].style.backgroundColor = "#fff";
			data[a+1].style.backgroundColor = "#000";
			changeColor(++a);
		}
		else{
			clearTimeout(timer);
			data[data.length-1].style.backgroundColor = "#fff";
			data.length = 0;
			j=0;//说明动画处于未动状态
		}
	},500)
}

//给按钮绑定函数
function int(){
	preBtn.addEventListener('click',function(){
		if (j==0) {//判断动画是否正在进行，若正在进行，则取消该动作
			preOrder(root_0);
			j=1;
			changeColor(i);
		}
		else{
			return false;
		}
	})
	inBtn.addEventListener('click',function(){
		if (j==0) {
			inOrder(root_0);
			j=1;
			changeColor(i);
		}
		else{
			return false;
		}
	})
	postBtn.addEventListener('click',function(){
		if (j==0) {
			postOrder(root_0);
			j=1;
			changeColor(i);
		}
		else{
			return false;
		}
	})
}
//调用函数
int();