const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const testimonials = document.querySelectorAll(".testimonial");
const man = document.querySelector(".man");
const woman = document.querySelector(".woman");

let i = 0;

function nextSlide() {
      i++
      if (i > testimonials.length - 1) {
            i = 0;
      }
      man.classList.add("fadeIn");
      man.classList.remove("fadeOut");
      woman.classList.add("fadeOut");
      woman.classList.remove("fadeIn");
}

function prevSlide() {
      i--
      if (i < 0) {
            i = testimonials.length - 1;
      }
      woman.classList.add("fadeIn");
      woman.classList.remove("fadeOut");
      man.classList.add("fadeOut");
      man.classList.remove("fadeIn");
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


// Slide with keyboard arrow keys
document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
});







