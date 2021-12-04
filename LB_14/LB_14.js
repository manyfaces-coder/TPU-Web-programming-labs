let result = document.getElementById('result')

function get_str(){
    let input_str = document.getElementById('input_str').value
    if (input_str.length < 1 ||  /^[A-Za-zА-Яа-яЁё ]+$/.test(input_str) != true || 
    input_str <1|| /^[A-Za-zА-Яа-яЁё ]+$/.test(input_str) != true){
        alert ('Данные некорректны!')
        return false
    }
    else{
        let sorted_str = input_str.toLowerCase().split(' ').sort((a, b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1))
        result.innerHTML = 'Результат: ' + sorted_str.join(' ')
    }
}
