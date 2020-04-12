/*function showAlert(event){  
       console.log(event);
    }

elem.onclick = function () {
    alert ('h1');
}
elem.addEventListener('click', showAlert);
elem.addEventListener('click', function(){
    alert('See you soon');
});
//elem.removeEventListener('click', showAlert);
//let form = document.querySelector('form');
//et div = document.querySelector('div');
//let p = document.querySelector('p');
//function showAlert(){  
//    alert('hello');
// }
//div.addEventListener('click', showAlert());
//div.removeEventListener('click', showAlert());
//p.addEventListener('click', showAlert());
//p.removeEventListener('click', showAlert());

function DELEGATE(event) {
    let str = event.target.tagName;
    str.toLowerCase;
    switch (str) {
        case 'form':
            alert('form');
            break;
            case 'div':
            alert('div');
            break;
            case 'p':
            alert('p');
            break;
    
        default:
            break;
    }
}
//form.addEventListener('click', DELEGATE);
//alert('HELLO');
/*let button = document.querySelector('button');
let div = document.querySelector('div');
button.onclick = function (event) {
    div.style.display='none';
    let date = new Date();
    alert(date);
}
let sq = () => alert ("ARROW FUNC EEEEEEEEEEEEEEEEEEEEE");
sq();
let arr = ['1','45','17', '84', '32','56'];
let res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2 == 0)
    .reduce((max, value) => Math.max(max, value), 0);
    console.log(res);
    let greeter = {
        greet: function (name){
            console.log('hello', name);
        },
        greetAll: function (names){
            names.forEach((name) => {
                this.greet(name);
            });
        }
    };
    greeter.greetAll(['Nina', 'Max', 'Bob']);

let arr = [15, 4 , 54,74, 12, 13];

let arrMeth = {
    push(arr) {
        return arr.push();
    },
    reverse(arr) {
    return arr.reverse();
    },
    shift (arr) {
        return arr.shift();
    }
}
console.log(arrMeth.reverse(arr));

class Text {
    constructor(p){
        this.p = p;
        console.log(this.p);
    }
    changeColor(p){
    this.p.style.color = 'blue';
    console.log(this.p);
    }
}
let p = document.querySelector('p');
let text = new Text(p).changeColor();

class Animal {
    voice () {
        console.log('arrrrr');
    }
}
class Dog extends Animal {
    getName (name){
        this.name = name;
        console.log(this.name);
        return this;
    }
}
class Spaniel extends Dog {
    cutHvost(ans){
        if (ans == true) {
            console.log('cut')
        }else{
            console.log('nope');
        }
    }
}
let haski = new Dog();
haski.getName('Bobs');
localStorage.setItem('volume', 75);

if(localStorage.getItem('volume') > 45){
    alert('you are not quite');
}

localStorage.removeItem('volume');
console.log(localStorage.getItem('volume'));
sessionStorage.setItem('Name', 'Alex');
sessionStorage.setItem('surname', 'Berezov');
sessionStorage.setItem('age', 18);
if (sessionStorage.getItem('age') >= 18) {
    console.log(sessionStorage.getItem('Name')+sessionStorage.getItem('surname')+' good man');
}
document.cookie = "new_cookie=1000";
let obj = {
    name : "Kate",
    age : 19
};
console.log(obj);
console.log(JSON.stringify(obj));
console.log(JSON.parse('{"name":"Kate","age":19}'));
$.get( "https://jsonplaceholder.typicode.com/todos", function( data ) {
    console.log(data);
    for(const key in data){
        if (data.hasOwnProperty(key)) {
            let post = data[key];
            console.log(post.title);
        }
    }
  })
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();
xhr.onload = function(){
    if (xhr.status != 200) {
        alert('Mistace $(xhr.status): $(xhr.statuText)')
    }
}

function loadDoc(callback) {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(JSON.parse(xhttp.responseText));
      }
    };

  }
  function getPost(param) {
      console.log(param[0].title);
      loadDoc(getTodo);
  }
  loadDoc(getPost);
  console.log('First');
  setTimeout(() => {console.log('second');
      
  }, 4000);
  console.log('third');
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(comments => console.log(comments[0].body));*/
// async function showPosts() {
//     let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
//     let posts = await response.json()
//     .then(comments => comments[0].body);
//     console.log(posts);
// }
// showPosts();
// let k = $('h1')
// .empty()
// .text('new')
// .css('color', 'red')
// .on('click', function(){
//     alert('it');
// })
// console.log(k);
//_.collection.fetch({options})

// class Animal {
//     feed(){}
//     voice(){}
//     run(){}
// }

// class Dog extends Animal{
//     beGood(){}
// }

// class Taksa extends Dog {
//     beSmall(){}
// }
// let charlie = new Taksa();
// charlie.loveFood = function (params) {
    
// }

// console.log(charlie.toString);

// function User(name){
//     this.name = name;
// }
// let user = new User('Ivan');

// class User {
//     static voise(){

//     }

//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
// }

class Worker{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    AddWork(){};
    AddLevel(){};
    SetTime(){};
}

class Officer extends Worker{
    setDepartment(){};
}

class Manager extends Officer{
    setNumOfOfficePeople(){};
}
 
class employee extends Manager{
    setEmployaer(){};
}
let marta = new employee('Marta', 'Cook');