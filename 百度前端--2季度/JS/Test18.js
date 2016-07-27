var inputs = document.getElementsByTagName('input'),
    input1 = inputs[0],
    input2 = inputs[1],
    input3 = inputs[2],
    input4 = inputs[3],
    input5 = inputs[4],
    button = inputs[5],
    p = document.getElementsByTagName('p'),
    error = [1,1,1,1,1],
    length = 0;

//姓名验证
function name(length){
	var input = input1.value.trim();
	if (input == "") {
		input1.style.borderColor = "red";
		p[0].innerHTML = "姓名不能为空！";
		p[0].style.color = "red";
		error[0] = "1";
	}
	else if (length < 4 || length > 16) {
		input1.style.borderColor = "red";
		p[0].innerHTML = "请输入的字符位数在4-16内！";
		p[0].style.color = "red";
		error[0] = "1";
	}
	else{
		input1.style.borderColor = "green";
		p[0].innerHTML = "名称格式正确！";
		p[0].style.color = "green";
		error[0] = " ";
	}
}

//密码验证
function password(length){
	var input = input2.value.trim();
	if (input == "") {
		input2.style.borderColor = "red";
		p[1].innerHTML = "密码不能为空！";
		p[1].style.color = "red";
		error[1] = "1";
	}
	else if (length < 4 || length > 16) {
		input2.style.borderColor = "red";
		p[1].innerHTML = "请输入的密码位数在4-16内！";
		p[1].style.color = "red";
		error[1] = "1";
	}
	else{
		input2.style.borderColor = "green";
		p[1].innerHTML = "密码格式正确！";
		p[1].style.color = "green";
		error[1] = " ";
	}
}

//重复输入密码验证
function passwordAgain(length){
	var inputOnce = input2.value.trim(),
		inputAgain = input3.value.trim();
	if (inputAgain == "") {
		input3.style.borderColor = "red";
		p[2].innerHTML = "密码不能为空！";
		p[2].style.color = "red";
		error[2] = "1";
	}

	else if (length < 4 || length > 16) {
		input3.style.borderColor = "red";
		p[2].innerHTML = "请输入的密码位数在4-16内！";
		p[2].style.color = "red";
		error[2] = "1";
	}
	else if (inputOnce != inputAgain){
		input3.style.borderColor = "red";
		p[2].innerHTML = "两次输入的密码请相同！";
		p[2].style.color = "red";
		error[2] = "1";
	}
	else{
		input3.style.borderColor = "green";
		p[2].innerHTML = "密码格式正确！";
		p[2].style.color = "green";
		error[2] = " ";
	}
}

//邮箱验证
function email(){
	var reg =  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
		input = input4.value.trim();
	if (input == "") {
		input4.style.borderColor = "red";
		p[3].innerHTML = "邮箱不能为空！";
		p[3].style.color = "red";
		error[3] = "1";
	}
	else if (reg.test(input)) {
		input4.style.borderColor = "green";
		p[3].innerHTML = "邮箱格式正确！";
		p[3].style.color = "green";
		error[3] = " ";
	}
	else{
		input4.style.borderColor = "red";
		p[3].innerHTML = "请输入正确的邮箱格式！";
		p[3].style.color = "red";
		error[3] = "1";
	}
}

//手机验证
function phone(){
	var reg = /^1[3|4|5|7|8]\d{9}$/,
	    input = input5.value.trim();
	if (input == "") {
		input5.style.borderColor = "red";
		p[4].innerHTML = "手机号码不能为空！";
		p[4].style.color = "red";
		error[4] = "1";
	}
	else if (reg.test(input)) {
		input5.style.borderColor = "green";
		p[4].innerHTML = "手机号码格式正确！";
		p[4].style.color = "green";
		error[4] = " ";
	}
	else{
		input5.style.borderColor = "red";
		p[4].innerHTML = "请输入正确的手机号码！";
		p[4].style.color = "red";
		error[4] = "1";
	}
}

//获取输入的字节长度
function test(arr){
	length = 0;
	var input = arr.value.trim();
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

//最终验证
function final(){
	var arr = error.join("");
	if(arr.trim() == ""){
		alert("输入正确！");
	}
	else{
		alert("验证失败！");
	}
}

function int(){
	input1.addEventListener('blur',function(){
		test(input1);
		name(length);
	})
	input2.addEventListener('blur',function(){
		test(input2);
		password(length);
	})
	input3.addEventListener('blur',function(){
		test(input3);
		passwordAgain(length);
	})
	input4.addEventListener('blur',function(){
		email();
	})
	input5.addEventListener('blur',function(){
		phone();
	})
	button.addEventListener('click',function(){
		final();
	})
}
int();