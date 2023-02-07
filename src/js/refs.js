// import {
//   onClickIncrementPage,
//   onClickDecrementPage,
//   onClickPaginationBtnNumber,
//   onClickDecrementTen,
//   onClickIncrementTen,
// } from './pagination';

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
  libraryLink: document.querySelector('#library-link'),

  // ЯКЩО КОМУ ПОТРІБНІ РЕФИ АБО ШУКАЙТЕ ВЖЕ СТВОРЕ#НІ І РОЗКОМЕНТОВУЙТЕ АБО ДОДАВАЙТЕ СВОЇ

  // Refs for Modal Movies
  backdrop: document.querySelector('.backdrop'),
  modalMovies: document.querySelector('[data-modal]'),
  openModalCard: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  trailerBtn: document.querySelector('.trailer-btn'),
  // Refs for Footer Modal
  openTeamModalBtn: document.querySelector('[data-modal-open-team]'),
  closeTeamModalBtn: document.querySelector('[data-modal-close-team]'),
  backdropFooter: document.querySelector('.backdrop-footer'),
  // Refs for Registr Modal
  openRegistrModalBtn: document.querySelector('[data-modal-open-registr]'),
  closeRegistrModalBtn: document.querySelector('[data-modal-close-registr]'),
  backdropRegistr: document.querySelector('.backdrop-registr'),

  // btnAddToQueue: document.querySelector('[data-add-to-queue]'),
  // btnAddToWatched: document.querySelector('[data-add-to-watched]'),

  // End refs Modal Movies
  // // Search input in Header
  searchForm: document.querySelector('.header__form'),
  searchErrorImg: document.querySelector('.films__error-img'),
  noMoviesNotification: document.querySelector(
    '.films__no-movies-notification'
  ),
  notCorrectNotification: document.querySelector(
    '.films__not-correct-notification'
  ),

  // // spiner
  backdropSpinner: document.querySelector('.backdrop-spin'),
  spinner: document.querySelector('.js-spinner'),

  // // Library page
  // libraryList: document.querySelector('.js-library-list'),
  // btnQueue: document.querySelector('.js-btn-queue'),
  // btnWatched: document.querySelector('.js-btn-watched'),

  // filter
  filterNowPlaying: document.querySelector('.get-now-playing-js'),
  filterPopular: document.querySelector('.get-popular-js'),
  filterTopRated: document.querySelector('.get-top-rated-js'),
  filterUpcoming: document.querySelector('.get-upcoming-js'),

  // FireBase
  signInButtonElement: document.querySelector('.js-sign-in'),
  signOutButtonElement: document.querySelector('.js-sign-out'),
  userPicElement: document.getElementById('user-pic'),
  userNameElement: document.getElementById('user-name'),
  userInfoElement: document.getElementById('user-container'),
  signInWithEmail: document.querySelector('[data-modal-sign-in-email]'),
  signInWithGoogle: document.querySelector('[data-modal-sign-in-google]'),
};
