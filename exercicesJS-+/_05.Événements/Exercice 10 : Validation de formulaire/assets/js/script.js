const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const feedback = document.getElementById('feedback');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        feedback.textContent = "Adresse email valide.";
        feedback.className = "success";
    } else {
        feedback.textContent = "Veuillez entrer une adresse email valide.";
        feedback.className = "error";
    }
});