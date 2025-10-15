const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide() {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  const width = images[0].clientWidth;
  slider.style.transform = `translateX(${-index * width}px)`;
}

next.addEventListener('click', () => {
  index++;
  showSlide();
});

prev.addEventListener('click', () => {
  index--;
  showSlide();
});

window.addEventListener('resize', showSlide);









