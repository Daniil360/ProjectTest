"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);



//метод forEach перебор
//метод это функция 
//колбэк функция нужна для того чтобы строго выполнится после определенного 
//количества действий например сначала выполняется forEach а потом уже выполняются 
//колбэк функцуии
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}; ${item}; внутри массива ${arr}`);
// })






// // arr.pop();  // удаляет последний элемент из массива

// // arr.push(10);

// // console.log(arr);

// //перебор массива с помощью цикла
// for (let i = 0; i < arr.length; i++) { //цикл будет отрабатывать до тех пор пока не закончатся элементы в внутри массива
//     console.log(arr[i]);
// }

// //также есать конструкция перебора  ( for of)- метод он работает только 
// //с масиво пододными сущностями 


// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));