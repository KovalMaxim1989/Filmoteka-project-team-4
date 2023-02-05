import { FireBaseService } from './firebase';
const firebase = new FireBaseService();

export function onAddToFirebase(data) {
  const watchedBtn = document.querySelector('.js-btn-watched');
  const queuedBtn = document.querySelector('.js-btn-queue');

  watchedBtn.addEventListener('click', () => {
    const typeInfo = 'Watched';
    firebase.saveMovieData(data, typeInfo); // TODO *************************
    firebase.readMovieData(typeInfo); // TODO *************************
    // }
  });

  queuedBtn.addEventListener('click', () => {
    const typeInfo = 'Queue';
    // TODO *************************
    firebase.readMovieData(typeInfo).then(({ arrFilms }) => {
      console.log('OLDarrFilms', arrFilms);
      const isUnique = arrFilms.some(elem => elem.id === data.id);
      if (!isUnique) {
        console.log(!isUnique);

        arrFilms.push(data);
        console.log('NEWarrFilms', arrFilms);
        firebase.saveMovieData(data, typeInfo);
      } else {
        console.log('This film in your collection');
      }
    });
  });
}
