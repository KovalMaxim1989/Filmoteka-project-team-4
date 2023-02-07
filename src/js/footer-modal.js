import { bodyScrollOff } from './modal';

const refs = {
  openTeamModalBtn: document.querySelector('[data-modal-open-team]'),
  closeTeamModalBtn: document.querySelector('[data-modal-close-team]'),
  backdropFooter: document.querySelector('.backdrop-footer'),
};

refs.openTeamModalBtn.addEventListener('click', onOpenModal);
refs.closeTeamModalBtn.addEventListener('click', onCloseModal);
refs.backdropFooter.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdropFooter.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);
  document.body.classList.toggle('disable-scroll');

  // bodyScrollOff();
}

function onCloseModal() {
  refs.backdropFooter.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);
  document.body.classList.remove('disable-scroll');

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
