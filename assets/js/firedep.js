const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;

function updateSlide() {
  const track = document.getElementById("carousel-track");
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;

  // Update active dot
  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

const dotsContainer = document.getElementById("carousel-dots");

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlide();
  });
  dotsContainer.appendChild(dot);

  updateSlide();
}
