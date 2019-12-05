//forma anterior

/*
function sum(a, b){
    var value = 0

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum(5, 5, 5 , 2, 3));
*/

//rest operator

/*
function sum(...args){
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 5 , 2, 3));
*/

//outra forma

/*
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5,5,5,2,3));
*/

//spread operator - strings, arrays, objetos e objetos interaveis

const str = 'Digital'
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
};

const arr2 = [5, 6, 7].concat(arr);
const arr3 = arr.concat([8, 9, 10]);

logArgs(arr3);

//Spread quebra cada letra para um array

const arr4 = [...arr, 8, 9, 10];

logArgs(arr4);

const arr5 = [...arr, ...arr2, 0, 0, 0];

console.log(arr5);

const arrClone = [...arr];

console.log(arrClone);

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test: 'Hello'
};

console.log(obj2)

//Destructuring Assignment

var arra = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arra[0];
var Banana = arra[1];
var Orange = arra[2];
var Tomato = arra[3];

var [apple2, Banana2, Orange2, [Tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(Tomato, Tomato2);

var obje = {
    name: "Vinicius",
    props: {
        age: 26,
        corfavorita: ['black', 'blue']
    }
};

var {name} = obje;
var {
    props: {age, corfavorita:[cor1,cor2] }
} = obje;

console.log(name);

console.log(age);

console.log(cor1);

var ar = [{name:'Apple', type: 'fruit'}];

var [{ name:fruitname }] = ar;

console.log(fruitname);

//functions

function sum([a, b] = [0, 0]) {
    return a + b;
}

console.log(sum());