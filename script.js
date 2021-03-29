const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const imgContainer = document.querySelector(".img__container");
const imgEls = document.querySelectorAll(".slider img");

let index = 0;
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = imgEls.length - 1;
  }
  updateSlider();
});
nextBtn.addEventListener("click", () => {
  index++;
  if (index === imgEls.length) {
    index = 0;
  }
  updateSlider();
});

function updateSlider() {
  imgContainer.style.transform = `translateX(-${index * 500}px)`;
  console.log(index);
}

setInterval(() => {
  index++;
  if (index === imgEls.length) {
    index = 0;
  }
  updateSlider();
}, 2000);
