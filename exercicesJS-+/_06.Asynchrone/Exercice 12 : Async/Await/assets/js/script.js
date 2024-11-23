function randomMessagePromise() {
    const messages = [
        "Bonjour Async/Await !",
        "Vous progressez bien.",
        "Continuez comme ça !",
        "JavaScript vous adore.",
        "Bonne chance avec le code !"
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * messages.length);
            resolve(messages[randomIndex]);
        }, 2000);
    });
}

async function generateMessageAsync() {
    const result = document.getElementById('resultAsync');
    result.textContent = "Chargement en cours...";
    
    try {
        const message = await randomMessagePromise();
        result.textContent = message;
    } catch (error) {
        result.textContent = "Une erreur est survenue : " + error.message;
    }
}