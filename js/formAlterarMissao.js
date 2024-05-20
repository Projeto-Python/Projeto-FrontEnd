document.getElementById('altBtn').addEventListener('click', function() {
    var altFormContainer = document.getElementById('altFormContainer');
    if (altFormContainer.classList.contains('hidden')) {
        altFormContainer.classList.remove('hidden');
    } else {
        altFormContainer.classList.add('hidden');
    }
});