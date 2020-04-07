//let elem = document.getElementById('elem');
/*elem.classList.add('www');
elem.classList.remove('www');

elem.classList.contains('www');

elem.classList.add('www');

elem.classList.length;

alert(elem.classList);

elem.style.color = 'red';
elem.style.width = '30px';
elem.style.border = "thin dotted red";
elem.onclick = function(){
    alert(elem.tagName);
    alert(elem.tagName.toLowerCase());
};
if(elem.className == 'www'){
    elem.innerHTML += elem.tagName.toLowerCase();
}
let olParent = document.querySelector('ol');
let olChild  = document.createElement('li');
olChild.innerHTML ='пункт';
olParent.appendChild(olChild);*/
//let ulParent = document.querySelector('#parent');
/*let array =[2,45,2,78,46,23];
        for (let i = 0; i < array.length; i++){
            let li  = document.createElement('li');
            li.innerHTML = array[i];
            li.onclick = function(){
                alert(array[i]);
            };
            ulParent.appendChild(li);
}
let li = document.createElement('li');
ulParent.appendChild(li);
li.innerHTML = '!!!';
ulParent.insertBefore(li, child); 
elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');
elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');
elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');
elem.insertAdjacentHTML('afterend', '<span>!!!</span>');
ulParent.firstElementChild.style.color='red';
ulParent.lastElementChild.style.color='red';
let elements = ulParent.children;
for (let element of elements){
    element.innerHTML +='!';
}
////////////////////////////////////////////////////////
let h2 = document.querySelector('h2');
h2.previousElementSibling.innerHTML += '!';
h2.nextElementSibling.innerHTML += '!';
h2.nextElementSibling.nextElementSibling.innerHTML += '!';
////////////////////////////////////////////////////////
li.parentElement.style.color ='red';
li.parentNode.style.color = 'red';
let button = document.querySelector('button');
let parent = document.getElementById('parent');
let child = document.getElementById('child');
let ol = document.querySelector('ol');
button.onclick = function() {
   parent.removeChild(child);
   ol.removeChild(ol.lastElementChild);
}
elem.onclick = function() {
  elem.remove(elem);
}
ol.onclick = function() {
    ol.removeChild(document.querySelector('li'));
}
/////////////////////////////////////////////////////////
let ul = document.createElement('ul');
let body = document.querySelector('body');
body.appendChild(ul);
let array =[2,45,2,78,46,23];
        for (let i = 0; i < array.length; i++){
            let li  = document.createElement('li');
            li.innerHTML = array[i];
            li.onclick = function(){
                alert(array[i]);
            };
            ul.appendChild(li);
}
///////////////////////////////////////////////////////
let plusButton = document.getElementById('plus');
let input = document.querySelector('input');
plusButton.onclick = function(){
    plusButton.insertAdjacentHTML('afterend', '<p><input></input></p>'); 
}
/////////////////////////////////////////////////////////////
let input = document.querySelector('input');
input.onchange = function(){
    let num = this.value;
    let numLength = num.length;
    num=+num;
    let mass = [];
    for (let i = 0; i < numLength; i++) {
           mass[i] = (num%Math.pow(10,i+1)-num%Math.pow(10,i))/Math.pow(10,i);
    }
    mass=mass.reverse();
    let div = document.querySelector('div');
    for (let i = 0; i < mass.length; i++){
        let newInput  = document.createElement('input');
        newInput.setAttribute("value", mass[i]);
        div.appendChild(newInput);
    }
}
////////////////////////////////////////////////////////////
let button = document.querySelector('button');
button.onclick = function(){
    button.parentElement.style.display = 'none';
}
////////////////////////////////////////////////////////////
let button = document.querySelector('button');
button.onclick = function(){
alert(elem.clientTop);
alert(elem.clientLeft);
alert(elem.offsetWidth);
alert(elem.offsetHeight);
alert(elem.clientWidth);
alert(elem.clientHeight);
}
/////////////////////////////////////////////////////////////
let elemStyle = getComputedStyle(elem);
alert(elemStyle.width);
/////////////////////////////////////////////////////////////
let button = document.getElementById('touchMe');
let scrollTopElem = document.getElementById('scrollerTop');
let scrollSideElem = document.getElementById('scrollerSide')
button.onclick = function(){
    alert(scrollTopElem.scrollTop);
    alert(scrollSideElem.scrollLeft);
    //scrollTopElem.scrollTop = 100 ;
    //scrollTopElem.scrollTop += 100 ;
    alert(scrollTopElem.scrollHeight);
    alert(scrollSideElem.scrollWidth);
    let heightScrollElem = scrollTopElem.scrollHeight - 100;
    scrollTopElem.scrollTop =  heightScrollElem;
    alert(pageXOffset);
    alert(pageYOffset);
    //window.scrollTo(300,500);
    window.scrollBy(0, 300);
}
////////////////////////////////////////////////////////////////
let button = document.getElementById('touchMe');
let a = document.querySelector('body').scrollHeight;
button.onclick   = function(){
    window.scrollTo(0, a);
}
///////////////////////////////////////////////////////////////
let button = document.getElementById('touchMe');
button.onclick = function(){
    window.scrollTo(0, 400);
}
///////////////////////////////////////////////////////////////
let button = document.getElementById('touchMe');
button.onclick = function(){
    //let body = document.querySelector('body');
    if(body.scrollHeight - body.scrollTop == body.clientHeight){
        window.scrollTo(0, 100);
    }
}
////////////////////////////////////////////////////////////////
let button = document.getElementById('touchMe');
button.onclick = function(){
    //let body = document.querySelector('body');
    if(window.pageYOffset == 0){
    alert("Y-scroll is not present");
    }else{
        alert("Y-scroll is present");
    }
    alert(body.scrollHeight);
}
/////////////////////////////////////////////////////////////////
let button = document.getElementById('touchMe');
button.onclick = function(){
    window.scrollTo(0, window.innerHeight)
}
/////////////////////////////////////////////////////////////////
let el = document.getElementById('scrollerSide');
let p = document.querySelector('p');
p.textContent = el.textContent;
el.innerText = ' ';
el.appendChild(p);*/
/////////////////////////////////////////////////////////////////
