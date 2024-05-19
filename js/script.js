document.getElementById('showFormBtn').addEventListener('click', function() {
    let formContainer = document.getElementById('formContainer');
    if (formContainer.classList.contains('hidden')) {
        formContainer.classList.remove('hidden');
    } else {
        formContainer.classList.add('hidden');
    }
});