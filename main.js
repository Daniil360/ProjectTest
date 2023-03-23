// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("Я сыт");
// }


const hamburger = 3;
const fries = 3;
const cola = 2;
const nuggets = 4;

//мы хотим сказать что у нас должно быть или 3 ровно гамбургера (и) 2 штуки колы
//дальше мы говорим что после первой комбинации мы хотим проверить еще одну комбинацию
//потом мы ставим ||(или) и говорим что у нас должно быть либо 3 порции Фри и хотя бы 1 нагетсы
//или выполнится 1 часть кода hamburger === 3 && cola === 2  ||(или) вторая fries === 3 && nuggets

if(hamburger === 3 && cola === 2 || fries === 3  && nuggets) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets)





console.log(NaN || 2 || undefined );


console.log(NaN && 2 && undefined );

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3 );


console.log(25 || null && !3);


console.log(NaN || null || !3 || undefined || 5);



console.log(NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);



const hamburger1 = 3;
const fries1 = 3;
const cola1 = 0;
const nuggets1 = 2;

if (hamburger1 === 3 && cola1 || fries1 === 3 && nuggets1) {
    console.log('Done!');
}

console.log(hamburger1 === 3 && cola1 || fries1 === 3 && nuggets1)


let hamburger2;
const frise2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if (hamburger2 || cola2 || frise2 === 3 || nuggets2) {
    console.log('Done!')
}

console.log(hamburger2 || cola2 || frise2 === 3 || nuggets2)


let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;

if(hamburger3 && cola3 || fries3 === 3 && nuggets3) {
    console.log('Done!')
}

console.log(hamburger3)

git stas