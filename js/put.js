document.getElementById("altFormContainer").addEventListener('submit', function(event) {
    event.preventDefault();

    var id = document.getElementById("altId").value;
    var name = document.getElementById("altName").value;
    var releaseDate = document.getElementById("altReleaseData").value;
    var endpoint = document.getElementById("altEndpoint").value; // Alterado para "altEndpoint"
    var missionState = document.getElementById("altMissionState").value;
    var crew = document.getElementById("altCrew").value;
    var payload = document.getElementById("altPayload").value;
    var duration = document.getElementById("altDuration").value;
    var cost = document.getElementById("altCost").value;
    var status = document.getElementById("altStatus").value;

    var dados = {
        id: id,
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

    console.log(dados);
    // Realizar requesição AJAX para API
    fetch("http://127.0.0.1:5000/atualizar", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    // Tratamento da resposta da requisição
    .then(response => {
        console.log('Sucesso ao atualizar a missão');
        console.log(response.text());
    })
    .catch(error => {
        console.log('Erro ao atualizar a missão');
        console.log("Error:", error);
    });
});