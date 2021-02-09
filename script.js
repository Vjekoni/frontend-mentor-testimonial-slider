const prevBtn = document.querySelector(".prev-btn"),
      nextBtn = document.querySelector(".next-btn"),
      testimonials = document.querySelectorAll(".testimonial");

let current = 0;


startSlide();

//reset opacity style for all items
function reset() {
      for (let i = 0; i < testimonials.length; i++) {
            testimonials[i].style.opacity = "0";
      };
};

//start slide with first item ( woman )
function startSlide() {
      reset();
      testimonials[0].style.opacity = "1";
};

function prevSlide() {
      if (current <= 0) return;
      reset();
      testimonials[current - 1].style.opacity = "1";
      current--;
};

function nextSlide() {
      if (current >= testimonials.length - 1) return;
      reset();
      testimonials[current + 1].style.opacity = "1";
      current++;
};

// previous slide button
prevBtn.addEventListener("click", function () {
      if (current === 0) {
            current = testimonials.length;
      }
      prevSlide();
});

// next slide button
nextBtn.addEventListener("click", function () {
      if (current === testimonials.length - 1) {
            current = -1
      }
      nextSlide();
});
