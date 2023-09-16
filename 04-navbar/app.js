const nav_toble = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

nav_toble.addEventListener('click', () => {
  // contain,add,remove methods
  !links.classList.contains('show-links')
    ? links.classList.add('show-links')
    : links.classList.remove('show-links');

  /* //toggle
  links.classList.toggle('show-links');
  */

  /* //value:string
  links.classList.value == 'links show-links'
    ? links.classList.remove('show-links')
    : links.classList.add('show-links');
  */
});
