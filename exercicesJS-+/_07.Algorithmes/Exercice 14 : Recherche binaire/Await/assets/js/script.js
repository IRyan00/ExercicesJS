function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function binarySearchArray() {
    const input = document.getElementById('sortedArrayInput').value;
    const array = input.split(',').map(num => parseFloat(num.trim()));
    const target = parseFloat(document.getElementById('searchElementInput').value);

    if (array.some(isNaN) || isNaN(target)) {
        document.getElementById('searchResult').textContent = 
            "Veuillez entrer un tableau trié valide et un nombre valide.";
        return;
    }

    const index = binarySearch(array, target);
    document.getElementById('searchResult').textContent = 
        index !== -1 ? `Élément trouvé à l'index ${index}.` : `Élément non trouvé dans le tableau.`;
}