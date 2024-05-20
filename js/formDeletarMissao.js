document.getElementById('deleteBtn').addEventListener('click', function() {
    var deleteFormContainer = document.getElementById('deleteFormContainer');
    if (deleteFormContainer.classList.contains('hidden')) {
        deleteFormContainer.classList.remove('hidden');
    } else {
        deleteFormContainer.classList.add('hidden');
    }
});