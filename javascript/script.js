const cardImages = document.querySelectorAll('.card-image');
const overlaysEl = document.querySelectorAll('.overlay');

overlaysEl.forEach((overlay) => {
  overlay.style.opacity = '0';
});

cardImages.forEach((cardImage) => {
  cardImage.addEventListener('mouseover', () => {
    const overlay = cardImage.querySelector('.overlay');
    overlay.style.opacity = '1';
  });

  cardImage.addEventListener('mouseout', () => {
    const overlay = cardImage.querySelector('.overlay');
    overlay.style.opacity = '0';
  });
});
