function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateFactorial() {
    const input = parseInt(document.getElementById('factorialInput').value, 10);

    if (isNaN(input) || input < 0) {
        document.getElementById('factorialResult').textContent = 
            "Veuillez entrer un nombre entier positif.";
        return;
    }

    const result = factorial(input);
    document.getElementById('factorialResult').textContent = 
        `La factorielle de ${input} est : ${result}`;
}