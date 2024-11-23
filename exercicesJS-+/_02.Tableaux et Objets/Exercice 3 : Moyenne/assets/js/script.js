function moyenne() {
    const numbersInput = document.getElementById('numbersInput').value;

    const moyenne = numbersInput.split(',').map(nums => parseFloat(nums.trim()));

    if (moyenne.some(isNaN)) {
        document.getElementById('averageResult').textContent = "Entrez des notes valides";
        return;
    }

    const calc = moyenne.reduce((acc, num) => acc + num, 0);

    const total = calc / moyenne.length

    document.getElementById('averageResult').textContent = `La moyenne est de ${total.toFixed(2)}`;
}