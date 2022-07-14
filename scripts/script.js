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
    imageIndex = sliderImageContainer.length -1;
    sliderImageContainer[imageIndex].classList.toggle('show');
  } else {
    sliderImageContainer[imageIndex].classList.toggle('show');
    imageIndex -= 1;
    sliderImageContainer[imageIndex].classList.toggle('show');

  }
})

sliderRightBtn.addEventListener('click', () => {
  if (imageIndex >= (sliderImageContainer.length -1) ){
    sliderImageContainer[imageIndex].classList.toggle('show');
    imageIndex = 0;
    sliderImageContainer[imageIndex].classList.toggle('show');
  } else {
    sliderImageContainer[imageIndex].classList.toggle('show');
    imageIndex += 1;
    sliderImageContainer[imageIndex].classList.toggle('show');
  }
})



