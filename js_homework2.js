// Задача 1
let grades = ['Відмінно', 'Добре', 'Задовільно', 'Незадовільно']
var readline = require('readline-sync');

let mark = Number(readline.question("What is your mark?"));


if (isNaN(mark)){
    console.log("You've entered not a mark")
}
else if(100>=mark && mark >=90){
    console.log('Your mark is: '+grades[0])
}
else if(89>=mark && mark>=70){
    console.log('Your mark is: '+grades[1])
}
else if (69>=mark && mark>=50){
    console.log('Your mark is: '+grades[2])
}
else if (50>mark && mark >=1){
    console.log('Your mark is: '+grades[3])
}

// Задача 2

let a = 5, b = 10

var actionline = require('readline-sync');

let action = actionline.question("What action you want to do with this numbers?");

switch(action){
    case 'multiply':
        console.log(a*b);
        break;
    case 'divide':
        console.log(a/b);
        break;
    case 'add':
        console.log(a+b)
        break;
    case 'minus':
        console.log(a-b)
        break;
    default:
        console.log('Bad action entered');
}

// Задача 3

var numberline = require('readline-sync');

let number = Number(numberline.question("Enter the number"));

let res = number%2 === 0 ? console.log('Парне') : console.log('Непарне')
