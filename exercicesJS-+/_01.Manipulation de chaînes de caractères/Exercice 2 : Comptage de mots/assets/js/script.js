// function count() {
//     let wordCountInput = document.getElementById('wordCountInput').value;

//     let wordCount = wordCountInput.trim().split(/\s+/).length;

//     console.log(wordCount);
// }


function count() {
    let wordCountInput = document.getElementById('wordCountInput').value.trim();

    let wordCount = wordCountInput === '' ? 0 : wordCountInput.split(/\s+/).length;

    document.getElementById('wordResult').textContent = `La phrase contient ${wordCount} mot(s)`;
}