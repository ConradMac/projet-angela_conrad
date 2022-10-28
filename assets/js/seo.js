// const text = document.querySelector(".page-seo");
// text.innerHTML = text.innerText
//     .split("")
//     .map(
//         (char, i) =>
//             `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
//     )
//     .join("");

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
