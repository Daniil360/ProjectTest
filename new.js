//задачи из курса
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;
    
    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(-150));


function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' || 
        typeof(c) !== 'number' || 
        typeof(d) !== 'number' ) {
            return 0;
        } else {
            return Math.max(a, b, c, d);
        }
    
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));




function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `; 
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(7));


