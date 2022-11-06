document.addEventListener("DOMContentLoaded", function (event) {
    const scroll = document.querySelector("#global-test");
    console.log(scroll.offsetTop);
    const block_gauche_list = document.querySelectorAll(".before_left");
    const block_droit_list = document.querySelectorAll(".before_right");

    window.addEventListener("scroll", function () {
        // au scroll, faire apparaitre le block animated-block-left et right.

        // si le scroll est superieur a la position de global-test
        for (let i = 0; i < block_gauche_list.length; i++) {
            // pour chaque element de la liste
            if (
                window.scrollY > block_gauche_list[i].offsetTop - 300 &&
                !block_gauche_list[i].classList.contains("animated-block-left")
            ) {
                block_gauche_list[i].classList.add("animated-block-left"); // ajouter la class animated-block-left
                console.log("un bloc gauche apparait");
            }
        }

        for (let b = 0; b < block_droit_list.length; b++) {
            console.log("coucou");
            if (
                window.scrollY > block_droit_list[b].offsetTop - 300 &&
                !block_droit_list[b].classList.contains("animated-block-right")
            ) {
                block_droit_list[b].classList.add("animated-block-right"); // ajouter la class animated-block-left
                console.log("un bloc droit apparait");
            }
        }
    });
});

// Code pour l'accordéon SEO

// let label permet de récupérer tous les éléments ayant la classe label
let titre = document.querySelectorAll(".accordion-block");

//la fonction qui permet d'ajouter la classe active à l'élément cliqué
titre.forEach((e) => {
    e.addEventListener("click", () => {
        removeClass();
        e.classList.toggle("active");
    });
});

// cette fonction permet de supprimer la classe active de tous les éléments
function removeClass() {
    titre.forEach((e) => {
        e.classList.remove("active");
    });
}
