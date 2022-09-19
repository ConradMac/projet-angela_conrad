// let label permet de récupérer tous les éléments ayant la classe label
let label = document.querySelectorAll(".box");

//la fonction qui permet d'ajouter la classe active à l'élément cliqué
label.forEach((e) => {
    e.addEventListener("click", () => {
        removeClass();
        e.classList.toggle("active");
    });
});

// cette fonction permet de supprimer la classe active de tous les éléments
function removeClass() {
    label.forEach((e) => {
        e.classList.remove("active");
    });
}
