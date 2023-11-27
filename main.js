/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

// Output to the console
// console.log("Hello from Igor");

/* let userName = "Summeray";
console.log(userName); */

// let time = 14;

/* if (time < 12) {
    console.log("Good morning!")
} else if ( time > 12 && time < 18){
    console.log("Good afternoon!")
}else{
    console.log("Good evening!")
} */
// Ternary operator
// let result = time < 12 ? "Good morning" : time > 12 && time < 18 ? 
// "Good afternoon" : "Good evening!";

// console.log(result)

// let userName = "Test";

// console.log(`Hello ${userName}! It is nice to see you!`);


//Function declaration
function greetUser(name) {
    console.log(`Hello ${name}! I am happy to see you here!`)
}
greetUser("Igor");



// // Function expression
// let sayBye = function (name) {
//     console.log(`Bye bye ${name}`)
// }
// sayBye("Igor");

// function sum(a, b) {
//     return a+b;
// }
// //Function callback!!!
// function doSomething(func){
//     return func(10,15);
// }

// console.log(sum(2,4));

// console.log(doSomething(sum));

// IIFE ///

/* let result = (function (a,b) {
    return a +b;
})(5,4);

console.log(result) */

/// Arrow function in JS ES6


/* function sayHi (name){
    console.log(`Hello ${name}!`);
}

const arrowSayHi = (name) => {
    console.log(`Hello Arrow ${name}`);
}

sayHi("Igor");
arrowSayHi("Igor");
 */

///Arrays

const autoBrands = ['Audi', 'Mazda', 'Toyota', 'BWM'];
// console.log(autoBrands);
// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[6]); // undefined
// console.log(autoBrands.length);

/* //Array methods
// push add to the end of array
autoBrands.push("Lada");
console.log(autoBrands);
// pop delete from end of array
autoBrands.pop();
console.log(autoBrands);
//Shift method deletes from array start
autoBrands.shift();
console.log(autoBrands)
//Unshift method adds element to the start of the array
autoBrands.unshift("Nissan");
console.log(autoBrands)
//Splice method
autoBrands.splice(2, 1);
console.log(autoBrands); */


