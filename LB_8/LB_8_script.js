// Напишите функцию, которая принимает в качестве аргумента строку из
// одного или нескольких слов и возвращает ту же строку, но с перевернутыми
// словами из пяти или более букв. Переданные строки будут состоять только из
// букв и пробелов. Пробелы будут включены только в том случае, если
// присутствует более одного слова.
function lineHandler (str){

    if (typeof str != 'string') {
        return 'Не строка\n'
    }

    str = str.replace(/[^A-Za-zа-яёА-ЯЁ\s]/g, '')

    let words = str.split(' ')

    for (let i = 0; i < words.length; i++){
        if (words[i].length >= 5){
            words[i] = words[i].split("").reverse().join("")
        }
    }
    let string = words.join(' ')
    return string
}

console.log(lineHandler('слово пять длинное 123123123 два три один'))