import { onAddToLocalStorage } from './addToLocalStorage';

const button = document.querySelector('#top');

window.addEventListener('scroll', function () {
  button.hidden = window.pageYOffset < document.documentElement.clientHeight;
});

button.addEventListener('click', scrollTop);

export function scrollTop() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
