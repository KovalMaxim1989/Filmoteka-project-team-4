import { refs } from './refs';
import { bodyScrollOff } from './modal';

refs.openTeamModalBtn.addEventListener('click', onOpenModal);
refs.closeTeamModalBtn.addEventListener('click', onCloseModal);
refs.backdropFooter.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdropFooter.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);

  bodyScrollOff();
}

function onCloseModal() {
  refs.backdropFooter.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);

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
