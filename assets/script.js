// * RECUPERATION DES IMAGES

let bannerImg = document.querySelector(".banner-img");
console.log(bannerImg);

let text = document.querySelector("p");
console.log(text);

let arrowleft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// let dots = document.querySelectorAll(".dot");


//* IMAGES EN TABLEAUX

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
console.log(slides);

//DOTS
let dots = [];//crée une liste vide
for (let i = 0; i < slides.length; i++) {
  let span = document.createElement("span"); // Creation de span avec class dot
  span.classList.add("dot"); //ajout de la class dot à span
  dots.push(span);//ajoute l'élément span à la liste dots

  let div = document.querySelector(".dots"); // Récupérer un élément parent existant
  div.appendChild(span); // Ajouter le nouvel élément au parent di dots
}

//FONCTION
let visibleSlide = 0;

arrowRight.addEventListener("click", () => {
  changeSlide("next");
});

arrowleft.addEventListener("click", () => {
  changeSlide("previous");
});

function changeSlide(direction) {
  console.log(direction);
  if (direction === "next") {
    if (visibleSlide >= slides.length - 1) visibleSlide = -1;
    visibleSlide++;
  } else {
    if (visibleSlide <= 0) visibleSlide = slides.length;
    visibleSlide--;
  }

  bannerImg.src = "./assets/images/slideshow/" + slides[visibleSlide].image;

  text.innerHTML = slides[visibleSlide].tagLine;

  for (let i = 0; i < dots.length; i++) {
    if (i == visibleSlide) {
      dots[i].classList.add("dot_selected");
    } else {
      dots[i].classList.remove("dot_selected");
    }
  }
}
