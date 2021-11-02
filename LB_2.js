
// Напишите функцию, которая принимает координаты двух точек на двухмерной плоскости и возвращает длину отрезка, 
// соединяющего эти две точки.
function CalculatingLength (coordinates) {

    if (Array.isArray(coordinates) == false){
        return 'Передан не массив\n'
    }

    if (coordinates.length < 2) {
        return 'Переданы координаты только одной точки\n'
    }

    for (let i = 0; i < coordinates.length; i++){

        if (Array.isArray(coordinates[i]) == false){
            return 'Координаты точки должны быть в массиве\n'
        }

        if (i == 0 ){
            console.log('Координаты первой точки:')
        }

        else {
            console.log('Координаты второй точки:')
        }

        if (coordinates[i].length < 2) {
            return 'Для точки не хватает координат\n'
        }

        for (let j = 0; j < coordinates[i].length; j++){

            if ((typeof coordinates[i][j]) != 'number' && (typeof coordinates[i][j]) != 'string' || isNaN(coordinates[i][j]) == true){
                return 'Неверные данные\n'
            }
            else if ((typeof coordinates[i][j])=='string'){
                coordinates[i][j] = Number(coordinates[i][j])
            }
            if (j == 0 ){
                console.log('X: ' + coordinates[i][j])
            }
    
            else {
                console.log('Y: ' + coordinates[i][j])
            }
        }
    }
    var a = coordinates[0]
    var a_x = a[0]
    var a_y = a[1]

    var b = coordinates[1]
    var b_x = b[0]
    var b_y = b[1]
    
    var d = ((a_x - b_x)**2 + (a_y-b_y)**2)**0.5
    return 'Ответ: ' + d + '\n'
}

//Массив для координат двух точек
let coordinates = []

//Координаты точки a
let a_x_coord = '123'
let a_y_coord = 2

let coords_a =[]
coords_a.push(a_x_coord, a_y_coord)

//Координаты точки b
let b_x_coord = 2
let b_y_coord = '-1'

let coords_b =[]
coords_b.push(b_x_coord, b_y_coord)

coordinates.push(coords_a, coords_b)

console.log(CalculatingLength(coordinates))

//ПРОВЕРКА
//1) ПЕРЕДАНЫ КООРДИНАТЫ ОДНОЙ ТОЧКИ

//Массив для координат двух точек
let coordinates_1 = []

//Координаты точки a
let a_x_coord_1 = '123'
let a_y_coord_1 = 2

let coords_a_1 =[]
coords_a_1.push(a_x_coord_1, a_y_coord_1)

coordinates.push(coords_a_1)

console.log(CalculatingLength(coordinates_1))

//2) ПЕРЕДАНЫ НЕ ВСЕ КООРДИНАТЫ ТОЧЕК

let coordinates_2 = []

//Координаты точки a
let a_x_coord_2 = '123'
let a_y_coord_2 = 2

let coords_a_2 =[]
coords_a_2.push(a_x_coord_2, a_y_coord_2)

//Координаты точки b
let b_x_coord_2 = 2
// let b_y_coord = '-1'

let coords_b_2 =[]
coords_b_2.push(b_x_coord_2)

coordinates_2.push(coords_a_2, coords_b_2)

console.log(CalculatingLength(coordinates_2))

//3) ПЕРЕДАН НЕ МАССИВ

console.log(CalculatingLength(12))

//3.1) ПЕРЕДАН НЕ МАССИВ

let coordinates_3 = []

//Координаты точки a
let a_x_coord_3 = '123'
let a_y_coord_3 = 2

let coords_a_3 =[]
coords_a_3.push(a_x_coord_3, a_y_coord_3)

//Координаты точки b
let b_x_coord_3 = 2
let b_y_coord_3 = '-1'

// let coords_b_3 =[]
// coords_b_3.push(b_x_coord_2)

coordinates_3.push(coords_a_3, b_x_coord_3, b_y_coord_3)

console.log(CalculatingLength(coordinates_3))

