//Fetch - requisições para xml, json e api - era usado xml htp request - utilizado para rede

fetch('http://localhost:8080', {
    //method: 'post' , - configuração do Fetch
    //body: JSON.stringify
})
    .then(responseStream => {
        if(responseStream.status == 200) {
            return responseStream.
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
            console.log(data)
    }).catch(err => {
            console.log('Erro: ', err)
    })   
});