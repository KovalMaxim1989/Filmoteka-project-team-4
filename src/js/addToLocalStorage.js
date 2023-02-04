export function onAddToLocalStorage(data) {
  const watchedBtn = document.querySelector('.js-btn-watched');
  const queuedBtn = document.querySelector('.js-btn-queue');

  const watchedKey = 'watchedMovies';
  const queuedKey = 'queueMovies';

  watchedBtn.addEventListener('click', () => {
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
