document.addEventListener('DOMContentLoaded', function() {
    // URL da API BrasilAPI para obter a lista de estados
    const url = 'https://brasilapi.com.br/api/ibge/uf/v1';

    // Função para preencher o seletor com os estados
    function populateStates() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const select = document.getElementById('estado-select');
                data.forEach(estado => {
                    const option = document.createElement('option');
                    option.value = estado.sigla;
                    option.textContent = estado.nome;
                    select.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Erro ao obter os estados:', error);
            });
    }

    // Chama a função quando o DOM estiver totalmente carregado
    populateStates();
});
