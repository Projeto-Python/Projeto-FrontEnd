document.getElementById("deleteFormContainer").addEventListener('submit', function(event) {
    event.preventDefault();

    var id = document.getElementById('id').value;

    var dados = {
        id: id
    }
    console.log(dados)
    // Realizar requesição AJAX para API
    fetch("http://127.0.0.1:5000/deletar", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    // Tratamento da resposta da requisição
    .then(response => {
        console.log('Sucesso ao deletar a missão');
        console.log(response.text());
    })
    .catch(error => {
        console.log('Falha ao deletar missão');
        console.log('Error:', error);
    })
});