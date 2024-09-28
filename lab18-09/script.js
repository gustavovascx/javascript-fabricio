fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // 
    .then(data => {
        const div = document.getElementById('container')
        data.forEach(post => {
            
            const paragrafo = document.createElement('p')
            paragrafo.innerText = post.title
            div.appendChild(paragrafo)
        })
    })
    .catch(error => console.log('erro', error))