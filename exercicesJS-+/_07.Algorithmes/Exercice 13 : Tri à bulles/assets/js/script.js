function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Échange des valeurs
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

function bubbleSortArray() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(num => parseFloat(num.trim()));

    if (array.some(isNaN)) {
        document.getElementById('sortedArray').textContent = 
            "Veuillez entrer un tableau valide de nombres.";
        return;
    }

    const sorted = bubbleSort(array);
    document.getElementById('sortedArray').textContent = 
        `Tableau trié : [${sorted.join(', ')}]`;
}