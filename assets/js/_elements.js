const titreSpans = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const logo = document.querySelector(".logo");
const medias = document.querySelectorAll(".bulle");
const l1 = document.querySelector(".l1");
const l2 = document.querySelector(".l2");
const logoMedias = document.querySelectorAll(".logo-medias"); // c'est une div qui contient les icones de reseaux sociaux

onload = (e) => {
    l1.style.display = "block";
    l2.style.display = "block";
    logo.style.display = "block";

    for (let i = 0; i < logoMedias.length; i++) {
        logoMedias[i].style.display = "block";
    }

    console.log("ça load .....");
    const TL = gsap.timeline({ paused: true });
    TL.staggerFrom(
        titreSpans,
        1,
        { top: -50, opacity: 0, ease: "power2.out" },
        0.3
    )
        .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
        .staggerFrom(l1, 1, { width: 0, ease: "power2.out" }, "-=2")
        .staggerFrom(l2, 1, { width: 0, ease: "power2.out" }, "-=2")
        .staggerFrom(
            logo,
            0.4,
            { transform: "scale(0)", ease: "power2.out" },
            "-=2"
        )
        .staggerFrom(
            medias,
            1,
            { right: -200, ease: "power2.out" },
            0.3,
            "-=1"
        );

    TL.play();
};
