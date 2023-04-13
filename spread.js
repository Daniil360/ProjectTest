"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };



// const copy1 = obj; //передает ссылку на уже существующий обьект

// copy1.a = 10;

// console.log(copy1);
// console.log(obj);

function copy(mainObj) { //Эта функция будет заниматься тем что при помощи цикла
    //она создаст новой обьект уже перебирая старое свойство которые были в
    //нашем обьекте 
    let objCopy = {};//создаем копию Обьекта мы возмользуемся просто фигурными скобками

    //дальше мы запускаем перебирающую конструкцию которая называется for in

    let key; //переменная для перебора 
    for (key in mainObj) {//мы скажем что у нас есть ключи внутри обьекта mainObj который 
        //передается в функцию а в фигурных скобках мы помещаем копирование наших свойств
        //то есть мы берем objCopy и мы помним что он пустой в верху внутри создаем новое 
        //свойство через квадратные скобки это свойство будет содержать такое же обозначение 
        //как и в главном обьекте и дальше мы просто делаем копию из нашего главного обьекта
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); 

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = "aaaaadad";
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);  

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ["a", "b"];

const newAarraya = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};