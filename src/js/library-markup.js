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
  libraryQueue.addEventListener('click', () => {
    libraryWatcehd.classList.remove('main-btn--library-active');
    libraryQueue.classList.add('main-btn--library-active');
    if (queueFilms) {
      list.innerHTML = createMarkupLibraryList(JSON.parse(queueFilms));
      arr = JSON.parse(queueFilms);
      totalFilms = Number.parseInt(arr.length / 20 + 1);
      paginationLib(totalFilms, 1);
    } else {
      list.innerHTML =
        '<div style="height: 500px; font-size: 24px">Add films to your queue!</div>';
      paginationLib(0, 0);
      return;
    }
  });
}

export function onWatched() {
  libraryWatcehd.addEventListener('click', () => {
    libraryQueue.classList.remove('main-btn--library-active');
    libraryWatcehd.classList.add('main-btn--library-active');

    if (watchedFilms) {
      list.innerHTML = createMarkupLibraryList(JSON.parse(watchedFilms));
      arr = JSON.parse(watchedFilms);
      totalFilms = Number.parseInt(arr.length / 20 + 1);
      paginationLib(totalFilms, 1);
    } else {
      list.innerHTML =
        '<div style="height: 500px; font-size: 24px">Add films to your watched!</div>';
      paginationLib(0, 0);
      return;
    }
  });
}

export function onLoadLibrary() {
  if (queueFilms) {
    list.innerHTML = createMarkupLibraryList(JSON.parse(queueFilms));
    arr = JSON.parse(queueFilms);
    totalFilms = Number.parseInt(arr.length / 20 + 1);
    paginationLib(totalFilms, 1);
  } else {
    list.innerHTML =
      '<div style="height: 500px; font-size: 24px">Add films to your queue!</div>';
    paginationLib(0, 0);
    return;
  }
}
