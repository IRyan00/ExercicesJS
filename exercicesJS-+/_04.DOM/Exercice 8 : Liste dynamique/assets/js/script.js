function addItem(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const input = document.getElementById('itemInput');
    const newItem = input.value.trim();

    if (newItem) {
        const ul = document.getElementById('itemList');
        const li = document.createElement('li');
        li.textContent = newItem;
        ul.appendChild(li);

        input.value = ''; // Réinitialise le champ de saisie
    }
}