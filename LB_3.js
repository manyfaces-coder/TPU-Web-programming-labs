// Создайте функцию, которая принимает слово и возвращает true, если слово
// имеет две идущие подряд одинаковые буквы.
function DoubleLetters(str) {

    if (typeof str != 'string') {
        return 'Не строка\n'
    }

    if (/[A-Za-zа-яёА-ЯЁ]/i.test(str)) {
        var str = str.replace(/[^A-Za-zа-яёА-ЯЁ\s]/g, '')

        var words = str.split(' ');

        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {

                if (words[i][j - 1] == words[i][j]) {

                    return true + '\n'
                }
            }
        }
        return false + '\n'
    }
    else {
        return 'В строке нет букв\n'
    }

}

console.log(DoubleLetters('У попа  \'/,. \n была 11 собака zz он ее любил'))
console.log(DoubleLetters('В этой строке нет двух букв подряд'))
console.log(DoubleLetters('123213'))
console.log(DoubleLetters(123213))
console.log(DoubleLetters([123213]))
console.log(DoubleLetters(NaN))
console.log(DoubleLetters(null))