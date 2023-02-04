const refs = {
  openModalBtn: document.querySelector('[data-modal-open-team]'),
  closeModalBtn: document.querySelector('[data-modal-close-team]'),
  backdrop: document.querySelector('.backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('js-close-modal')) {
    onCloseModal();
  }
}

function onPressESC(e) {
  if (e.keyCode === 27) {
    onCloseModal();
  }
}
