/*
const persons = Array.of('John', 'Kris', 'Mat', 'Jonah')

console.log(persons)

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto')

console.log(numbersAndStrings);
*/

/*
const arr = Array(3);

console.log(arr)

const personsList = Array('John', 'Kris', 'Mat', 'Jonah')

console.log(personsList)
*/

/*
const divs = document.querySelectorAll('div')

console.log(divs)

const divsArray = Array.from(divs)

console.log(divsArray)
*/

/*
const frutas = ['melancia', 'banana'];

const frutasLength = frutas.push('Laranja');

console.log(frutasLength)

console.log(frutas.length)

console.log(frutas)

const removedItem = frutas.pop()

console.log(removedItem);

console.log(frutas);

const furtaslengh = frutas.unshift("acerola")

console.log(furtaslengh)

console.log(frutas.length)

console.log(frutas)

const removeItem = frutas.shift()

console.log(removeItem);

console.log(frutas);

const salgados = ['coxinha','bolinha de queijo', 'empada']

const alimentos = frutas.concat(salgados);

console.log(alimentos)

console.log(salgados);

console.log(frutas);

const Pedido1 = alimentos.slice(1,4)

console.log(Pedido1)

const Pedido2 = alimentos.slice(-1)

console.log(Pedido2)

const TabelaNova = alimentos.splice(0,0,'acerola', 'mamão')

console.log(alimentos)

const TabelaMaisNova = alimentos.splice(6)

console.log(alimentos)

const arr = [1,2,3,4,5]

console.log(arr)

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

frutas.push('acerola', 'mamão', 'Laranja', 'maçã')

frutas.forEach((frutas, index) => {
    console.log(`${index}: ${frutas}`)
});

frutas.forEach((frutas, index) => {
    console.log(`${index}: ${frutas}: ${arr}`)
});

frutas.map((index, frutas) => {
    console.log(`${index}: ${frutas}`)
});
*/

/*
const idades = [28,34,[35,60,70,40]];

console.log();
*/

const idades = [28,34,35,60,70,40];

const old = idades.map(value => [value * 2]);

console.log(old)

const oldIterator = old.keys();

console.log(oldIterator.next());
console.log(oldIterator.next());
console.log(oldIterator.next());
console.log(oldIterator.next());
console.log(oldIterator.next());
console.log(oldIterator.next());
console.log(oldIterator.next());

const oldIterator1 = old.values();

console.log(oldIterator1.next());
console.log(oldIterator1.next());
console.log(oldIterator1.next());
console.log(oldIterator1.next());
console.log(oldIterator1.next());
console.log(oldIterator1.next());
console.log(oldIterator1.next());