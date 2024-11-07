// 0/
// let taille = 65;
// let age = 4;

// console.log(taille < 70 && age < 3);


// 2/
// let age2 = 15;
// let taille2 = 170;
// let poids2 = 79;

// console.log(age2 > 16 || taille2 > 150 && poids2 < 80);


function conditions() {
    var cond = document.getElementById("form");

    let n1 = form.age.value;
    let n2 = form.taille.value;
    let n3 = form.poids.value;

    if (n1 > 16 || n2 > 150 && n3 < 80) {
        document.getElementById("toto").innerHTML = "Informations enregistrées";
        return true;
    } else {
        document.getElementById("toto").innerHTML = "Valeurs incorrectes, veuillez les changer";
        return false;
    }
}


// 3/
// let age3 = 10;
// let taille3 = 110;
// let poids3 = 58;

// console.log(age3 > 12 || taille3 < 120 && (poids3 < 40 || poids3 < 60));
