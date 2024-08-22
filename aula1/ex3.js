const pessoa = {
    nome: "gustavo", 
    idade: 30,
    genero: 'M',
    falar: () => {
        return `O ${pessoa.nome} falou`;
    }
}

console.log(pessoa.nome);
console.log(pessoa.falar())