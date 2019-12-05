function produto(array) {
    var multi = 1;
    for (var i = 0; i < array.length; i++) {
        multi *= array[i];
    }
    return multi;
};

console.log(produto([1, 4, 7]));

function maisMenos(array) {
    var divisores = array.length
    var positivos = 0;
    var zerados = 0;
    var negativos = 0;
    for (var i=0; i < divisores; i++) {
        if (array[i] > 0) {
            positivos = positivos + 1;
        } else if (array[i] < 0) {
            negativos = negativos +1;
        } else {
            zerados = zerados + 1;
        }
    }
    positivos = positivos / divisores;
    zerados = zerados / divisores;
    negativos = negativos / divisores;
    return ([positivos, zerados, negativos]);
};

console.log(maisMenos([1, 2, 0, -1]));

function escada(tamanho) {
    var degrau = [];
    for(var i=1; i <= tamanho; i++){
        degrau.push(' '.repeat(tamanho-i) + '#' .repeat(i));
    }
    return degrau;
}

console.log(escada(5));