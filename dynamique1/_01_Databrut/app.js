const users = [
    { id: 1, nom: "Dupont", prenom: "Jean", pseudo: "jdupont", photo: "https://via.placeholder.com/150" },
    { id: 2, nom: "Martin", prenom: "Sophie", pseudo: "smartin", photo: "https://via.placeholder.com/150" },
    { id: 3, nom: "Leroy", prenom: "Paul", pseudo: "pleroy", photo: "https://via.placeholder.com/150" },
    { id: 3, nom: "Leroy", prenom: "Paul", pseudo: "pleroy", photo: "https://via.placeholder.com/150" },
];

// Tableau des articles
const articles = [
    {
        id: 1,
        titre: "Les Avancées de la Technologie",
        photo: "https://via.placeholder.com/300x150",
        paragraphe: "La technologie continue de révolutionner notre quotidien, offrant des solutions innovantes."
    },
    {
        id: 2,
        titre: "L'importance de l'Écologie",
        photo: "https://via.placeholder.com/300x150",
        paragraphe: "Les efforts pour préserver l'environnement n'ont jamais été aussi cruciaux qu'aujourd'hui."
    },
    {
        id: 3,
        titre: "Le Futur de l'Éducation",
        photo: "https://via.placeholder.com/300x150",
        paragraphe: "L'éducation évolue grâce aux outils numériques, permettant une plus grande accessibilité."
    },
];

utilisateurs()

arti()

function utilisateurs() {
    let card = document.getElementById('card');

    users.forEach(user => {
        card.innerHTML += `
<div class="card p-0" style="width: 18rem;">
  <img src="${user.photo}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.nom} ${user.prenom}</h5>
    <p class="card-text">${user.pseudo}</p>
    <a href="#" onclick="showUserProfile(${user.id})" class="btn btn-primary">View profile</a>
  </div>
</div>`
    });
}

function showUserProfile(userId) {
    let monUser = users.find(({ id }) => id === userId);
    alert(`${monUser.pseudo}`);
    window.location.href = `./profileDetail.html?id=${monUser.id}`;
}

function arti() {
    let art = document.getElementById('art');

    articles.forEach(articl => {
        art.innerHTML += `
<div class="card p-0" style="width: 18rem;">
  <img src="${articl.photo}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${articl.titre}</h5>
    <p class="card-text">${articl.paragraphe}</p>
    <a href="#" onclick="showArticle(${articl.id})" class="btn btn-primary">View article</a>
  </div>
</div>`
    });
}

function showArticle(artId) {
    let monArt = articles.find(({ id }) => id === artId);
    alert(`${monArt.paragraphe}`);
    window.location.href = `./articleDetail.html`;
}