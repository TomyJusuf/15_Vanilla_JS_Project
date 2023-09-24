// ********** set date ***********
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//  ********* close links ********
const navToggle = document.querySelector('.nav-toggle');
const linksContaner = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  const containerHeight = linksContaner.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContaner.style.height = `${linksHeight}px`;
  } else {
    linksContaner.style.height = 0;
  }
});

// ******* fixed navbar ********
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// *********** smoth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    //navigate  to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    //  calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContaner.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContaner.style.height = 0;
  });
});
