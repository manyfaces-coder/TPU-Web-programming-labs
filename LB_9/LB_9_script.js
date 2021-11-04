// Проверьте, состоит ли данная строка только из букв и пробелов, и все ли буквы в
// нижнем регистре.

function process_string(str){

    if (/^\s*$/.test(str) != false){
        return 'Указана пустая строка или строка состоящая только из пробелов!'
    }

    if(/^[a-zа-яё ]+$/.test(str) == false){ 
        return  'В строке лишние символы или заглавные буквы'
    }

    if(/[a-zа-яё]/.test(str) == true){
        return  'все ок'
    }
}

console.log(process_string('ASDasd'))
