import { createMarkupLibraryList } from './markup';
import { Report } from 'notiflix/build/notiflix-report-aio';

const list = document.querySelector('.js-films-list-library');
const headerLibrary = document.querySelector('.header-library');
const watchedKey = 'watchedMovies';
const queuedKey = 'queueMovies';

export function onAddToLocalStorage(data, firebaseObj) {
  const watcheAdddBtn = document.querySelector('.js-btn-watched');
  const queueAddBtn = document.querySelector('.js-btn-queue');
  const removeQueueBtn = document.querySelector('.js-btn-remove-queue');
  const removeWatchedeBtn = document.querySelector('.js-btn-remove-watched');

  removeQueueBtn.addEventListener('click', () => {
    ifUserLogin(firebaseObj);
    localRemoveBtns(queuedKey, data);

    removeQueueBtn.classList.add('visually-hidden');
    queueAddBtn.classList.remove('visually-hidden');
  });

  removeWatchedeBtn.addEventListener('click', () => {
    ifUserLogin(firebaseObj);
    localRemoveBtns(watchedKey, data);

    removeWatchedeBtn.classList.add('visually-hidden');
    watcheAdddBtn.classList.remove('visually-hidden');
  });

  watcheAdddBtn.addEventListener('click', () => {
    ifUserLogin(firebaseObj);
    localAddBtns(watchedKey, data);

    watcheAdddBtn.classList.add('visually-hidden');
    removeWatchedeBtn.classList.remove('visually-hidden');
  });

  queueAddBtn.addEventListener('click', () => {
    ifUserLogin(firebaseObj);
    localAddBtns(queuedKey, data);

    removeQueueBtn.classList.remove('visually-hidden');
    queueAddBtn.classList.add('visually-hidden');
  });
}

function localRemoveBtns(key, data) {
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

function localAddBtns(key, data) {
  try {
    let savedData = localStorage.getItem(key);

    if (savedData) {
      let movies = JSON.parse(savedData);
      const isUnique = movies.some(value => value.id === data.id);

      if (!isUnique) {
        movies.push(data);
        localStorage.setItem(key, JSON.stringify(movies));
      } else {
        return;
      }
    } else {
      localStorage.setItem(key, JSON.stringify([data]));
    }
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function ifUserLogin(firebase) {
  if (!firebase.isUserSignedIn()) {
    return Report.warning('Please sign in to your account!', '', 'Okay');
  }
}
