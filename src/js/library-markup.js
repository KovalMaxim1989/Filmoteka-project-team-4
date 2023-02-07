// import { createMarkupLibraryList } from './markup';
// import { paginationLib } from './library-pagination';

// const list = document.querySelector('.js-films-list');
// const libraryWatcehd = document.querySelector('.js-btn-library-watched');
// const libraryQueue = document.querySelector('.js-btn-library-queue');

// const watchedKey = 'watchedMovies';
// const queuedKey = 'queueMovies';
// const watchedFilms = localStorage.getItem(watchedKey);
// const queueFilms = localStorage.getItem(queuedKey);
// let arr = [];
// let totalFilms = 0;

// // export function onQueue() {
// //   libraryQueue.addEventListener('click', onQueueClick);
// //   checkLocalStorage(queueFilms);
// // }

// // export function onWatched() {
// //   libraryWatcehd.addEventListener('click', onWatchedClick);
// //   checkLocalStorage(watchedFilms);
// // }

// export function onLoadLibrary() {
//   libraryWatcehd.addEventListener('click', onWatchedClick);
//   libraryQueue.addEventListener('click', onQueueClick);
//   onQueueClick();
//   // checkLocalStorage(queueFilms);
// }

// function onWatchedClick() {
//   libraryQueue.classList.remove('main-btn--library-active');
//   libraryWatcehd.classList.add('main-btn--library-active');
//   checkLocalStorage(watchedFilms);
// }

// function onQueueClick() {
//   libraryWatcehd.classList.remove('main-btn--library-active');
//   libraryQueue.classList.add('main-btn--library-active');
//   checkLocalStorage(queueFilms);
// }

// function checkLocalStorage(key) {
//   if (key) {
//     arr = JSON.parse(key);
//     if (arr.length === 18) {
//       list.innerHTML = createMarkupLibraryList(arr.slice(0, 18));
//       paginationLib(1, 1);
//       return;
//     }
//     totalFilms = Number.parseInt(arr.length / 18 + 1);
//     list.innerHTML = createMarkupLibraryList(arr.slice(0, 18));

//     paginationLib(totalFilms, 1);
//   } else {
//     list.innerHTML =
//       '<div style="height: 500px; font-size: 24px">Add films to your queue!</div>';
//     paginationLib(0, 0);
//     return;
//   }
// }

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

// export function onQueue() {
//   libraryQueue.addEventListener('click', onQueueClick);
//   checkLocalStorage(queueFilms);
// }

// export function onWatched() {
//   libraryWatcehd.addEventListener('click', onWatchedClick);
//   checkLocalStorage(watchedFilms);
// }

export function onLoadLibrary() {
  libraryWatcehd.addEventListener('click', onWatchedClick);
  libraryQueue.addEventListener('click', onQueueClick);
  onQueueClick();
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
    arr = JSON.parse(key);
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
