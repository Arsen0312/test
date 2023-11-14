// 1) Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.

const num = 1
const str = 'Hello World'
const bool = true
console.log(num, str, bool)

// Преобразуйте строку в число и наоборот. Выведите результат в консоль.

const strNum = '123'
const numStr = +strNum
const strNum2 = numStr + ''
console.log(strNum, numStr, strNum2)

// Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль.

const arrayNum = [1,2,3].forEach(elem => console.log(elem))

// Создайте объект, представляющий информацию о человеке (имя, возраст, город и т.д.). Выведите значения свойств в консоль.

const objHumen = {
    name: 'Aidar',
    age: 21,
    city: 'Bishkek'
}

for (key in objHumen) {
    console.log(`${key}: ${objHumen[key]}`);
}

// Напишите программу, которая проверяет, является ли число четным или нечетным, и выводит соответствующее сообщение.

function chekNumCheotnoeNum(num) {
    if (num % 2 === 0 ) {
        console.log('Число четное');
    } else {
        console.log('Число не четное');
    }
}

chekNumCheotnoeNum(9)
chekNumCheotnoeNum(10)

// Используя цикл, выведите числа от 1 до 10 в консоль.

for (i = 0;i <= 10;i++) {
    console.log(i);
}

// Создайте функции 3 типов (arrow, declaration, expression). Все три функции должны выводить в консоль - Hello World!

// const fnArrow = () => {

// }

// function nameFn() {

// }

// const expressionFn = () {
    
// }

// Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой

// promis = new Promise ((onResolv, onReject) => {
//     onResolv('Отрабатывает успешно')
// })

// promis2 = new Promise ((onResolv, onReject) => {
//     onReject('Отрабатывает с ошибкой')
// })

// Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.

const NumArray = [1,2,3,4,5]
function srednauOrefmeticheskoeZnachenie(num) {
    let res = 0
    for (i of num) {
        res += i
    }
    console.log('среднее арифметическое значение:',res / num.length)
}
srednauOrefmeticheskoeZnachenie(NumArray)

// Напишите функцию, которая принимает массив строк и возвращает новый массив строк, где каждый элемент в верхнем регистре.


const arrayStr = ['Hello', 'World', 'I', 'Love', 'You'].map(elem => elem.toUpperCase())

console.log(arrayStr);

// Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст" и возвращает новый массив объектов с полями "имя" и "возраст", отсортированный по возрастанию возраста.

const arrayObj1 = [{name: 'Arlan', age: 17} ,{name: 'Arlon', age: 25}, {name: 'Aidar', age: 21}]
function postArrayObj(obj, age) {
    obj.sort((elem , elem2) => {
        const ageA = elem[age]
        const ageB = elem2[age]
        if (ageA < ageB) {
        return -1
        }
        if (ageA > ageB) {
            return 1;
        }
        return 0})
    console.log(obj)
}

postArrayObj(arrayObj1, 'age')

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа.

const arrNum2 = [1, 1, 1, 2, 2, 3]
function findUniqueWords(arr) {
    const finalResult = []
    const seen = new Set()
    for (const i of arr) {
        if (seen.has(i)) {
            continue
        }
        finalResult.push(i)
        seen.add(i)
    }
    return finalResult
}
console.log(findUniqueWords(arrNum2))

// Напишите функцию, которая принимает массив объектов и сортирует их по полю "имя" в алфавитном порядке.

const arrayObj = [{name: 'brlan', age: 17} ,{name: 'Arlon', age: 25}, {name: 'Aidar', age: 21}]

function postObjInArrSort(arr, name) {
    arr.sort((elem , elem2) => {
        const nameA = elem[name]
        const nameB = elem2[name]
        if (nameA < nameB) {
        return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0})
    console.log(arr);
}

postObjInArrSort(arrayObj, 'name')

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

function postArrayChChesla(arr) {
    console.log(arr.filter(elem => elem % 2 === 0))
}

postArrayChChesla([1,2,3,4,5])

// Напишите функцию, которая принимает массив объектов с полями "имя" и "зарплата"и возвращает новый массив объектов, содержащий только тех сотрудников, чья зарплата больше 50000.

const arrSelary = [
    {
        name:'alala',
        selary: 40000
    },
    {
        name:'blala',
        selary: 80000
    },
    {
        name:'vlala',
        selary: 90000
    }
]

function postArrayObj(arr) {
    let resuu = []
    for (i of arr) {
        if (i.selary > 50000) {
            resuu.push(i)
        }
    }
    console.log(resuu)
}

postArrayObj(arrSelary)

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые больше 10 и меньше 20.

const numArr = [20, 10, 11, 21]
function postNum(num) {
    console.log(num.filter(elem => elem > 10 && elem < 20))
    
}
postNum(numArr)

// Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только те строки, которые длиннее 5 символов.
