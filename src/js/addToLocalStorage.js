import { createMarkupLibraryList } from './markup';
import { Report } from 'notiflix/build/notiflix-report-aio';

const list = document.querySelector('.js-films-list-library');
const headerLibrary = document.querySelector('.header-library');
const watchedKey = 'watchedMovies';
const queuedKey = 'queueMovies';

export function onAddToLocalStorage(data, firebaseObj) {
  const watchedBtn = document.querySelector('.js-btn-watched');
  const queuedBtn = document.querySelector('.js-btn-queue');
  const removeQueueBtn = document.querySelector('.js-btn-remove-queue');
  const removeWatchedeBtn = document.querySelector('.js-btn-remove-watched');

  removeQueueBtn.addEventListener('click', () => {
    if (!firebaseObj.isUserSignedIn()) {
      return Report.warning('Please sign in to your account!', '', 'Okay');
    }

    removeQueueBtn.classList.add('visually-hidden');
    queuedBtn.classList.remove('visually-hidden');

    try {
      removeQueueBtn.classList.add('visually-hidden');
      queuedBtn.classList.remove('visually-hidden');
      let savedData = localStorage.getItem(queuedKey);

      let movies = JSON.parse(savedData);
      const indexOfMovie = movies.findIndex(movie => movie.id === data.id);

      if (indexOfMovie === -1) {
        return;
      } else {
        movies.splice(indexOfMovie, 1);
        localStorage.setItem(queuedKey, JSON.stringify(movies));
        savedData = localStorage.getItem(queuedKey);
        if (headerLibrary) {
          if (savedData === '[]') {
            list.innerHTML = `<li class="empty-storage">
            <div>Sorry, this storage is empty.</div>
            <a class="home-btn" href="./index.html">Home</a>
          </li>`;
            return;
          }
          list.innerHTML = createMarkupLibraryList(JSON.parse(savedData));
        }
      }
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  });

  removeWatchedeBtn.addEventListener('click', () => {
    if (!firebaseObj.isUserSignedIn()) {
      return Report.warning('Please sign in to your account!', '', 'Okay');
    }

    removeWatchedeBtn.classList.add('visually-hidden');
    watchedBtn.classList.remove('visually-hidden');

    try {
      let savedData = localStorage.getItem(watchedKey);
      let movies = JSON.parse(savedData);
      const indexOfMovie = movies.findIndex(movie => movie.id === data.id);

      if (indexOfMovie === -1) {
        return;
      } else {
        movies.splice(indexOfMovie, 1);
        localStorage.setItem(watchedKey, JSON.stringify(movies));
        savedData = localStorage.getItem(watchedKey);

        if (headerLibrary) {
          if (savedData === '[]') {
            list.innerHTML = `<li class="empty-storage">
            <div>Sorry, this storage is empty.</div>
            <a class="home-btn" href="./index.html">Home</a>
          </li>`;
            return;
          }
          list.innerHTML = createMarkupLibraryList(JSON.parse(savedData));
        }
      }
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  });

  watchedBtn.addEventListener('click', () => {
    if (!firebaseObj.isUserSignedIn()) {
      return Report.warning('Please sign in to your account!', '', 'Okay');
    }

    try {
      let savedData = localStorage.getItem(watchedKey);

      if (savedData) {
        let movies = JSON.parse(savedData);
        const isUnique = movies.some(value => value.id === data.id);

        if (!isUnique) {
          movies.push(data);
          localStorage.setItem(watchedKey, JSON.stringify(movies));
        }
      } else {
        localStorage.setItem(watchedKey, JSON.stringify([data]));
      }
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
    removeWatchedeBtn.classList.remove('visually-hidden');
    watchedBtn.classList.add('visually-hidden');
  });

  queuedBtn.addEventListener('click', () => {
    if (!firebaseObj.isUserSignedIn()) {
      return Report.warning('Please sign in to your account!', '', 'Okay');
    }
    try {
      let savedData = localStorage.getItem(queuedKey);

      if (savedData) {
        let movies = JSON.parse(savedData);
        const isUnique = movies.some(value => value.id === data.id);

        if (!isUnique) {
          movies.push(data);
          localStorage.setItem(queuedKey, JSON.stringify(movies));
        }
      } else {
        localStorage.setItem(queuedKey, JSON.stringify([data]));
      }
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
    removeQueueBtn.classList.remove('visually-hidden');
    queuedBtn.classList.add('visually-hidden');
  });
}
