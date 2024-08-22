function Display(algo) {
    document.getElementById("demo").innerHTML = algo;
}

function mostraAi(a, b, Callback) {
    let resultado = a + b;
    Callback(resultado); // Função que vai receber o Resultado de A + B 
}

mostraAi(5, 20, Display)