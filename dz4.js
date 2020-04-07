let arr = [2,45,84,71,3,93,45,false,56,3,5,10, 0];
let arr1 = [45,12,14,78,4,6,90,560,28,2];
///////////////////////////////////
function copyArr(array) {
    let temp = [];
    temp.length=array.length;
    for ( let i = 0; i < array.length; i++) {
       temp[i] = array[i];        
    }return temp;
}
console.log(copyArr(arr)); 
//////////////////////////////////////
function convertToString(array){
    let temp="";
    for (let i = 0; i < array.length; i++) {
       Number.toString(array[i]);
       temp = temp+array[i]+ ",";
    }return temp;
}
console.log(convertToString(arr));
//////////////////////////////////
function allX(array){
    for (let i = 0; i < array.length; i++) {
        array[i] = 'x';
    }return array;
}
//console.log(allX(arr));
//////////////////////////////////////
function fromOneToSome(array){
for (let i = 0; i < array.length; i++) {
    array[i]=i+1;    
}return array;
}
//console.log(fromOneToSome(arr));    
////////////////////////////////////
function getRandom(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]= Math.random().toFixed(2);

    }return arr;
}
//console.log(getRandom(arr));
////////////////////////////////////
function randomFromOneToTen(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random()*10)+1;
    }return array;
}
//console.log(randomFromOneToTen(arr));
/////////////////////////////////////
function biggerLower(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i]>0 && array[i]<10) {
            console.log(array[i]);
        }
    }
}
biggerLower(arr);
//////////////////////////////////////
function hasFive(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i]%5==0 && array[i]%10!=0 || array[i]%5<1){
            console.log("Has Five!");
            break;
        }else{
            continue;
        }
    }
}
hasFive(arr);
/////////////////////////////////////
function elSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum=sum+array[i];
    }return sum;
}
console.log(elSum(arr));
//////////////////////////////////////
function powTwoElSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum=sum+Math.pow(array[i],2);
    }return sum;
}
console.log(powTwoElSum(arr));
///////////////////////////////////////
function Avg(array) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum=sum+array[i];
    }return sum/array.length;
}
console.log(Avg(arr));
//////////////////////////////////////////
function colonOdd(num) {
    let numLength = num.length;
    num=+num;
    let mass = [];
    for (let i = 0; i < numLength; i++) {
           mass[i] = (num%Math.pow(10,i+1)-num%Math.pow(10,i))/Math.pow(10,i);
    }
    mass=mass.reverse();
    let doubleCheck;
    for (let i = 0; i <= numLength; i++) {
        if(mass[i]%2 == 0){
            doubleCheck = false;
        }else{
            doubleCheck = true;
        }
    }
    let str = "";
    for(let i=0;i < mass.length;i++){
    if( mass[i]%2 == 1 && doubleCheck == false) {
    str += ":" ;
     doubleCheck =false;
    }
    str += mass[i];
    if(mass[i]%2 === 1)
    doubleCheck = !doubleCheck;
    } 
    return str;
}
//let num = prompt("Number:");
//console.log(colonOdd(num));
/////////////////////////////////////////////////
function getFirst(array, n) {
    array = array.slice(0,n);
    return array;
}
console.log(getFirst(arr,3));
/////////////////////////////////////////////////
function sumArray(array,array1) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        sum1 += array[i];
    }
    for (let i = 0; i < array1.length; i++) {
        sum2 += array1[i];
    }
    let arrSum = [sum1,sum2];
    return arrSum;
}
console.log(sumArray(arr,arr1));
/////////////////////////////////////////////////
function union(mass,mass1) {
   mass = mass.concat(mass1);
    return Array.from(new Set(mass));
  }
  console.log(union(arr, arr1));
 //////////////////////////////////////////////
 function filter(mass1, mass2) {
     let a =0;
     let indexMass =[];
     for (let i = 0; i < mass2.length; i++) {
         a = mass2[i];
         for (let j = 0; j < mass1.length; j++) {
            if(mass1[j] == a){
                indexMass.push(j);
            }
     }
    }console.log(indexMass);
    for (let i = 0; i < indexMass.length; i++) {
        for (let j = 0; j < mass1.length; j++) {
            if(indexMass[i] === j){
            mass1.splice(j,1);
            }
        }
    }return mass1;
}
console.log(filter(arr, arr1));
/////////////////////////////////////////////////
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
           if(array[j+1]<array[j]){
               let temp = arr[j];
               array[j]=array[j+1];
               array[j+1]=temp;
           }
            
        }
        
    }return arr;
}
console.log(bubbleSort(arr));
/////////////////////////////////////////////////////
function sumOfSquares(array){
    let sum =0;
    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 2);
    }return sum;
}
console.log(sumOfSquares(arr));
///////////////////////////////////////////
function sumAndProduct(array){
    let sum = 0;
    let pro = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        pro = pro*array[i];
    }console.log(pro);
    console.log(sum);
}
console.log(sumAndProduct(arr));
///////////////////////////////////////////
function filterFalse(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false ||array[i] == null||array[i] ==undefined||array[i] ==0||array[i] == -0||array[i] ==NaN ||array[i] ==" ") {
            array.splice(i,1);
        }
    }return array;
}
console.log(filterFalse(arr));
//////////////////////////////////////////////
function moveElement(array,from,to) {
    let motion;
    for (let i = 0; i < array.length; i++) {
        if (i == from) {
            motion = array.splice(i,1);
        }
        if (i == to) {
            array.splice(i-1, 1, +motion);
        }
    }return array;
}
console.log(moveElement(arr,3,5));
///////////////////////////////////////////////
function generateNumbers(start, len) {
    let array =[start];
    array.length = len;
    for (let i = 1; i < len; i++) {
    array[i] = array[i-1]+1;
    }return array;    
}
console.log(generateNumbers(3,6));
//////////////////////////////////////////////
let mas = ['a','b','c'];
mas.push(1,2,3);
console.log(mas);
let mas1 = [1,2,3];
mas1.reverse();
console.log(mas1);
let mas2 = [1,2,3];
mas2.unshift(4,5,6);
console.log(mas2);
let mas3 = ['js','css','jq'];
console.log(mas3[2]);
let mas4 = [1,2,3,4,5];
let el = mas4.slice(3,5);
console.log(el);
let mas5 = [1,2,3,4,5];
mas5.splice(1,2);
console.log(mas5);
let mas6 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(mas6[1][0]);
let obj ={
    js:['jQuery', 'Angular'],
    php: 'hello', 
    css: 'world'
}
console.log(obj.js[0]);
let mas7 = ['a', 'b', 'c','d'];
alert(mas7);
alert(mas7[0]);
alert(mas7[1]);
alert(mas7[2]);
+mas7;
console.log(mas7[0]+'+'+mas7[1]+','+mas7[2]+'+'
+mas7[3]);
let mas8 =[2,5,3,9];
let result = mas8[0]*mas8[1]+mas8[2]*mas8[3]
console.log(result);
