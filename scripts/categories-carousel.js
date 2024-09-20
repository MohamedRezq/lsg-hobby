// Initialize carousel only after categories slider has been loaded
const carousel = document.querySelector(".carousel-wrapper");
const scrollAmount = 150; // Adjust based on the icon container width

function nextSlide() {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function prevSlide() {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

function currentImagesCount() {
  if (window.innerWidth < 640) {
    return 1;
  } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
    return 2;
  } else {
    return 3;
  }
}

window.addEventListener("resize", () => {
  Alpine.store("carousel").$data.activeSlide = 0; // Reset slide on resize
});
