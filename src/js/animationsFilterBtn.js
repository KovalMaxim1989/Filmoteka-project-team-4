const animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

const classname = document.getElementsByClassName('confetti-button');

for (let i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}
