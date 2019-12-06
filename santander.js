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

function acontece(hrEntrada, minimo) {
    var naHora = 0;
    for(var i=0; i <= hrEntrada.length; i++){
        if (hrEntrada[i] <= 0) {
            naHora++;
        } 
    }
    return naHora >= minimo;
}

function aberturas (filtro, minimo){
    var naAula = [];
    for (var i = 0; i < filtro.length; i++){
    	naAula.push(acontece(filtro[i], minimo)); 
    }
    return naAula; 
}

var alunosDaSegunda = [10, -5, 3, 0];

console.log(acontece(alunosDaSegunda, 2));

function alturaArvoreUtopica(ciclos) {
    var crescimento = 1;
    for (var i=0; i < ciclos; i++){
        if (i%2){
            crescimento += 1;
        } else {
            crescimento *= 2;
        }
    }
    return crescimento;
}

console.log(alturaArvoreUtopica(5))

function fatorial (numero) {
    var fatorado = 1;
    for(var i=1; i <= numero; i++) {
        fatorado = fatorado * i;
    }
    return fatorado;
}

console.log(fatorial(4));