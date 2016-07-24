	var tagList = document.getElementById('tagList');//获取tag显示ul
	var sbm = document.getElementById('sbm');//获取爱好确认按钮
	var likeList = document.getElementById('likeList');//获取爱好显示ul
	var tagData = [];
	var likeData = []
//tag添加事件
function tagAdd(code){
	var tag = document.getElementById('tagInput');
	var tagInput = tag.value.trim();
	if (code == 188) {
		tagInput = tagInput.substr(0,(tagInput.length-1));
	}
	if (tagInput==""||tagInput==","){
		tag.value="";
	} 
	else{
		for (var i = 0; i < tagData.length; i++) {
			if(tagInput == tagData[i]){
				tag.value="";
				return false;
			}
		}
		tagData.push(tagInput);
		if (tagData.length>10) {
			tagData.splice(0,(tagData.length-10));
		}
		data(tagList,tagData);
		clickIn(tagList,tagData);
		over();	
	}
}

//按下空格、回车、逗号时触发tagAdd事件
function autoAdd(event){
	if (event.keyCode==13||event.keyCode==32||event.keyCode==188) {
		var code = event.keyCode;
		tagAdd(code);
	}
}

//鼠标悬停函数
function over(){
	var tagLi = tagList.getElementsByTagName('li');
	for (var i = 0; i < tagLi.length; i++) {
		tagLi[i].index = i;
		tagLi[i].addEventListener('mouseover',function(event){
			event.target.innerHTML = "点击删除" + event.target.innerHTML;
			event.target.style.backgroundColor = "red";
		})
		tagLi[i].addEventListener('mouseout',function(event){
			event.target.innerHTML = event.target.innerHTML.substr(4);
			event.target.style.backgroundColor = "orange";
		})
	}
}

//爱好框点击添加爱好
function likeAdd(){
	var input = document.getElementById('input').value.trim();
	var okData = input.split(/[^0-9a-zA-Z\u4e00-\u9fa5]/).filter(function(e) {
        if (e != null && e.length > 0) {
            return true;
        } else {
            return false;
        }
    });
    for (var i = 0; i < likeData.length; i++) {
    	for (var j = 0; j < okData.length; j++) {
    		if(likeData[i] == okData[j]){
    			okData.splice(j,1);//判断分解后的新数组是否存在元素与已有元素重合，有则删去
    		}
    	}
    }
	likeData = likeData.concat(okData);
	if (likeData.length>10) {
		likeData.splice(0,(likeData.length-10));//保持队列最多只有10个
	}
	data(likeList,likeData);
	clickIn(likeList,likeData)
}

//渲染数组
function data(list,arr){
	list.innerHTML = "";
	for(var i = 0; i<arr.length; i++){
			list.innerHTML += "<li>" + arr[i] + "</li>";
	}
	var tag = document.getElementById('tagInput');
	tag.value="";
}

//绑定点击删除事件
function clickIn(list,arr){
	var aLi=list.getElementsByTagName("li");
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].addEventListener("click",function(){
			alert(arr[this.index]);
			arr.splice(this.index,1);
			data(list,arr);
			clickIn(list,arr);
		},false);
	}
}


function int(){
	sbm.addEventListener('click',likeAdd);
	document.onkeyup = autoAdd;
}
int();