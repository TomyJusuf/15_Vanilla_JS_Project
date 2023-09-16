const open = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');

open.addEventListener('click', () => {
  console.log('click');
  modalOverlay.classList.add('open-modal');
});

close.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal');
});
