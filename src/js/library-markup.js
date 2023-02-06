import { createMarkupLibraryList } from './markup';
import { paginationLib } from './library-pagination';

const list = document.querySelector('.js-films-list');
const libraryWatcehd = document.querySelector('.js-btn-library-watched');
const libraryQueue = document.querySelector('.js-btn-library-queue');

const watchedKey = 'watchedMovies';
const queuedKey = 'queueMovies';
const watchedFilms = localStorage.getItem(watchedKey);
const queueFilms = localStorage.getItem(queuedKey);
let arr = [];
let totalFilms = 0;

export function onQueue() {
  libraryQueue.addEventListener('click', onQueueClick);
  checkLocalStorage(queueFilms);
}

export function onWatched() {
  libraryWatcehd.addEventListener('click', onWatchedClick);
  checkLocalStorage(watchedFilms);
}

export function onLoadLibrary() {
  checkLocalStorage(queueFilms);
}

function onWatchedClick() {
  libraryQueue.classList.remove('main-btn--library-active');
  libraryWatcehd.classList.add('main-btn--library-active');
  checkLocalStorage(watchedFilms);
}

function onQueueClick() {
  libraryWatcehd.classList.remove('main-btn--library-active');
  libraryQueue.classList.add('main-btn--library-active');
  checkLocalStorage(queueFilms);
}

function checkLocalStorage(key) {
  if (key === '[]') {
    list.innerHTML =
      '<div style="height: 500px; font-size: 24px">Add films to your queue!</div>';
    paginationLib(0, 0);
  } else {
    list.innerHTML = createMarkupLibraryList(JSON.parse(key));
    arr = JSON.parse(key);
    console.log(arr);
    totalFilms = Number.parseInt(arr.length / 18 + 1);

    paginationLib(totalFilms, 1);
    return;
  }
}
