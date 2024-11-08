let limiteAge = 18;
let limitePoids = 120;
let limiteAgeEnfant = 12;
let limitePoidsEnfant = 50;


// 0/

if (limiteAge >= 18 && limitePoids < 120) {
    console.log("Vous pouvez monter dans ce manège");
} else {
    console.log("Vous ne pouvez pas monter dans ce manège");
}


// 1/ 

if (limitePoidsEnfant < 50 || limiteAgeEnfant <= 12) {
    console.log("Bienvenue dans ce nouveau manège pour les enfants !");
} else {
    console.log("Désolé mais tu es trop grand pour monter dans ce manège.");
}


// 2/

//Je ne trouve pas pourquoi la première condition ne s'affiche pas mais les autres oui

if (limiteAge >= 18 && limitePoids < 120) {
    console.log("Bienvenue dans le manège !");
} else if (limiteAge < 18 && limitePoids > 120) {
    console.log("Vous devriez vite arrêter de manger des frites !");
} else if (limitePoids > 120) {
    console.log("Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.");
} else if (limiteAge < 18) {
    console.log("Vous ne pouvez pas monter : ce manège est réservé aux adultes.");
}


//bogue 0/

let zero = 0;

if (zero === 0) {
    console.log("La variable zero vaut bien zéro");
} else {
    console.log("Oops ! Il semble y avoir un bogue !");
}


// 1/

let reponse = 42;
let condition = false;

if (condition === true) {
    reponse = 1337;
}

console.log("La réponse est " + reponse);


// 2/

let reponse1 = 1337;
let condition1 = false;

if (reponse1 === 42) {
    console.log("La réponse est toujours " + reponse);
} else {
    console.log("Seule cette ligne devrait s'afficher");
}