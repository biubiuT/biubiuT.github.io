var select = document.getElementsByTagName('select'),
	div = document.getElementsByTagName('div'),
	city = select[0],
	bjCampus = select[1],
	cqCampus = select[2],
	shCampus = select[3],
	bjCity = city.getElementsByTagName('option')[0],
	cqCity = city.getElementsByTagName('option')[1],
	shCity = city.getElementsByTagName('option')[2];

function inOut() {
	for (var j = 0; j < div.length; j++) {
		div[j].style.display = "none";
	}
	var radio = document.getElementsByClassName('radio'),
		index = 0;
	for (var i = 0; i < radio.length; i++) {
		if(radio[i].checked){
			index = i;
		}
	}
	div[index].style.display = "block";
}

function clickChange(){
	var radio = document.getElementsByClassName('radio');
	for (var i = 0; i < radio.length; i++) {
		radio[i].addEventListener('click',function(){
			inOut();
		})
	}
}

function campus(){
	for (var i = 1; i < select.length; i++) {
		select[i].style.display = "none";
	}
	var index = city.selectedIndex;
	select[index+1].style.display = "block";
}
function int(){
	inOut();

	city.addEventListener('change',function(){
		campus();
	});
	campus();
	clickChange();

}
int();
