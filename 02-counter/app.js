const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const btns = document.querySelectorAll('.btn');

const value = document.getElementById('value');
let count = 0;

// decrease.addEventListener('click', function () {
//   count -= 1;
//   value.textContent = count;
// });

// increase.addEventListener('click', function () {
//   count += 1;
//   value.textContent = count;
// });
// reset.addEventListener('click', function () {
//   count = 0;
//   value.textContent = count;
// });

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const style = e.currentTarget.classList;
    if (style.contains('decrease')) {
      count -= 1;
      value.textContent = count;
    } else if (style.contains('increase')) {
      count += 1;
      value.textContent = count;
    } else {
      count = 0;
      value.textContent = count;
    }
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = '#222';
    }
  });
});
