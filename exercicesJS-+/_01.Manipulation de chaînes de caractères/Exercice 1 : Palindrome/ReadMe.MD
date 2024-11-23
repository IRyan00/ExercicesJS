Exercice 1 : Palindrome

Énoncé :
Créer une interface utilisateur qui permet à l'utilisateur d'entrer une chaîne de caractères dans un champ de saisie. Lorsque l'utilisateur clique sur un bouton, vérifier si la chaîne est un palindrome (se lit de la même manière dans les deux sens) et afficher le résultat.


Indices pour la solution:

Un palindrome est une séquence de caractères qui se lit de la même manière dans les deux sens, c'est-à-dire de gauche à droite ou de droite à gauche. Par exemple :
"radar"
"madam"
"level"
"civic"

Pour créer cette fonctionnalité en JavaScript, voici quelques indices et idées :

    Récupérer la valeur de l'input : Utilisez document.getElementById() pour obtenir la chaîne de caractères entrée par l'utilisateur.
    Inverser la chaîne : Pour vérifier si un mot est un palindrome, vous devez comparer la chaîne originale avec sa version inversée. Utilisez la méthode JavaScript .split('') pour découper la chaîne en tableau, puis .reverse() pour inverser ce tableau, et enfin .join('') pour regrouper les éléments en une nouvelle chaîne.
    Comparer les deux chaînes : Si la chaîne d'origine est égale à sa version inversée, alors c'est un palindrome.