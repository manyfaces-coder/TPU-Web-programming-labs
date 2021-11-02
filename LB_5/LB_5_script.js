
// Создайте функцию, которая принимает три аргумента a, b, c и возвращает
// сумму чисел, равномерно разделенных на c из диапазона a и b включительно.
const form = document.getElementById('form');
form.addEventListener('submit', getSum);

let a = form.querySelector('[name="a"]')
let b = form.querySelector('[name="b"]')
let c = form.querySelector('[name="c"]')

let answer = document.createElement('span')
form.append(answer)

function getSum(event) {
    event.preventDefault()
    let result = calculation(parseFloat(a.value), parseFloat(b.value), parseFloat(c.value))
    if (result != null) {
        answer.innerHTML = "Ответ: " + result
    }
}

function calculation(a, b, c) {

    let sum = 0
    if (a > b) {
        for (let i = 0; i < a - b + 1; i++) {
            sum += (b + i) / c
        }
    }

    else if (b > a) {
        for (let i = 0; i < b - a + 1; i++) {
            sum += (a + i) / c
        }
    }

    else {
        sum = a / c
    }

    return sum
}
