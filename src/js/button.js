const button = document.querySelector('#top');

window.addEventListener('scroll', function () {
  button.hidden = window.pageYOffset < document.documentElement.clientHeight;
});

button.addEventListener('click', scrollTop);

export function scrollTop() {
  window.scrollTo({
    top: 10,
    behavior: 'smooth',
  });
}
