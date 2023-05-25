
let x = 2, y = 3;

function plus(x) {
    return x + 1;

}

console.log(plus(y));

let square = function(x) {
    return x * x;
    
};

console.log(square(plus(y)));

const plus1 = x => x + 1;
const square1 = x => x * x;

console.log(plus1(y))

console.log(square1(plus(y)))


console.log(plus)