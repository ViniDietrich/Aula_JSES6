/*
var sumold = function(a, b){
    return a + b;
};

console.log(sumold(5, 5));

// Arrow Function

var sum = (a,b) => {
    return a+b;
}

console.log(sum(5, 15));

// Construir Objeto
var createObj = () => ({ teste: 123 });

console.log(createObj())

// Função construtora
function Car() {
    this.foo = 'bar';
}

console.log(new Car ());

// arrow construtora - Não funciona com o this


var Car1 = () => {
    this.foo = 'bar';
};

console.log(new Car1());


// Denominar a variavel antes

logzera ('teste')

var logzera = value => {
    console.log(value);
};*/

/*
var obj = {
    showContext: function showContext() {
        this.log('teste');

        //this = obj

        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000);
    },
    log: function log(value) {
       console.log(value);
    }
};

obj.showContext();
*/

/*
//lazy valuation
function randomNumber(){
    console.log('Gerando um numero aleatorio...');

    return Math.random() * 10;
}

console.log(randomNumber());

// definindo b, caso não tenha valor o b
function multiply (a = 2, b = a, c = randomNumber()) {
    return a * b * c;
};

console.log(multiply(5));
*/

// Forma clássica

var prop1 = 'Digital Innovation One'

var obj = {
    prop1: prop1
};
 
console.log(obj)

//Nova forma

var prop1 = 'Digital Innovation One'

var obj = {
    prop1
};
 
console.log(obj)

//também para funções

function method1 (){
    console.log('method called')
}

var obj = {
    method1
}
obj.method1()

//Outra forma

var obj = {
    sum: function sum(a,b) {
        return a+b
    }
};

console.log(obj.sum(1,5));

// Nova forma

var obj = {
    sum1(a, b){
        return a + b;
    }
};

console.log(obj.sum1(1, 5));

//Outro caso

var propName = 'teste';

var obj = {}

obj[propName + ' novo'] = 'prop value'

console.log(obj);

// No modo

var propName = 'teste';

var obj = {
    [propName + ' novo']: 'prop value'
};

console.log(obj);
