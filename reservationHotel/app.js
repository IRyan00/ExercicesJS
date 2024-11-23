// Base de données des comptes (tableau d'objets)
const utilisateurs = [
    { nom: 'Alice', numeroReservation: '12345', codeAcces: 'abc123', solde: 100 },
    { nom: 'Bob', numeroReservation: '67890', codeAcces: 'xyz789', solde: 1000 },
    { nom: 'Charlie', numeroReservation: '11223', codeAcces: 'def456', solde: 300 }
];


function reserverChambre() {
    const numeroReservationEntre = document.getElementById('numeroReservation').value;

    const codeAccesEntre = document.getElementById('codeAcces').value;

    const messageResultat = document.getElementById('messageResultat');

    const user = utilisateurs.find(u => u.numeroReservation === numeroReservationEntre && u.codeAcces === codeAccesEntre);

    if (!user) {
        messageResultat.textContent = "Numéro de réservation ou code d'acces invalide";
        messageResultat.style.color = "black";
        messageResultat.className = "alert alert-danger mt-3"
        return;
    }

    if (user.solde < 200) {
        messageResultat.textContent = "Erreur : vous n'avez pas assez de fonds";
        messageResultat.style.color = "red";
        messageResultat.className = "alert alert-danger mt-3";
    }

    else {
        user.solde -= 200
        messageResultat.textContent = "Bonjour " + user.nom + " réservation effectuée. Nouveau solde : " + user.solde + " €";
        messageResultat.className = "alert alerte-succes mt-3";
    }
}