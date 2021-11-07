
const form = document.getElementById('form')
form.addEventListener('submit', getDays);

var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', swapper, false);
}

let first_date = form.querySelector('#first_date')
let second_date = form.querySelector('#second_date')

let answer = document.createElement('span')
form.append(answer)


function getDays(event){
  event.preventDefault()
  let result = difference_in_days(first_date.value, second_date.value)
  answer.innerHTML = "Количество дней между датами: " + result
}


function difference_in_days(date_1, date_2){
    
    var date_1 = new Date(date_1)
    var date_2 = new Date(date_2)

    var different

    if (date_1 > date_2) {
        different = date_1.getTime() - date_2.getTime()
    } 
    else {different = date_2.getTime() - date_1.getTime()}


    if (date_1 == date_2) {
        return 0
    }
    
    return different / (1000 * 3600 * 24)
}

