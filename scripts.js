const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel .card");
let currentIndex = 0;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % cards.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveCarousel, 5000); // muda a cada 4 segundos
