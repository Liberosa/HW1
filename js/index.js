//задача 1
const clicks = { button1: 0, button2: 0, button3: 0 }
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
function clickHandler(event) {
    clicks[event.target.id] += 1
    event.target.innerText = clicks[event.target.id]
}
button1.addEventListener('click', clickHandler)
button2.addEventListener('click', clickHandler)
button3.addEventListener('click', clickHandler)



//задача 2
const colorArr = ["blue", "yellow", "red", "green"];
const paragraphColors = { p1: 0, p2: 0, p3: 0 }
function changeColor(ev) {
    debugger;
    ev.currentTarget.style.color = colorArr[paragraphColors[ev.currentTarget.id]]
    if (paragraphColors[ev.currentTarget.id] === colorArr.length - 1) {
        paragraphColors[ev.currentTarget.id] = 0
    } else {
        paragraphColors[ev.currentTarget.id] += 1

    }
}
    document.getElementById('p1').addEventListener('click', changeColor);
    document.getElementById('p2').addEventListener('click', changeColor);
    document.getElementById('p3').addEventListener('click', changeColor);
    

    //задача 3
    const randomArr = []

    function populateRandom() {
        while (true) {
            const randomNumber = Math.ceil(Math.random() * 100)
            if (!randomArr.includes(randomNumber)) {
                randomArr.push(randomNumber)
                console.log(randomArr)
                return
            }
        }
    }
    populateRandom();
    //задача 4
    let multiply = [2, 3, 4, 5];
    let result = multiply.reduce(function (prev, curr) { return prev * curr });
    console.log(result);

    // задача 5
    let summ = [1, 2, 3, 4, 5];
    let result1 = summ.reduce(function (prev, curr) { return prev + curr });
    console.log(result1);

    //задача 6
    let arr = [10, 20, 30, 50, 235, 3000];
    arr.forEach((item) => {
        if (item.toString().startsWith('1') || item.toString().startsWith('3') || item.toString().startsWith('5')) {
            console.log(item);
        }
    });

    //задача 7
    let array = [4, 2, 5, 19, 13, 0, 10];
    let res1;
    function calc() {
        let summ = 0;
        let pow;
        for (let i of array) {
            pow = Math.pow(i, 3);
            summ += pow;
        }
        res1 = Math.sqrt(summ);
        console.log("Корень суммы кубов " + summ, res1, array);
    }
    calc();



    //задача 8,задача 9
    let a = 10;
    let b = 3;
    let res = a % b;
    console.log(res);
    if (res === 0) {
        console.log("Делится" + a / b)
    } else {
        console.log("Делится" + " " + res)
    }







