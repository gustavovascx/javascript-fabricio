// Como o this se comporta em diferentes contextos?

//1 - Funções como métodos de objetos
//Quando uma função ela é chamada como método de um objeto, o THIS dentro dessa função se refere ao objeto que é chamou.

/*const pessoa = {
    nome: "Gustavo",
    idade: 22,
    saudar: function(){
        console.log(`meu nome é ${this.nome} e tenho: ${this.idade} anos`)
    }
}

pessoa.saudar();
*/

//2 - Funções chamadas como funções normais
//Se uma função não é chamada como método de um objeto, o valor de this depende do modo estrito.
//Modo não estrito: this se refere ao objeto global (window)
//Modo estrito: this é undefined (ajuda a tornar erros incomuns)

//"use strict";

/*
function exemplo() {
    console.log(this)
}

exemplo()
*/

// 3 - Funções chamadas com call() e apply()
// Esses métodos permitem que você especifique manualmente o valor de this para uma função

/*function minhaFuncao(arg1, arg2) {
    console.log(this, arg1, arg2);
}

const obj = {nome:"Gustavo"};
minhaFuncao.call(obj, "olá", "mundo")
*/

// 4 - Funções dentro de construtor

/*class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const pessoa1 = new Pessoa("Gustavo", 20);
console.log(pessoa1);
*/

//5 - Funções em eventos
// O valor de this em funções de eventos, pode variar dependendo do elemento que disparou o evento

/* const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    console.log(this)
});
*/

/* const pessoa = {
    nome: "Gustavo",
    idade: 22,
    saudar: ()=>{
        console.log(`meu nome é ${this.nome} e tenho: ${this.idade} anos`)
    } // da merda se usar =>{} (ela não possuem seu propio this) (foi projetada pra ter comportamento simples e consistente em relação ao this(que é sempre determinado lexicamente pela posição do código))
}

pessoa.saudar(); */

//Progamação Funcional - Conceitos Chaves
//Função de Ordem Superior - High Order Function
// São funções que podem receber outras funções como argumentos ou retornar funções. É a base da progamação funcional. Permite criar códigos mais flexiveis e reutilizaveis.
//Imutabilidade
//Dados não podem ser alterados após sua criação. Em vez de modificar um valor existente, criamos um novo valor com a mudança desejada. Isso ajuda a evitar Bugs e tornar o código mais fácil de raciocinar.
// MAP < FILTER < REDUCE
//São métodos de Array que permitem manipular dados de forma funcional retornando novos arrays sem modificar o conteudo original

//Funções puras

//Sempre vai retornar a mesma saída, dado o mesmo resultado e processamento.

// Funções de Ordem Superior

/*function mapear(array, funcao){
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcao(array[i]));
    }
    return resultado;
}

const numeros = [1,2,3,4,5];
const dobro = numeros.map(numero => numero*2)
console.log(dobro); */

//Imutabilidade
//A imutabilidade é um principio da progamação funcional. Ao invés de modificar um objeto existente criamos um novo objeto com as alterações desejadas. Isso torna o código mais flexivel mais previsivel e evita efeitos colaterais indesejados


const frutas1 = ["Banana", "Maça", "Pera"]
const frutas2 = [...frutas1, "Uva"]
console.log(frutas1)
console.log(frutas2)