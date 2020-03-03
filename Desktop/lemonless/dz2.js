///////0
let c =3;

switch (c) {
    case 1:
    console.log("some important tasks");
        break;
    case 2:
    console.log("some important tasks");    
        break;
    case 3:
    console.log("some important tasks");   
        break;
    case 4:
    console.log("some important tasks");    
        break;
    case 5:
    console.log("some important tasks");    
        break;
    default:
        break;

}

///////1
var town = 905;
switch (town) {
    case 905:
        console.log("sum for 10 min: "+600*4.15);
        break;
    case 194:
        console.log("sum for 10 min: "+600*1.98);
        break;
    case 491:
        console.log("sum for 10 min: "+600*2.69);
        break;
    case 800:
        console.log("sum for 10 min: "+600*5.00);
        break;

    default:
        break;
}
///////2
let $min =12;
if ($min >= 0 && $min < 15) {
    console.log("первая четверть часа");
} else { if ($min > 15 && $min < 30) {
    console.log("второая четверть часа");
} else {if ($min > 30 && $min < 45) {
    console.log("третья четверть часа");
} else {if ($min > 45 && $min < 60) {
    console.log("четвертая четверть часа");
} else {
    console.log("не та цифра");
}    
}   
}   
}
///////3

let $num = 2;
let $result;
switch ($num) {
    case 1:
    $result = "winter";    
        break;
    case 2:
    $result = "summer";    
        break;
    case 3:
    $result = "spring";    
        break;
    case 4:
    $result = "autumn";
        break;
    default:
        break;
}console.log($result);

/////////4
let height = 23;
let width = 10;
let s = height * width;
console.log(s+" sm");

let heightC = 10;
let dC = 4;
let v = heightC*Math.pow(dC/2, 2)+"pi";
console.log(v+" m");

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(k+" m");

/////////5
let num1=45;
while(num1>=45 && num1<=67){
    console.log(num1++);
}

while(num1>=45 && num1<=670)
{
    num1++;
    if(num1%10==0){
        console.log(num1);
    }
}

for (let num2 = 45; num2>=45 && num2<=67; num2++) {
    console.log(num2++);
    
}

for (let num2 = 45; num2>=45 && num2<=670; num2++) {
    num2++;
    if(num2%10==0){
        console.log(num2);
    }
}

//////////6
let natNum =5;
var b = 0;
for (let i = 0; i <= natNum; i++) {
    b = b+i;
}console.log(b);

/////////7
let X=prompt("value X:");
let Y=prompt("value Y:");
let operation = prompt("operation:");
switch (operation) {
case '+' :
        var Z = X+Y;
        console.log(Z);
        break;
case '-':
        Z = X-Y;
        console.log(Z);
        break;
case '/':
        Z = X/Y;
        console.log(Z);
        break;
case '*':
        Z = X*Y;
        console.log(Z);
        break;

    default:
        break;
}

/////////8
var nechet =0;
for (let j = 0; j < 255; j++) {
    j++;
    if (j%2 !=0) {
        nechet = k+j;
        k=nechet;
    }
}console.log(nechet);

/////////9
for (let h = 0; h <= 10; h++) {
    var f =h*3;
    console.log(f);    
}

///////10
let chislo = prompt("chislo:");
if(chislo>0){
    let summ = 0;
    for (let i = 1; i<=chislo; i++){
        summ = summ+i;
    }console.log(summ);
}else{
    console.log("error")
}

////////11
for(let i = 0;i<3;i++){
    let val = prompt("answer");
    switch(val){
        case "троллейбус":
            console.log("Right!");
            break;
        case "Сдаюсь","сдаюсь":
        console.log("правиьный ответ:троллейбус");
        break;
        default:
            console.log("Подумай ещё")
            continue;
    }
}

/////////12
let val1=+prompt("Начало диапазона:");
let val2=+prompt("Конец диапазона:");
let summ=0;
for(let i = val1; i<=val2; i++){
    summ=summ+i;
}console.log(summ);

/////////13
let fak=1
let fakchislo=+prompt("chisloFaktoriala:")
for (let i=1;i<=fakchislo;i++){
    fak=fak*i;
}console.log(fak);

/////////14
let dvavDesyatoy = 1;
for(let i = 1; i<=10;i++){
    dvavDesyatoy =dvavDesyatoy*2;
}console.log(dvavDesyatoy);