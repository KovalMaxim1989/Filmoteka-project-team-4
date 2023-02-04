import { createMarkupLibraryList } from './markup';

const list = document.querySelector('.js-films-list');
const libraryWatcehd = document.querySelector('.js-btn-library-watched');
const libraryQueue = document.querySelector('.js-btn-library-queue');

const watchedKey = 'watchedMovies';
const queuedKey = 'queueMovies';
const watchedFilms = localStorage.getItem(watchedKey);
const queueFilms = localStorage.getItem(queuedKey);

export function onQueue() {
  libraryQueue.addEventListener('click', () => {
    if (queueFilms) {
      list.innerHTML = createMarkupLibraryList(JSON.parse(queueFilms));
    } else {
      list.innerHTML =
        '<div style="height: 500px; font-size: 24px">заглушка, коли нема фільмів</div>';
      return;
    }
  });
}

export function onWatched() {
  libraryWatcehd.addEventListener('click', () => {
    if (watchedFilms) {
      list.innerHTML = createMarkupLibraryList(JSON.parse(watchedFilms));
    } else {
      list.innerHTML =
        '<div style="height: 500px; font-size: 24px">заглушка, коли нема фільмів</div>';
      return;
    }
  });
}
