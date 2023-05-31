function f8(a) {
    try {
        if(a.w==1) {return a.w }
        return 888
    } catch (error) {
        return "Ошибка. Нет А"
    }
}

console.log(f8({w:22}))

function S() {
    return "Автомобиль"
}

function N() {
    return 2021
}