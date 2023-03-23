// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("Я сыт");
// }


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

//мы хотим сказать что у нас должно быть или 3 ровно гамбургера (и) 2 штуки колы
//дальше мы говорим что после первой комбинации мы хотим проверить еще одну комбинацию
//потом мы ставим ||(или) и говорим что у нас должно быть либо 3 порции Фри и хотя бы 1 нагетсы
//или выполнится 1 часть кода hamburger === 3 && cola === 2  ||(или) вторая fries === 3 && nuggets

if(hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets)




