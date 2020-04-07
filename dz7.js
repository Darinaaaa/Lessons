// window.addEventListener('mousemove', mouseMotion);
// function mouseMotion(event) {
// 	document.getElementById('coordinations').innerHTML = 'X:'+event.clientX+' Y:'+event.clientY;
// }
// ////////////////////////////////////////////////////////////////////////////
// window.addEventListener('click', mouseClick);
// function mouseClick(event) {
// 	let box = document.getElementById('coordinations');
// 	box.style.left = event.clientX+'px';
// 	box.style.top = event.clientY+'px';
// }
// ///////////////////////////////////////////////////////////////////////////
// window.addEventListener('click', mouseClick);
// function mouseClick(event) {
// 	let box = document.getElementById('coordinations');
// 	box.style.left = event.clientX-50+'px';
// 	box.style.top = event.clientY-50+'px';
// }
// //////////////////////////////////////////////////////////////////
// let input = document.querySelector('input');
// let res = document.querySelector('div');

// input.onkeypress = codeOfTheKey;
// function codeOfTheKey(event) {
// 	let code = event.keyCode;
// 	res.innerHTML = 'Code:'+ code;
// }
// //////////////////////////////////////////////////////////////////////
// let input = document.querySelector('input');
// let res = document.querySelector('div');

// input.onkeypress = keyPress;
// function keyPress(event) {
// 	let key = String.fromCharCode(event.keyCode);
// 	res.innerHTML = 'key:'+ key;
// }
// /////////////////////////////////////////////////////////////////////////
// let div = document.querySelector('div');
// div.onclick = function(event){
// 	if(event.ctrlKey){
// 		div.style.backgroundColor = 'red';
// 	}
// }
// /////////////////////////////////////////////////////////////////////////
// let div = document.querySelector('div');
// div.onclick = function(event){
// 	if(event.ctrlKey){
// 		div.innerHTML = '1';
// 	}
// 	if(event.altKey){
// 		div.innerHTML = '2';
// 	}
// 	if(event.shiftKey){
// 		div.innerHTML = '3';
// 	}
// }
// //////////////////////////////////////////////////////////////////////////
// let input = document.querySelector('input');
// let div = document.querySelector('div');
// input.onkeypress = textFunc;
// function textFunc(event) {
// 	let code = +event.keyCode;
// 	console.log(code);
// 	if(code == 13){
// 		let p = document.createElement('p');
// 		div.appendChild(p);
// 		p.innerHTML = input.value;
// 		input.value = null;
// 	}
// }
// /////////////////////////////////////////////////////////////////////////
// let li = document.querySelectorAll('#ul li');
// let btn = document.querySelector('button');

// for (let i = 0; i < li.length; i++) {
// 	li[i].addEventListener('click', addAlarm);
// }
// function addAlarm() {
// 	this.innerHTML += '!';
// }
// btn.onclick = function () {
// 	let li = document.createElement('li');
// 	ul.appendChild(li);
// 	li.addEventListener('click', addAlarm)
// 	li.innerHTML = 'point';
// }
/////////////////////////////////////////////////////////////////////////////////
// let td = document.querySelectorAll('#userTab tr td');
// let btn = document.querySelector('button');
// let tab = document.querySelector('table');

//  for (let i = 0; i < td.length; i++) {
// 	td[i].addEventListener('click', addTab);
//  }

// function addTab() {
// 	this.textContent = prompt('new text');
// }

// btn.onclick = function(){
// 	let tr = document.createElement('tr');
// 	document.querySelector('tbody').appendChild(tr);
// 	let td1 = document.createElement('td');
// 	tr.appendChild(td1).innerHTML = document.getElementById('name').value;
// 	let td2 = document.createElement('td');
// 	tr.appendChild(td2).innerHTML = document.getElementById('surname').value;
// 	tr.addEventListener('click', addTab);
// }
/////////////////////////////////////////////////////////////////////////////////////////
// let btn = document.querySelector('button');
// btn.onclick = function(){
// 	btn.style.display = 'none';
// }
///////////////////////////////////////////////////////////////////////////
// let btn = document.querySelector('button');
// btn.setAttribute('id','hide');
// btn.onclick = function(){
// 	document.getElementById('hide').style.display = 'none';
// }
/////////////////////////////////////////////////////////////////////////////////////
window.onmousedown = function(){
	alert('no scroll');
	return false;
}
window.onkeydown = function(){
	alert('no scroll');
	return false;
}