// 0/
console.log("Javascript est super.");

// 1/
console.log("Javascript c'est facile.");

// 2/
console.log(`C'est Lao Tseu qui a dit : "L'échec est le fondemant de la réussite."`);

// 3/

console.log("Afficher un \\ n'est pas si évident.");

// 4/
console.log("Ceci est la première ligne \nCeci est la deuxième ligne");

// 5/
console.log(`Un jour le JavaScript n'aura plus de secrets pour moi
Lire du code ne sera plus une gageure mais une joie
Mes doigts seront habitués à tous ces symboles particuliers
Et ma créativité de développeur pourra enfin s'exprimer`);



// Bogue 0/
let clientName = "Bob";

console.log(`Bonjour ` + clientName + `, aujourd'hui nous faisons une promo "la fidélité paye" !
Tom doit écrire une chaîne de caractère qui permet d'écrire cette phrase pour chaque client. Pour l'instant il essaye de faire fonctionner son code avec le prénom "Bob". `);

// 1/
let prenomClient = "Bob";

console.log("Bonjour " + prenomClient + `, 
    
        Aujourd'hui nous faisons une promo "la fidélité paye" ! `);