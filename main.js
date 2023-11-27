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