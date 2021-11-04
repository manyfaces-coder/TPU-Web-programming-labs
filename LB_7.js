//Для объекта, содержащего имена и возрасты группы людей, верните имя
// самого старого человека.
let people = {
    'Victor':12,
    'Alex':31,
    'Sergey':21,
    'Anna':43,
    'Oksana': 92,
    'Vladimir':2,
    'Tom': 92
}

function getMaxAge (NameAge){
    
    names = []
    max_age = 0
    olders = 0
    if ( typeof NameAge != 'object' ){ 
        console.log('Передан не объект!')
        return false
    }

    if (Object.keys(NameAge).length == 0) { 
        console.log('Значения не переданы!')
        return false
    }


    for (key in NameAge) {
        if(typeof NameAge[key] != 'number' || Number.isInteger(NameAge[key]) == false || NameAge[key] <= 0) {
            console.log('Возраст должен быть целым, положительным числом!')
            return false
        }
        if (/\d+/.test(key)){
            console.log('Имя должно состоять из букв!')
            return false
        }
        names.push(NameAge[key])
    }

    for (i = 0; i < names.length; i++){
        if (names[i] > max_age) max_age = names[i]
    }


    console.log('Самый(е) старый(е):')
    for (key in NameAge) {
        if (NameAge[key] == max_age){
            console.log(key)
        }
    }
    console.log('Их(его) возраст: ' + max_age + '\n')

}

getMaxAge(people)

console.log('Тесе №1')
let test_1 = {
    'Vladimir':2,
    'Tomas':-1212,
}

getMaxAge(test_1)

console.log('Тесе №2')

let test_2 = {
    'Vladimir':2,
    'Oleg': 'asd',
}

getMaxAge(test_2)

console.log('Тесе №3')

let test_3 = {
    'Vladimir':2,
    '1231': 25,
}

getMaxAge(test_3)

console.log('Тесе №4')

let test_4 = {
}

getMaxAge(test_4)

console.log('Тесе №5')

let test_5 = ('Victor:',12, 'Alex:', 31)

getMaxAge(test_5)
