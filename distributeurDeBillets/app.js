// Base de données des comptes (tableau d'objets)
const comptes = [
    { nom: 'Tom', numeroCarte: '123456789', codePin: '0000', solde: 1000 },    // Compte de Tom avec numÃ©ro de carte, code PIN et solde initial
    { nom: 'Omar', numeroCarte: '987654321', codePin: '1234', solde: 500 },     // Compte de Omar avec numÃ©ro de carte, code PIN et solde initial
    { nom: 'Arnaud', numeroCarte: '111122223', codePin: '4321', solde: 2000 },   // Compte de Arnaud avec numÃ©ro de carte, code PIN et solde initial
    { nom: "Alice", numeroCarte: "123456789", codePin: "2743", solde: 2000 },
    { nom: "Bob", numeroCarte: "987654321", codePin: "1490", solde: 3787 },
    { nom: "Charlie", numeroCarte: "456789012", codePin: "5678", solde: 1543 },
    { nom: "David", numeroCarte: "789012345", codePin: "6734", solde: 2698 },
];

function effectuerRetrait() {
    const numeroCarteEntree = document.getElementById('numeroCarte').value;

    const codePinEntree = document.getElementById('codePin').value;

    const montantDemande = parseFloat(document.getElementById('montantRetrait').value);

    const messageResultat = document.getElementById('messageResultat');

    const compte = comptes.find(c => c.numeroCarte === numeroCarteEntree && c.codePin === codePinEntree);

    if (!compte) {
        messageResultat.textContent = "Erreur : numÃ©ro de carte ou code PIN invalide";
        messageResultat.style.color = "black";
        messageResultat.className = "alert alert-danger mt-3";
        return;
    }

    if (montantDemande > compte.solde) {
        messageResultat.textContent = "Erreur : fonds insuffisants";
        messageResultat.style.color = "red";
        messageResultat.className = "alert alert-danger mt-3";
    }

    else if (montantDemande > 0) {
        compte.solde -= montantDemande;
        messageResultat.textContent = "Bonjour " + compte.nom + ", retrait de " + montantDemande + "€ réussi. Nouveau solde : " + compte.solde + " €";
        messageResultat.className = "alert alerte-succes mt-3"
    }

    else {
        messageResultat.textContent = "Erreur : montant non valide";
        messageResultat.style.color = "red";
        messageResultat.className = "alert alert-danger mt-3";
    }

}