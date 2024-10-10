function foraFuncao() {
    let foraVariavel = "Sou externa"
    function dentroFuncao() {
        let dentroVariavel = "Sou interno"
        console.log(foraFuncao)
        console.log(dentroFuncao)
    }
    foraFuncao();
    dentroFuncao()
}





