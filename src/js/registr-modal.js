import { refs } from './refs';
import { bodyScrollOff } from './modal';

refs.openRegistrModalBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  refs.openRegistrModalBtn.removeEventListener('click', onOpenModal);
  refs.closeRegistrModalBtn.addEventListener('click', onCloseModal);
  refs.backdropRegistr.addEventListener('click', onClickBackdrop);

  refs.backdropRegistr.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);

  // bodyScrollOff();
}

export function onCloseModal() {
  refs.backdropRegistr.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);

  refs.closeRegistrModalBtn.removeEventListener('click', onCloseModal);
  refs.backdropRegistr.removeEventListener('click', onClickBackdrop);
  refs.openRegistrModalBtn.addEventListener('click', onOpenModal);
  // window.onscroll = function () {
  //   window.scrollTo();
  // };
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
