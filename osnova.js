function f1(a,b,c) {

}



// sum3(1000, 2000);


function sum() {
    const x = 5;
    const y = 6;
    console.log(x + y);
}


sum();



let x = 55;
let y = 66;

function sum2() {

    console.log(x + y);
}

sum2();

x = 100;
y = 200;
sum2();

//аргументы
//формальные аргументы

function sum3(x1=100, y1=100) {
    console.log(x1 + y1);
}



sum3(44, 11);
sum3(101,200);

let z = 77;

sum3(z,10);
sum3(z,z*2);
sum3(2,3,4,5,6);
sum3(6);
sum3();