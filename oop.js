//Object.create(); для создания прототипных связей
//Object.setPrototypeOf(); для создания прототипных связей
//ООп это наука о том как делать правильную архитектуру , так же JS можно назвать прототипно
//ореинтированым языком это частный случай ООП один из его стилей 
//В JS все строится на прототипах 

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));


console.dir([1,2,3]);


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};


const john = Object.create(soldier);


// const john = {
//     health: 100
// };


// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);

john.sayHello();