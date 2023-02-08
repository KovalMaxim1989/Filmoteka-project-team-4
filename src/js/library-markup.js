import { createMarkupLibraryList } from './markup';
import { paginationLib } from './library-pagination';
import { Pagination } from 'swiper';

const list = document.querySelector('.js-films-list-library');
const libraryWatcehd = document.querySelector('.js-btn-library-watched');
const libraryQueue = document.querySelector('.js-btn-library-queue');

const watchedKey = 'watchedMovies';
const queuedKey = 'queueMovies';
let watchedFilms = localStorage.getItem(watchedKey);
let queueFilms = localStorage.getItem(queuedKey);
let arr = [];
let totalFilms = 0;

// export function onQueue() {
//   libraryQueue.addEventListener('click', onQueueClick);
//   checkLocalStorage(queueFilms);
// }

// export function onWatched() {
//   libraryWatcehd.addEventListener('click', onWatchedClick);
//   checkLocalStorage(watchedFilms);
// }

export function onLoadLibrary() {
  libraryQueue.addEventListener('click', onQueueClick);
  libraryWatcehd.addEventListener('click', onWatchedClick);
  queueFilms = localStorage.getItem(queuedKey);
  checkLocalStorage(queueFilms);
}

function onWatchedClick() {
  libraryQueue.classList.remove('main-btn--library-active');
  libraryWatcehd.classList.add('main-btn--library-active');
  let watchedFilms = localStorage.getItem(watchedKey);
  checkLocalStorage(watchedFilms);
}

function onQueueClick() {
  libraryWatcehd.classList.remove('main-btn--library-active');
  libraryQueue.classList.add('main-btn--library-active');
  queueFilms = localStorage.getItem(queuedKey);
  checkLocalStorage(queueFilms);
}

export function checkLocalStorage(key) {
  arr = JSON.parse(key);
  if (arr.length === 0) {
    list.innerHTML = `<li class="empty-storage">
    <div>Sorry, this storage is empty.</div>
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
