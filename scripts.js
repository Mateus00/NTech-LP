const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".carousel .card");
let currentIndex = 0;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % cards.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveCarousel, 5000); // muda a cada 4 segundos

document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
      threshold: 0.1, // 20% do elemento visível ativa o efeito
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });


