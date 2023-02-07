import { createMarkupLibraryList } from './markup';
import { Report } from 'notiflix/build/notiflix-report-aio';

const list = document.querySelector('.js-films-list');
const watchedHeaderBtn = document.querySelector('.js-btn-library-watched');

export function onAddToLocalStorage(data, firebaseObj) {
  const watchedBtn = document.querySelector('.js-btn-watched');
  const queuedBtn = document.querySelector('.js-btn-queue');
  const delite = document.querySelector('.js-btn-d');

  const watchedKey = 'watchedMovies';
  const queuedKey = 'queueMovies';

  delite.addEventListener('click', () => {
    if (
      watchedHeaderBtn.className
        .split(' ')
        .some(btn => btn === 'main-btn--library-active')
    ) {
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

          if (savedData === '[]') {
            list.innerHTML =
              '<div style="height: 500px; font-size: 24px">Add films to your queue!</div>';
            return;
          }

          list.innerHTML = createMarkupLibraryList(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Set state error: ', error.message);
      }
    } else {
      try {
        let savedData = localStorage.getItem(queuedKey);

        let movies = JSON.parse(savedData);
        const indexOfMovie = movies.findIndex(movie => movie.id === data.id);

        if (indexOfMovie === -1) {
          return;
        } else {
          movies.splice(indexOfMovie, 1);
          localStorage.setItem(queuedKey, JSON.stringify(movies));
          savedData = localStorage.getItem(queuedKey);
          if (savedData === '[]') {
            list.innerHTML =
              '<div style="height: 500px; font-size: 24px">Add films to your queue!</div>';
            return;
          }
          list.innerHTML = createMarkupLibraryList(JSON.parse(savedData));
        }
      } catch (error) {
        console.error('Set state error: ', error.message);
      }
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
        } else {
          console.log('This film in your collection');
        }
      } else {
        localStorage.setItem(watchedKey, JSON.stringify([data]));
      }
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
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
        } else {
          console.log('This film in your collection');
        }
      } else {
        localStorage.setItem(queuedKey, JSON.stringify([data]));
      }
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  });
}
