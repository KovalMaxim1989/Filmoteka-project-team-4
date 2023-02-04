const refs = {
  openModalBtn: document.querySelector('[data-modal-open-registr]'),
  closeModalBtn: document.querySelector('[data-modal-close-registr]'),
  backdrop: document.querySelector('.backdrop-registr'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);

  let scrollX = window.scrollX;
  let scrollY = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(scrollX, scrollY);
  };
}

export function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('scroll__lock');
  window.removeEventListener('keydown', onPressESC);

  window.onscroll = function () {
    window.scrollTo();
  };
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();

    window.onscroll = function () {
      window.scrollTo();
    };
  }
}

function onPressESC(e) {
  if (e.code === 'Escape') {
    onCloseModal();

    window.onscroll = function () {
      window.scrollTo();
    };
  }
}
