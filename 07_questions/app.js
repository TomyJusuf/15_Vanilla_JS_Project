//using selectors inside the element

// const questions = document.querySelectorAll('.question');
// console.log(questions);
// questions.forEach(function (question) {
//   const btn = question.querySelector('.question-btn');

//   btn.addEventListener('click', () => {
//     question.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });

// traversing the DOM

let btns = document.querySelectorAll('.question-btn');
let questionText = document.querySelector('.question-text');
const plus = document.querySelectorAll('.plus-icon');

btns.forEach((element) => {
  element.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});
