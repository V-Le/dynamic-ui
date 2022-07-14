const sliderContainer = document.querySelector('.slider__container');
const sliderLeftBtn = document.querySelector('.nav__button__left');
const sliderRightBtn = document.querySelector('.nav__button__right');

/* FIRST ATTEMPT OF SLIDER
var x = 0;
sliderLeftBtn.addEventListener('click', () => {
  if (x < 0) {
    x += 1200;
    sliderContainer.setAttribute('style', `left: ${x}px`);
  } else { return }
});

sliderRightBtn.addEventListener('click', () => {
  if (x > -2400) {
    x += -1200;
    sliderContainer.setAttribute('style', `left: ${x}px`);
  } else { return }
});
*/

const sliderImageContainer = document.querySelectorAll('.slider__image__container');
const navButtons = document.querySelectorAll('.nav__button');
var imageIndex = 0;

sliderLeftBtn.addEventListener('click', () => {
  if (imageIndex <= 0 ){
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
    imageIndex = sliderImageContainer.length -1;
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
  } else {
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
    imageIndex -= 1;
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
  }
})

sliderRightBtn.addEventListener('click', () => {
  if (imageIndex >= (sliderImageContainer.length -1) ){
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
    imageIndex = 0;
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
  } else {
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
    imageIndex += 1;
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
  }
})

const navDotsContainer = document.querySelector('.nav__dots__container');
for (let i = 0; i <= sliderImageContainer.length-1; i++) {
  navDotsContainer.innerHTML += '<i class="fa-solid fa-circle"></i>';
}

const navDots = document.querySelectorAll('.fa-circle');
navDots[imageIndex].classList.toggle('active');
for (let x = 0; x <= sliderImageContainer.length-1; x++) {
  navDots[x].addEventListener('click', () => {
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
    imageIndex = x;
    sliderImageContainer[imageIndex].classList.toggle('show');
    navDots[imageIndex].classList.toggle('active');
  })
}


