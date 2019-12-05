// callbacks

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