'use strict';

// let number = 5; debugger

// function logNumber() {
//     console.log(number);debugger
// }

// number = 6;

// logNumber(); debugger 


// number = 8;

// logNumber(); debugger 

function createCounter() {
    let counter = 0;


    const myfunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myfunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);