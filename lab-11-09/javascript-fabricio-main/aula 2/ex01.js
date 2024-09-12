// começou a aula falando de event loop
//depois falou de settimeOut função Assíncrona

setTimeout(function(){
    console.log("1º funçao assíncrona: eu acho que vou executar primeiro") // 3º
})

setTimeout(function(){
    console.log("2º funçao assíncrona: eu acho que vou ser o segundo") // 5º
}, 100);

console.log("1º funçao sincrona: voces estao doidos eu sou prioridade") // 1º

setTimeout(function(){
    console.log("3º funçao assíncrona: eu acho que vou ser o terceiro ou o quarto")
}, 50); // 4º

console.log("2º funçao sincrona: sabem de nada inocente") // 2º

