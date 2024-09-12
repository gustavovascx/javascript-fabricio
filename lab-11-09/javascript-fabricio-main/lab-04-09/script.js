function buscaPokemon() {
    
    const pokemonInput = document.getElementById('pokemonInput').value.trim().toLowerCase();

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            
            const infoDiv = document.getElementById('info');
            
           
            const pokemonHTML = `
                <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height / 10} m</p>
                <p>Peso: ${data.weight / 10} kg</p>
            `;
            
            // Insert content into the info div
            infoDiv.innerHTML = pokemonHTML;
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
            document.getElementById('info').innerHTML = '<p>Erro! Procure Novamente</p>';
        });
}
