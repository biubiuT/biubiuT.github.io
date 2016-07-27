var button = document.getElementById('button');
var length = 0;

function judge(length){
	var inputBox = document.getElementById('input'),
	    input = inputBox.value.trim(),
	    p = document.getElementById('p');
	if (input == "") {
		inputBox.style.borderColor = "red";
		p.innerHTML = "姓名不能为空！";
		p.style.color = "red";
	}
	else if (length < 4 || length > 16) {
		inputBox.style.borderColor = "red";
		p.innerHTML = "请输入的字符位数在4-16内！";
		p.style.color = "red";
	}
	else{
		inputBox.style.borderColor = "green";
		p.innerHTML = "名称格式正确！";
		p.style.color = "green";
	}
}

function test(){
	length = 0;
	var input = document.getElementById('input').value.trim();
	for (var i = 0; i < input.length; i++) {
		var data = input.charCodeAt(i);
		if (data >= 0 && data <= 128) {
			length += 1;
		}
		else{
			length += 2;
		}
	}
	return length;
}

function int(){
	button.addEventListener('click',function(){
		test();
		judge(length);
	})
}
int();