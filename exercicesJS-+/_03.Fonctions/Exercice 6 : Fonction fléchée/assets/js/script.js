const factorialArrow = n => (n === 0 || n === 1) ? 1 : n * factorialArrow(n - 1);

function calculateFactorialArrow() {
    const input = parseInt(document.getElementById('factorialInputArrow').value, 10);

    if (isNaN(input) || input < 0) {
        document.getElementById('factorialResultArrow').textContent = 
            "Veuillez entrer un nombre entier positif.";
        return;
    }

    const result = factorialArrow(input);
    document.getElementById('factorialResultArrow').textContent = 
        `La factorielle de ${input} est : ${result}`;
}