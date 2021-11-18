let input_fname = document.getElementById('input_fname')
let input_lname = document.getElementById('input_lname')
let result_name = document.getElementById('result_name')
let result_last_name = document.getElementById('result_last_name')
let result_full_name = document.getElementById('result_full_name')
let result_initials = document.getElementById('result_initials')


class Name{
    constructor(name, lastname){
        this.fname = name
        this.lname = lastname
    }

    fullname(){
        return this.fname + ' ' + this.lname
    }

    initials(){
        return this.fname.substring(0,1).toUpperCase() + '.' + this.lname.substring(0,1).toUpperCase()
    }

    get f_name(){
        return this.fname
    }

    get l_name(){
        return this.lname
    }

}

function get_answer(){
    if (input_fname.value.length < 1 ||  /^[A-Za-zА-Яа-яЁё ]+$/.test(input_fname.value) != true || 
        input_lname.value <1|| /^[A-Za-zА-Яа-яЁё ]+$/.test(input_lname.value) != true){
            alert ('Данные некорректны!')
            return false
        }
    const info_name = new Name(input_fname.value, input_lname.value)
    result_name.innerHTML = 'Имя: ' + info_name.f_name
    result_last_name.innerHTML = 'Фамилия: ' + info_name.l_name
    result_full_name.innerHTML = 'Имя и фамилия: ' + info_name.fullname()
    result_initials.innerHTML = 'Инициалы: ' + info_name.initials()

}
