function createPerson() {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);

    if (!nom || !prenom || isNaN(age)) {
        document.getElementById('personResult').textContent = 
            "Veuillez remplir toutes les informations correctement.";
        return;
    }

    const Personne = {
        nom,
        prenom,
        age,
        presentation() {
            return `Bonjour, je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans.`;
        }
    };

    document.getElementById('personResult').textContent = Personne.presentation();
}