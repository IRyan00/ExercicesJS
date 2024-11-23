function reverse() {
    //récupérer la valeur entrée
    const palindromeInput = document.getElementById('palindromeInput').value;

    //diviser la chaine en tableau puis l'inverser et la remettre en chiane
    const palindrome = palindromeInput.split('').reverse().join('');

    //comparaison
    if (palindromeInput === palindrome) {
        console.log('TRUE');
        document.getElementById('result').textContent = 'TRUE'
    } else {
        console.log('FALSE');
        document.getElementById('result').textContent = 'FALSE'
    }

    // document.getElementById('result').textContent = palindrome ? `"${palindromeInput}" est un palindrome : "${palindromeInput}" n'est pas un palindrome`
}