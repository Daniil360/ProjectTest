"use strict";

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