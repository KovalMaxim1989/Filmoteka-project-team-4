import { createMarkupLibraryList } from './markup';
// import { paginationLib } from './library-pagination';
// import { Pagination } from 'swiper';
import { Spinner } from './spinner';

const spinner = new Spinner();

const list = document.querySelector('.js-films-list-library');
const libraryWatched = document.querySelector('.js-btn-library-watched');
const libraryQueue = document.querySelector('.js-btn-library-queue');

const watchedKey = 'watchedMovies';
const queuedKey = 'queueMovies';
let watchedFilms = localStorage.getItem(watchedKey);
let queueFilms = localStorage.getItem(queuedKey);
let arr = [];
let totalFilms = 0;
let fireBase = null;

export function onLoadLibrary(firebaseLib) {
  libraryQueue.addEventListener('click', onQueueClick);
  libraryWatched.addEventListener('click', onWatchedClick);
  // checkLocalStorage(queueFilms);
  fireBase = firebaseLib;
  fireBase.afterLogin = showMovieFromFirebase;
}

function onWatchedClick() {
  libraryQueue.classList.remove('main-btn--library-active');
  libraryWatched.classList.add('main-btn--library-active');
  // checkLocalStorage(watchedFilms);
  showMovieFromFirebase('Watched');
}

function onQueueClick() {
  libraryWatched.classList.remove('main-btn--library-active');
  libraryQueue.classList.add('main-btn--library-active');
  // checkLocalStorage(queueFilms);
  showMovieFromFirebase('Queue');
}

export function checkLocalStorage(key) {
  arr = JSON.parse(key);
  if (arr.length === 0) {
    list.innerHTML = `<li class="empty-storage">
    <div>Sorry, this storage is empty.</div>
    <a class="home-btn" href="./index.html">Home</a>
  </li>`;
    paginationLib(0, 0);
  } else {
    if (arr.length === 18) {
      list.innerHTML = createMarkupLibraryList(arr.slice(0, 18));
      paginationLib(1, 1);
      return;
    }
    totalFilms = Number.parseInt(arr.length / 18 + 1);
    list.innerHTML = createMarkupLibraryList(arr.slice(0, 18));

    paginationLib(totalFilms, 1);
    return;
  }
}

export function showMovieFromFirebase(movieType = 'Queue') {
  spinner.start();
  fireBase
    .readMovieData(movieType)
    .then(({ arrFilms }) => {
      if (arrFilms.length === 0) {
        list.innerHTML = `<li class="empty-storage">
      <div>Sorry, this storage is empty.</div>
      <a class="home-btn" href="./index.html">Home</a>
    </li>`;
      } else {
        list.innerHTML = createMarkupLibraryList(arrFilms);
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      spinner.stop();
    });
}
