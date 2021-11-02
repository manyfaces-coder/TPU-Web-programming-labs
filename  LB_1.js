
// Напишите функцию, которая возвращает последовательность нулей в двоичной строке.

function getSequence (str) {
    var count = 0
    var maximum = 0
    if ((typeof str) != 'number' && (typeof str) != 'string' || isNaN(str) == true){
        return 'Неверные данные'

    }
    else if ((typeof str)=='number'){
        str = String(str)
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '0'){
            count++
        }
        else if (count > maximum){
            maximum = count
            count = 0
        }
    }
    if (maximum == 0){
        return "В строке нет нулей"
    }
    if (count > maximum){
        maximum = count
    }
    return "Самая длинная последовательность нулей равна: " + maximum

}

console.log(getSequence(1010101000))
console.log(getSequence('1010101000'))
console.log(getSequence(null))
console.log(getSequence(NaN))
console.log(getSequence(1234124))
