import { refs } from './refs';
import { bodyScrollOff } from './modal';

refs.openRegistrModalBtn.addEventListener('click', onOpenModal);
refs.closeRegistrModalBtn.addEventListener('click', onCloseModal);
refs.backdropRegistr.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdropRegistr.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);

  bodyScrollOff();
}

export function onCloseModal() {
  refs.backdropRegistr.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);

  refs.openRegistrModalBtn.removeEventListener('click', onOpenModal);
  refs.closeRegistrModalBtn.removeEventListener('click', onCloseModal);
  refs.backdropRegistr.removeEventListener('click', onClickBackdrop);

  window.onscroll = function () {
    window.scrollTo();
  };
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onPressESC(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
