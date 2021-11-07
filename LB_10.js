// Создайте функцию, которая находит наибольшее целое число в массиве с помощью рекурсии.
function recursion(arr, i, max_val){

    if (arr[i] > max_val){
        max_val = arr[i]
    }
    if (i == arr.length){
        return 'Макимальное число в массиве = ' + max_val
    }
    
    return recursion(arr, i+1, max_val)
}

function data_verification(arr){
    if (Array.isArray(arr) == false){
        console.log('Передан не массив')
        return false
    }

    if (arr.length == 0) {
        console.log('Массив пустой')
        return false
    }

    for (let i = 0; i < arr.length; i++){
        if ((typeof arr[i]) != 'number' || isNaN(arr[i]) == true || Number.isInteger(arr[i]) == false){
            console.log('Неверные данные')
            return false
        }
    }
    return true
}


let arr = [-6, -2, -3,]
if (data_verification(arr)){
    console.log(recursion(arr, 0, arr[0]))
}

let arr1 = [0, 12, -3, 90]
if (data_verification(arr1)){
    console.log(recursion(arr1, 0, arr1[0]))
}

let arr2 = (0, 12, -3, 90)
if (data_verification(arr2)){
    console.log(recursion(arr2, 0, arr2[0]))
}

let arr3 = [0, '12', -3, 90]
if (data_verification(arr3)){
    console.log(recursion(arr3, 0, arr3[0]))
}