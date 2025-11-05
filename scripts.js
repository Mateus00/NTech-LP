const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel-track");
const items = carousel.querySelectorAll(".carousel-item");
const nav = carousel.querySelector(".carousel-nav");

let currentIndex = 0;

// Cria botões de navegação automaticamente
items.forEach((_, index) => {
  const btn = document.createElement("button");
  btn.addEventListener("click", () => moveCarousel(index));
  nav.appendChild(btn);
});

const navButtons = nav.querySelectorAll("button");

// Move o carrossel
function moveCarousel(index) {
  currentIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  updateNav();
}

function updateNav() {
  navButtons.forEach((btn, i) => btn.classList.toggle("active", i === currentIndex));
}

// Autoplay
function autoPlay() {
  currentIndex = (currentIndex + 1) % items.length;
  moveCarousel(currentIndex);
}
setInterval(autoPlay, 5000);

// Inicializa
moveCarousel(0);
