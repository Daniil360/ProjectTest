"use strict";
//callback - функция которая выполнена после того как другая функция 
//завершила свое выполнение.
//callback функция позволяет нам быть уверенными в том что код не 
//начнет исполнение до того момента пока другой код не завершит свое 
//выполнение .

function first() {
    setTimeout(function() {
        console.log(1);
    }, 5000);
}

function second() {
    console.log(2);
}

first();
second();




function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}



learnJS('JavaScript', done);
