//Closure = Enclausalamento

//São uma das características mais poderosas e, ao mesmo tempo, mais complexas do javascript. Um closure é uma função que se "lembra" do seu ambiente léxico, mesmo após ter sido executada.

function criarContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    }
}
const meuContador = criarContador();
console.log(meuContador()); // 1 
console.log(meuContador()); // 2
console.log(meuContador()); // 3

// Quais são as aplicações das closures?
// 1 - Módulos: Criar modulos privados onde variáveis e funções internas não são expostas ao escopo global.
// 2 - Callbacks: Passar funções como argumentos para outras funções, preserva o contexto léxico.
// 3 - Data Binding - Atualização da interface do usuário reativamente.

