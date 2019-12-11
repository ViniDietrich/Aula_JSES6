// Async - criar promises de forma simples e lidar com promises dentro de promises
// Await - aguarda outras promises serem resolvidas

const asyncTimer = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('14725')
    }, 1000);
})

const simpleFunc = async () => {
    const data = await asyncTimer();
    
    return data;
};

console.log(simpleFunc());

simpleFunc().then(data => {
    console.log(data);
});

/*
const errFunc = async () => {
    throw new Error ('Oh no!');
    return 56789;
}

errFunc().then(data =>{
    console.log(data);
}).catch (err => {
    console.log(err)
})*/