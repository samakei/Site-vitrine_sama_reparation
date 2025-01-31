// Déclaration des slides
const slides = [
  { image: "/assets/slideshow/slide1.jpg", tagLine: "Atelier équipé" },
  { image: "/assets/slideshow/slide2.jpg", tagLine: "Local professionnel" },
  { image: "/assets/slideshow/slide3.jpg", tagLine: "Réparations rapides" },
  { image: "/assets/slideshow/slide4.jpg", tagLine: "Entretien expert" },
  { image: "/assets/slideshow/slide5.jpg", tagLine: "Motos personnalisées" },
  { image: "/assets/slideshow/slide6.jpg", tagLine: "Passion & performance" },
  { image: "/assets/slideshow/slide7.jpg", tagLine: "SAMA Réparation" },
  { image: "/assets/slideshow/slide8.jpg", tagLine: "Votre satisfaction, notre priorité" },
];

// Sélection des éléments HTML
const carrousel = document.querySelector("#carrousels");
const slideImage = document.createElement("img");
const slideText = document.createElement("p");
const prevButton = document.createElement("button");
const nextButton = document.createElement("button");
const dotsContainer = document.createElement("div");

let currentIndex = 0; // Index actuel du slide

// Configuration des boutons
prevButton.innerText = "❮";
nextButton.innerText = "❯";
prevButton.classList.add("prev");
nextButton.classList.add("next");

// Configuration des éléments
slideImage.classList.add("slide-image");
slideText.classList.add("slide-text");
dotsContainer.classList.add("dots");

// Ajout des éléments au DOM
carrousel.appendChild(slideImage);
carrousel.appendChild(slideText);
carrousel.appendChild(prevButton);
carrousel.appendChild(nextButton);
carrousel.appendChild(dotsContainer);

// Génération des dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

// Fonction pour mettre à jour le slide
function updateSlide(index) {
  slideImage.src = slides[index].image;
  slideText.innerText = slides[index].tagLine || "";
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Gestion des boutons
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});

// Gestion des dots
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide(currentIndex);
  });
});

// Initialisation du carrousel
updateSlide(currentIndex);

// Défilement automatique toutes les 5 secondes
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
}, 5000);
// fin de carrousel


// Déclaration lire plus
document.querySelector(".toggle-btn").addEventListener("click", function() {
    const content = document.querySelector(".hidden-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
    this.textContent = content.style.display === "none" ? "Lire plus" : "Lire moins";
});
// fin