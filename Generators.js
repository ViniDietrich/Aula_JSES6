// symbols

//Maneira de gerar um identificador const único

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

console.log(Object.keys(obj));

console.log(Object.getOwnPropertySymbols(obj));

//Well Known Symbols

//Symbol.iterator();
//Symbol.split();
//Symbol.toStringTag().

//Modo Anterior


const arr = [1, 2, 3, 4]
/*
const it = arr[Symbol.iterator] ();

while(true){
    let {value, done} = it.next()

    if (done) {
        break;
    }
    console.log(value)
}
*/

// iterador é uma inteface para consumir um passo a passo.

for (let value of arr) {
    console.log(value);
};

const str = 'Digital Innovation One';

for (let value of str) {
    console.log(value);
};

const obj1 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
};

for (let value of obj1) {
    console.log(value);
}

const arr2 = [...obj1];

console.log(arr2);

//Generators - são funções com pausa e despausam valores a partir da interface do value e do done.

const obj2 = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj2) {
    console.log(value);
}