//var - escopo funcional: variaveis declaradas com var são elevadas()
// para o topo do escopo da função , mesmo que sejam declaradas posteriormente
// pode ser redeclarada e reatribuida dentro do mesmo escopo.

//let = escopo de bloco: variaveis declaradas com let são limitadas ao escopo de bloco em que foram declaradas(if, for, while)
//não podem ser redeclaradas, mas podem ser reatribuidas.

//const = escopo de bloco - não pode ser redeclarada nem reatribuida após a inicialização.


function exemplo(){
    var x = 1;
    let y = 2;
    const z = 3;
    if(true){
        var x = 10;
        let y = 20;
        console.log(y);
        const z = 30;
    }
    console.log(x, y, z);
}

exemplo();