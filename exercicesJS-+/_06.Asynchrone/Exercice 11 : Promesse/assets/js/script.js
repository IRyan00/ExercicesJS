function randomMessagePromise() {
    const messages = [
        "Bonjour !",
        "Tout va bien se passer.",
        "Continuez à apprendre !",
        "JavaScript est amusant !",
        "Bonne journée !"
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * messages.length);
            resolve(messages[randomIndex]);
        }, 2000);
    });
}

function generateMessage() {
    const result = document.getElementById('result');
    result.textContent = "Chargement en cours...";
    
    randomMessagePromise().then((message) => {
        result.textContent = message;
    });
}