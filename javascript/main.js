const carousel = document.querySelector("#carrousels");

if (carousel) {
  const slides = [
    { image: "./assets/slideshow/slide1.webp", tagLine: "Atelier équipé pour les réparations moto." },
    { image: "./assets/slideshow/slide2.webp", tagLine: "Un espace de travail prêt pour le diagnostic." },
    { image: "./assets/slideshow/slide3.webp", tagLine: "Interventions rapides sur les pannes courantes." },
    { image: "./assets/slideshow/slide4.webp", tagLine: "Entretien, contrôle et remise en route." },
    { image: "./assets/slideshow/slide5.webp", tagLine: "Vente de motos neuves et d'occasion." },
    { image: "./assets/slideshow/slide6.webp", tagLine: "Pièces, conseils et suivi après intervention." },
    { image: "./assets/slideshow/slide7.webp", tagLine: "SAMA Réparation à Sanankoroba." },
    { image: "./assets/slideshow/slide8.webp", tagLine: "Service après-vente et accompagnement." },
    { image: "./assets/slideshow/slide9.webp", tagLine: "Essence et produits utiles pour la route." }
  ];

  const slideImage = document.createElement("img");
  const slideText = document.createElement("p");
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");
  const dotsContainer = document.createElement("div");
  let currentIndex = 0;

  slideImage.className = "slide-image";
  slideImage.loading = "eager";
  slideText.className = "slide-text";
  dotsContainer.className = "dots";

  prevButton.type = "button";
  prevButton.className = "prev";
  prevButton.textContent = "<";
  prevButton.setAttribute("aria-label", "Image précédente");

  nextButton.type = "button";
  nextButton.className = "next";
  nextButton.textContent = ">";
  nextButton.setAttribute("aria-label", "Image suivante");

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", `Afficher l'image ${index + 1}`);
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlide(currentIndex);
    });
    dotsContainer.appendChild(dot);
    return dot;
  });

  const updateSlide = (index) => {
    slideImage.src = slides[index].image;
    slideImage.alt = slides[index].tagLine;
    slideText.textContent = slides[index].tagLine;
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  carousel.append(slideImage, slideText, prevButton, nextButton, dotsContainer);
  updateSlide(currentIndex);

  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  }, 5000);
}
