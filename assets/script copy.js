// * RECUPERATION DES IMAGES et TEXTES

let bannerImg = document.querySelector(".banner-img");

let text = document.querySelector("p");

let arrowleft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

let dots = document.querySelector ("div .dots");

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


//DOTS

for (let i = 0; i < slides.length; i++) {
  let span = document.createElement("span"); // Creation de spans
  span.classList.add("dot"); //ajout de la class dot à span 
  dots.appendChild(span); // Ajouter spans a la div
  

  if (i == 0) {
    span.classList.add("dot_selected");
  }


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
    if (visibleSlide >= slides.length - 1) visibleSlide = -1;  //verification du sens de défilement derniere image initialisation à -1 et incrementation ++
    visibleSlide++;
  } else {
    if (visibleSlide <= 0) visibleSlide = slides.length;  //verification du sens de défilement  premiere image initialisation à la taille du tableau et incrementation --
    visibleSlide--;
  }

  bannerImg.src = "./assets/images/slideshow/" + slides[visibleSlide].image;

  text.innerHTML = slides[visibleSlide].tagLine;

span=document.querySelector("div .dots")
  for (let i = 0; i <  span.length; i++) {
    if (i == visibleSlide) {
      span[i].classList.add("dot_selected");
    } 
    else {
      span[i].classList.remove("dot_selected");
    }
    
  }

  
}
