document.addEventListener('keydown', function(event) {
    const keyDisplay = document.getElementById('keyDisplay');
    keyDisplay.textContent = `Vous avez appuyé sur : "${event.key}"`;
});