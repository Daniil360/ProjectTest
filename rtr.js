

//Метка-это четкое указание где останавливать или продолжать цикл 
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;// вот здесь если вдруг у нас (к) которая
            //увеличивается каждый раз она будет строго равна 2 то мы должны
            //написать continue и теперь здесь мы должны дать указание на верхий
            //цикл чтобы у нас не просто этот внутренний цикл пропустил свою итерацию
            //а самый главный для этого используются метки то есть перед нужным циклом 
            //мы прописываем как0е-то слово 
            //first:-это метка 
            console.log(`Third level: ${k}`);
        }
    }
}





const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)




