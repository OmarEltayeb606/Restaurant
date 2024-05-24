const imageSlider = document.querySelector('.section-1-icons');
const images = imageSlider.querySelectorAll('.section-1-icons i');
console.log('images are -->', images);

let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.visibility = 'hidden';

  currentImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].style.visibility = 'visible';
}

images[currentImageIndex].style.visibility = 'visible';

const delay = 2000; 

setInterval(showNextImage, delay);