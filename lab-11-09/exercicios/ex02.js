function apiBrasil() {
    
    const APIinput = document.getElementById('apiInput').value.trim().toLowerCase();

    fetch(`https://brasilapi.com.br/api/ddd/v1/021`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Estado Não Encontrado');
            }
            return response.json();
        })

        .then(data => {
            
            const infoDiv = document.getElementById('info');
            
           
        
            
           
            infoDiv.innerHTML = pokemonHTML;
        })
            
            

}