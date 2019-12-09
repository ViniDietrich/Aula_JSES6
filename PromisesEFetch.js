/*
// callbacks - como era feito antes

function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data')
    }, 1000);
}

function doOutherThing(callback) {
    setTimeout(function() {
        //did outher thing
        callback('Second data');
    }, 1000);
}

function doAll () {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            
            try {
                doOutherThing(function(data2) {
                    var processedData2 = data2.split("");
                    
                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch(err) {
                        // handle error
                    }
                });
            } catch(err) {
                // handle error
            }    
        });
    } catch(err) {
        // handle error
    }
}

//console.log(doAll());

// promises - Ecmas 6

const doSomethingPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First data')
    }, 1000);
});

const doOutherThingPromise = () =>
new Promise((resolve, reject) => {
    throw new Error ('Something went wrong');
    setTimeout(function() {
        //did outher thing
        resolve('Second data');
    }, 1000);
});

const doAnotherThingPromise = () =>
new Promise((resolve, reject) => {
    setTimeout(function() {
        //did another thing
        resolve('Third data');
    }, 1000);
});

console.log(doSomethingPromise);

doSomethingPromise()
.then(data => {
    console.log(data.split(''));
    return doAnotherThingPromise;
})
.then(data2 => console.log(data2.split('')))
.catch( error => console.log('Ops', error));

doOutherThingPromise()
.then(data => console.log(data.split('')))
.catch(error => console.log(error));

// Promise pode ter três status: Pending (pendente), Fulfilled (feito), Rejected (rejeitada)

*/

const facaAlgoPromise = () =>
new Promise((resolve, reject) => {
    setTimeout (function() {
        resolve ('Primeiro dado');
    }, 1010);
});

const facaOutraCoisaPromise = () => 
new Promise((resolve, reject) => {
    //throw new Error('Eita')
    setTimeout(function() {
        resolve("Segundo Dado");
    }, 1000);
});

Promise.all([facaAlgoPromise(), facaOutraCoisaPromise()]).then((data) =>{
    console.log(data[0].split(''));
    console.log(data[1].split(''))
}).catch(err => {
    console.log(err)
});

Promise.race([facaAlgoPromise(), facaOutraCoisaPromise()]).then((data) => {
    console.log(data);
});

/*
facaAlgoPromise()
.then(data => { 
    console.log(data.split(''));
    return facaOutraCoisaPromise();
})
.then(data2 => console.log(data2.split('')))
.catch(error => console.log('Ops', error));
*/