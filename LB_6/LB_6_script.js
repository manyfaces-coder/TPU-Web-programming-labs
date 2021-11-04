//апишите функцию, которая возвращает наибольший общий делитель всех
// элементов массива. Если наибольший общий делитель равен 1, верните 1
const form = document.getElementById('form')
form.addEventListener('submit', getArray);

let str_arr = form.querySelector('[name="array"]')

let answer = document.createElement('span')
form.append(answer)


function getArray(event){
  event.preventDefault()
  let result = greatestCommonDivisor(stringToArray(str_arr.value))
  
  if (result != null) {
    answer.innerHTML = "Наибольший общий делитель элементов: " + result}
}

function stringToArray(str){
  let arr = str.split(',')
  for (let i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i])
  }
  return arr
}

function greatestCommonDivisor(arr){

  if(Array.isArray(arr) != true){
    return 'Не верно переданы аргументы';
  }

  if(arr.length == 0){
    return 'Впишите числа'
  }
  
  for (let i = 0; i < arr.length; i++){
    if ((typeof arr[i]) != 'number' || isNaN(arr[i]) == true || Number.isInteger(arr[i]) == false){
      return 'Неверные данные'
    }
    if (arr[i] == 0){
      return 'Нельзя передавать ноль'
    }
  }
  for (i = 1; i < arr.length; i++) { 
    while (arr[0] != 0 && arr[i] != 0) { 
      if(Math.abs(arr[0]) > Math.abs(arr[i])) 
      arr[0] = Math.abs(arr[0]) % Math.abs(arr[i])
      else
      arr[i] = Math.abs(arr[i]) % Math.abs(arr[0]);
    }
    arr[0] = Math.abs(arr[0]) + Math.abs(arr[i]);
  }
  return arr[0]
}
