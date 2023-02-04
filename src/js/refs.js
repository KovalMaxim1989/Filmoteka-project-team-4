import {
  onClickIncrementPage,
  onClickDecrementPage,
  onClickPaginationBtnNumber,
  onClickDecrementTen,
  onClickIncrementTen,
} from './pagination';

export const refs = {
  moviesList: document.querySelector('.js-films-list'),
  firstPage: document.querySelector('.js-pagination--firstPage'),
  minus2Page: document.querySelector('.js-pagination--minus2Page'),
  minus1Page: document.querySelector('.js-pagination--minus1Page'),
  activPage: document.querySelector('.js-pagination--activPage'),
  plus1Page: document.querySelector('.js-pagination--plus1Page'),
  plus2Page: document.querySelector('.js-pagination--plus2Page'),
  lastPage: document.querySelector('.js-pagination--lastPage'),
  minusQuery: document.querySelector('.js-btn__minusQuery'),
  plusQuery: document.querySelector('.js-btn__plusQuery'),
  containerPage: document.querySelector('.js-pagination__page'),
  plusTen: document.querySelector('.btn-increment-ten'),
  minusTen: document.querySelector('.btn-decrement-ten'),
  containerPagAll: document.querySelector('.js-pagination'),

  // ЯКЩО КОМУ ПОТРІБНІ РЕФИ АБО ШУКАЙТЕ ВЖЕ СТВОРЕНІ І РОЗКОМЕНТОВУЙТЕ АБО ДОДАВАЙТЕ СВОЇ

  // Refs for Modal Movies
  backdrop: document.querySelector('.backdrop'),
  modalMovies: document.querySelector('[data-modal]'),
  openModalCard: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  trailerBtn: document.querySelector('.trailer-btn'),

  // btnAddToQueue: document.querySelector('[data-add-to-queue]'),
  // btnAddToWatched: document.querySelector('[data-add-to-watched]'),

  // End refs Modal Movies
  // // Search input in Header
  searchForm: document.querySelector('.header__form'),
  searchErrorImg: document.querySelector('.films__error-img'),

  // // spiner
  // backdropSpinner: document.querySelector('[data-load]'),
  // spinner: document.querySelector('.js-spinner'),

  // // Library page
  // libraryList: document.querySelector('.js-library-list'),
  // btnQueue: document.querySelector('.js-btn-queue'),
  // btnWatched: document.querySelector('.js-btn-watched'),

  // FireBase
  signInButtonElement: document.querySelector('.js-sign-in'),
  signOutButtonElement: document.querySelector('.js-sign-out'),
  userPicElement: document.getElementById('user-pic'),
  userNameElement: document.getElementById('user-name'),
  userInfoElement: document.getElementById('user-container'),
  signInWithEmail: document.querySelector('[data-modal-sign-in-email]'),
  signInWithGoogle: document.querySelector('[data-modal-sign-in-google]'),
};
refs.minusQuery.addEventListener('click', onClickDecrementPage);
refs.plusQuery.addEventListener('click', onClickIncrementPage);
refs.containerPage.addEventListener('click', onClickPaginationBtnNumber);
refs.minusTen.addEventListener('click', onClickDecrementTen);
refs.plusTen.addEventListener('click', onClickIncrementTen);
refs.lastPage.addEventListener('click', onClickPaginationBtnNumber);
refs.firstPage.addEventListener('click', onClickPaginationBtnNumber);
