////////1
function sum(a,b) {
    return a+b;
}

function subSq(a,b) {
    return (a-b)*(a+b);
}

function div(a,b) {
    return a*b+a/b;
}

function someMathOperations(a,b,c) {
    return (((a+b)%c)/b)+a;
}
console.log(subSq(3,6));
console.log(someMathOperations(15,8,5));

/////////2

function consoleName(name, surname) {
    console.log(name+" "+surname);
}

function alertName(name, surname) {
    alert(name+" "+surname);
}

function multiName(name, surname) {
    console.log(name+" "+surname);
    alert(name+" "+surname);
}

/////////////3
function oddSum(a) {
    let summ = 0;
    for (let i = 0; i <= a; i++) {
        if(i%2 != 0){
        summ = summ+i;
        }
    }console.log(summ);
}
oddSum(5);

function maxEvNum(a){
    if(a%2 != 0){
        console.log(--a);
    }else{
        console.log(a);
    }
}
maxEvNum(13);

function lastOddNum(a){
    if(a%2 != 0){
        console.log(a);
    }else{
        console.log(--a);
    }
}
lastOddNum(13);

function theBiggestNum(a,b,c){
    if(a>b && a>c){
        console.log("max value: "+a);
    }else{ if(b>a && b>c){
        console.log("max value: "+b);
        }else{
            console.log("max value: "+c);
        }
    }
}
theBiggestNum(10,10,15);

function minOfFive(a,b,c,d,e) {
    if(a<b && a<c && a<d && a<e){
        console.log("min value: "+a);
        }else{ if(b<a && b<c && b<d && b<e){
        console.log("min value: "+b);
        }else{ if(c<b && c<d && c<a && c<e){
            console.log("min value: "+c);
        }else{ if(d<b && d<b && d<a && d<e){
            console.log("min value: "+d);
        }else{ if(e<b && e<d && e<a && e<b){
            console.log("min value: "+e);
    }   
}}}}}minOfFive(5,7,5,9,3);

function typeOfParam(a) {
    console.log("the type of this param is "+typeof(a));
}
typeOfParam(true);

function numOfDay(a) {
    if (a == 1) {
        alert("Today is Monday");
    }
    if (a == 2) {
        alert("Today is Tuesday");
    }
    if (a == 3) {
        alert("Today is Wednesday");
    }
    if (a == 4) {
        alert("Today is Thursday");
    }
    if (a == 5) {
        alert("Today is Friday");
    }
    if (a == 6) {
        alert("Today is Saturday");
    }
    if (a == 7) {
        alert("Today is git Sunday");
    }
}numOfDay(5);
