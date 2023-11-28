// ======= Выбор DOM элементов ======= //

//Выбор главного элемента DOM по селектору
// document.querySelector('selector');

//document.querySelector('h2').classList.add('red')

/* const heading2 = document.querySelector('h2');
heading2.classList.add('green'); */

// Выбор коллекции селекторов

// const headings = document.querySelectorAll('h2');
// console.log(headings);

// headings.classList.add('red-text');

// for (const heading of headings) {
//     console.log(heading);
//     heading.classList.add('red-text');
// }


// const paragraphs = document.querySelectorAll('p');

//WITH FOR OF
/* for (const paragraph of paragraphs) {
    console.log(paragraph)
    paragraph.classList.add('purple-text');
}
 */

// FOR EACH EXAMPLE
// paragraphs.forEach(element => {
//     element.classList.add('purple-text');
// });


// ======= Работа в CSS классами ======= //

/* const headingH2 = document.querySelector('h2');
console.log(headingH2);

headingH2.classList.add('red-text');
headingH2.classList.remove('red-text');
headingH2.classList.toggle('purple-text');
console.log(headingH2.classList.contains('golden'));
headingH2.classList.toggle('golden');
console.log(headingH2.classList.contains('golden')); */

// ======= Работа в CSS атрибутами ======= //

/* const image = document.querySelector(`#logo`);
console.log(image);
const srcValue = image.getAttribute('src');
console.log(srcValue);

image.setAttribute('src','./img/php.png');
image.setAttribute('width','200');

image.src = './img/js.png';

const button = document.querySelector('#button');
button.setAttribute('value', 'Send');
button.value = 'Text for the button';
 */

// ======= Работа с прослушкой событий ======= //

/* const button = document.querySelector('#button');
const img = document.querySelector('#logo');
button.value = 'DELETE'; */
/* button.addEventListener('click', function () {
    console.log('CLICK');
    img.remove();
}); */

/* button.onclick = function(){
    console.log("click");
    img.remove();
}

button.onclick = function(){
    console.log("click");
    img.remove();
} */

/* img.addEventListener('click', function(){
    img.remove();
});
 */

// ======= Работа с прослушкой событий ======= //

/* const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener('input', inputHandler);

function inputHandler() {
    console.log(inputText.value);
    textBlock.innerText = inputText.value;
} */


// ======= Object event ======= //

/* const list = document.querySelector('#list');

list.addEventListener('click', function (event) {
    // console.log(this);
    // console.log(event);
    console.log(event.target);
})
 */

// ======= Работа с элементами ======= //

// Выбор контейнера

/* const container = document.querySelector('#elementsContainer'); */

// Создание заголовка

/* const newHeader = document.createElement('h1');
newHeader.innerText = 'New Chapter';
container.append(newHeader); */

// Клонирование элементов

/* const mainHeader = document.createElement('header');
const headerCopy = mainHeader.cloneNode(true);
container.append(headerCopy);
 */

// Вставка разметки через строки
/* const htmlExample = '<h2>One more Heading!</h2>';
container.insertAdjacentHTML('beforeEnd', htmlExample); */

// Вставка разметки через шаблонные строки
/* const title = 'Text';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeEnd', htmlExample); */


// ======= Работа с элементами ======= //

/* const toDoList = document.querySelector('#todo-list');
const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-input');

toDoForm.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault();
    // First we recieve text from input field
    const taskText = toDoInput.value;
    console.log(taskText);

    // LI tage creation
    /* const liHTML = `<li>${taskText}</li>` */

    // Add LI with element creation
/*     const newTask = document.createElement('li');
    newTask.innerText = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'DELETE';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    deleteBtn.addEventListener('click', deleteTask);

    toDoList.append(newTask);

    // Adding this text to HTML page
    /* toDoList.insertAdjacentHTML('beforeEnd', liHTML); */

    // removing text from input form
/*     toDoInput.value = '';

    // return focus back to input field
    toDoInput.focus();
} */

/* function deleteTask() {
    this.closest('li').remove();
} */

















































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
/* function greetUser(name) {
    console.log(`Hello ${name}! I am happy to see you here!`)
}
greetUser("Igor"); */



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

//const autoBrands = ['Audi', 'Mazda', 'Toyota', 'BWM'];
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


//Loops

//FOR LOOP//
/* console.log('Start');

for (let index = 0; index < autoBrands.length; index++) {  
    console.log(autoBrands[index]);
}
console.log("Finish");
 */

//FOR OF//
/* for (let brand of autoBrands){
    console.log(brand);
} */

//FOR EACH//
/* autoBrands.forEach(element => {
    console.log(element)
}); */

/* autoBrands.forEach(function(item){
    console.log(item);
});

autoBrands.forEach(function(item, index){
    console.log(`${item} => ${index}`);
});
 */

//CREATE FUNCTION AND THEN PASS TO THE FOR EACH LOOP///
/* autoBrands.forEach(printBrand);

function printBrand(brand, i) {
    console.log(`${brand} => ${i}`)
}
 */

// =================== OBJECTS ======================= //

/* let userName = 'Igor';
let age = 10;
let isMaried = true; */

/* const person = {
    userName: 'Igor',
    age: 35,
    isMarried: true,
    profession: 'UX Designer',
    sayHi: function (name){
        console.log(`Hello ${name}! Меня зовут ${this.userName}`);
    }
} */

/* console.log(person);

console.log(person.userName);
console.log(person.age);
console.log(person.isMarried);

console.log(person['age']);

let propertyName = 'profession';
console.log(person[propertyName]); */

// add new object property

/* person.sex = 'male';
console.log(person.sex); */

//delete object property
/* delete person.sex;
console.log(person)
 */

// =================== OBJECTS methods ======================= //

//person.sayHi("Anton");

// =================== OBJECTS THIS ======================= //

/* const person = {
    userName: 'Igor',
    age: 35,
    isMarried: true,
    profession: 'UX Designer',
    sayHi: function (name){
        console.log(`Hello ${name}! Меня зовут ${this.userName}`);
    }
} */

// =================== OBJECTS FOR IN ======================= //

/* for (let key in person){
    console.log(key);
    console.log(key + `:` + person[key]);
} */

// =================== Const object and array, why we can change them? ======================= //

/* We can change object properties // add new // remove // change them, BUT WE CANNOT 
change the link to another object */

// =================== Classes / Constructors of objects ======================= //

//Class is a blueprint for an object --> we can then create many similar objects

/* class Person {
    constructor(firstName, lastName, age, isMarried) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMarried = isMarried;
    }

    sayHello(name){
        console.log(`Hello, ${name}! My name is ${this.firstName}`);
    }
}

const person1 = new Person(`Igor`, `Budnitski`, 35, true);

// console.log(person1);

const person2 = new Person(`Pavel`, `Ivanov`, 23, false);

// console.log(person2);

person1.sayHello("Anton");
person2.sayHello("Artjom"); */