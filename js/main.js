document.getElementById("formContainer").addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var releaseDate = document.getElementById("releaseData").value;
    var endpoint = document.getElementById("endpoint").value;
    var missionState = document.getElementById("missionState").value;
    var crew = document.getElementById("crew").value;
    var payload = document.getElementById("payload").value;
    var duration = document.getElementById("duration").value;
    var cost = document.getElementById("cost").value;
    var status = document.getElementById("status").value;

    var dados = {
        name: name,
        release_date: releaseDate,
        endpoint: endpoint,
        mission_state: missionState,
        crew: crew,
        payload: payload,
        duration: duration,
        cost: cost,
        status: status
    }
    console.log(dados)
    // Realizar requesição AJAX para API
    fetch("http://127.0.0.1:5000/criar", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    // Tratamento da resposta da requisição
    .then(response => {
        console.log('Sucesso ao precessar a requisição')
        console.log(response.text());
    })
    .catch(error => {
        console.log('Erro ao precessar a requisição')
        console.log("Error:", error);
    });
});