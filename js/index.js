//задача 3,пытался сделать через вложенную функцию,но что-то не вышло
let randomInt = [];
function random(){
    
    let mathRandom = Math.ceil(Math.random() * 100);
    if (randomInt.includes(mathRandom)) {
        mathRandom = Math.ceil(Math.random() * 100);
    } else {
        randomInt.push(mathRandom)
    }

    console.log("Случайное число: " + mathRandom,randomInt);
}
random();

//задача 4
let multiply = [2,3,4,5];
let result = multiply.reduce(function(prev, curr) 
{ return prev * curr });
console.log(result);

// задача 5
let summ = [1,2,3,4,5];
let result1 = summ.reduce(function(prev, curr) 
{ return prev + curr });
console.log(result1);

//задача 6
let arr = [10, 20, 30, 50, 235, 3000];
arr.forEach((item) => {
    if (item.toString().startsWith('1') || item.toString().startsWith('3') || item.toString().startsWith('5'))
    {
        console.log(item);
    }
});

//задача 7
let array = [4, 2, 5, 19, 13, 0, 10];
let res1;
function calc(){
    let summ;
    let pow
    for (let i of array) {
        pow = Math.pow(i, 3);
        summ += pow;   
    }
 res1 = Math.sqrt(summ);
 console.log("Корень суммы кубов " + summ,res1,array);//почему-то выдвёт Nan когда пытаюсь найти сумму.так и не понял почему.
} 
calc();

   

//задача 8,задача 9
let a = 10;
let b = 3;
let res = a%b;
console.log(res);
if (res===0) {
    console.log("Делится" + a/b)
} else {
    console.log("Делится" + " " + res)
}







