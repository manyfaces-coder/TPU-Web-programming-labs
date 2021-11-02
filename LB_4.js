// Напишите функцию, которая принимает массив из двух чисел и определяет,
// равны ли суммы цифр в каждом числе друг другу.
function comparison(arr){
    if (Array.isArray(arr) == false){
        return 'Передан не массив'
    }

    if (arr.length != 2){
        return 'Передан массив не из двух чисел'
    }

    let nums = []
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'number'){
            num = arr[i].toString().split('')
            num = num.filter(val => val !== '-')
            num = num.filter(val => val !== '.')
            // Не понимаю почему не работает, такая функция
            // var num = num.filter(function(i){
            //     return(i !== '.' || i !== '-')
            //     })
            nums.push(num)
        }
    
        if (typeof arr[i] == 'string'){
            num = arr[i].split('')
            num = num.filter(val => val !== '-')
            num = num.filter(val => val !== '.')
            
            nums.push(num)
        }

        if ((typeof arr[i]) != 'number' && (typeof arr[i]) != 'string' || isNaN(arr[i]) == true){
            return 'Неверные данные'
        }    
    }
    for (var i = 0; i < nums.length; i++){
        nums[i] = nums[i].map(x => Number(x))        
    }
    var sum_1 = nums[0].reduce((a, b) => a + b, 0)
    var sum_2 = nums[1].reduce((a, b) => a + b, 0)

    return sum_1 == sum_2
}

console.log(comparison([2, 11]))
console.log(comparison([2, '111']))
console.log(comparison(['2', '11']))
console.log(comparison([2, NaN]))
console.log(comparison([2, '1s1']))
console.log(comparison([2, 'null']))
console.log(comparison([2, '11', 2]))
console.log(comparison(2, '11'))
console.log(comparison([2]))
console.log(comparison([-2, '1.1']))
console.log(comparison([-2.1, '111']))
console.log(comparison([2.1, '-11.1']))







