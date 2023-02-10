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

    onRemoveLocal(data, queuedKey);
  });

  removeWatchedeBtn.addEventListener('click', () => {
    if (!firebaseObj.isUserSignedIn()) {
      return Report.warning('Please sign in to your account!', '', 'Okay');
    }
    removeWatchedeBtn.classList.add('visually-hidden');
    watchedBtn.classList.remove('visually-hidden');

    onRemoveLocal(data, watchedKey);
  });

  watchedBtn.addEventListener('click', () => {
    if (!firebaseObj.isUserSignedIn()) {
      return Report.warning('Please sign in to your account!', '', 'Okay');
    }
    removeWatchedeBtn.classList.remove('visually-hidden');
    watchedBtn.classList.add('visually-hidden');

    onAddLocal(data, watchedKey);
  });

  queuedBtn.addEventListener('click', () => {
    if (!firebaseObj.isUserSignedIn()) {
      return Report.warning('Please sign in to your account!', '', 'Okay');
    }
    removeQueueBtn.classList.remove('visually-hidden');
    queuedBtn.classList.add('visually-hidden');

    onAddLocal(data, queuedKey);
  });
}

function onRemoveLocal(data, key) {
  try {
    let savedData = localStorage.getItem(key);

    let movies = JSON.parse(savedData);
    const indexOfMovie = movies.findIndex(movie => movie.id === data.id);

    if (indexOfMovie === -1) {
      return;
    } else {
      movies.splice(indexOfMovie, 1);
      localStorage.setItem(key, JSON.stringify(movies));
      savedData = localStorage.getItem(key);
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
}

function onAddLocal(data, key) {
  try {
    let savedData = localStorage.getItem(key);

    if (savedData) {
      let movies = JSON.parse(savedData);
      const isUnique = movies.some(value => value.id === data.id);

      if (!isUnique) {
        movies.push(data);
        localStorage.setItem(key, JSON.stringify(movies));
      }
    } else {
      localStorage.setItem(key, JSON.stringify([data]));
    }
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
