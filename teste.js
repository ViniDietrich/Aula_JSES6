/*
function Pessoa (customproprieties){
    return{
        name: "Vinicius",
        lastname: "Dietrich"
    }
}

const p = Pessoa("Custom Name");
console.log(p);
*/

/*
function MyApp(){
    if(!MyApp.instance){
      return MyApp.instance = this;
    }

    return MyApp.instance;
}

const p = MyApp.call ({name: "guilherme"});

const p2 = MyApp.call({name: "custom name"});

console.log(p);

console.log(p2);
*/

/*
let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn();
}

function sum(a, b){
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3)));
*/

/*
class Observable{
    constructor(){
        this.Observables = [];
    }

    subscribe(fn){
        this.Observables.push(fn);
    }

    notify(data) {
        this.Observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.Observables = this.Observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log('subscribe 1: S{data}');
const logData2 = data => console.log('subscribe 2: S{data}');
const logData3 = data => console.log('subscribe 3: S{data}');

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify("notified 1");

o.unsubscribe(logData2);

o.notify("notified 2")
*/

let name = 'default';

function getname(){
    return name;
}
function setname(newname){
    name = newname;
}


module.exports = {
    getname,
    setname
};

