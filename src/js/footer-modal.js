const refs = {
  openModalBtn: document.querySelector('[data-modal-open-team]'),
  closeModalBtn: document.querySelector('[data-modal-close-team]'),
  backdrop: document.querySelector('.backdrop-footer'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('scroll__lock');
  window.addEventListener('keydown', onPressESC);
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('scroll__lock');
  window.removeEventListener('keydown', onPressESC);
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onPressESC(e) {
  if (e.keyCode === 27) {
    onCloseModal();
  }
}
