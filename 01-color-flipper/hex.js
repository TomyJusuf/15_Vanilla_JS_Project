const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.getElementById('main');
btn.addEventListener('click', function () {
  function getRandomColor() {
    var colors = '#';
    for (let i = 0; i < 6; i++) {
      colors += hex[Math.floor(Math.random() * hex.length)];
      console.log(colors);
    }
    color.style = `color:${colors}`;
    color.innerHTML = colors;
    // main.style.backgroundColor = `${colors}`;
    document.body.style.backgroundColor = `${colors}`;
  }
  getRandomColor();
});
