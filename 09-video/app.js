const btn = document.querySelector('.switch-btn');
const span = document.querySelectorAll('span');
const myVideo = document.querySelector('.video-container');

btn.addEventListener('click', (e) => {
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    console.log(e);
    myVideo.pause();
  } else {
    btn.classList.remove('slide');
    myVideo.play();
  }
});

// preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
});
