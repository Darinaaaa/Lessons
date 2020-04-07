let ul = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.querySelector('button');
btn.addEventListener('click', getVal);
let listPoint;

function getVal() {
    listPoint = input.value;
    input.value = null;
    console.log(listPoint);
    if(listPoint != ''){
        let li = document.createElement('li');
        let span = document.createElement('span');
        let button = document.createElement('button');
        li.textContent = listPoint;
        li.appendChild(span);
        li.appendChild(button).innerText = 'Delete';
        ul.appendChild(li);
        button.onclick = function() {
            button.parentNode.parentNode.removeChild(this.parentNode);
        }    
    }
    input.focus();
}

