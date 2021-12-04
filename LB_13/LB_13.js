function add_string(id){
    var table = document.getElementById(id)
    var tr = document.createElement('tr')
    var td_1 = document.createElement('td')

    td_1.appendChild(document.createTextNode('новая строка'))

    var td_2 = document.createElement('td')

    td_2.appendChild(document.createTextNode('новая строка'))

    tr.appendChild(td_1)
    tr.appendChild(td_2)
    table.appendChild(tr)
}

function del_string(id){
    var table = document.getElementById(id)
    var numb_str = table.rows.length

    if( numb_str > 1 ){
    table.deleteRow(numb_str -1)
    }
    else{
        alert("Нет строк для удаления")
    }
}