import { FireBaseService } from './firebase';
const firebase = new FireBaseService();

export function onAddToFirebase(data) {
  const watchedBtn = document.querySelector('.js-btn-watched');
  const queuedBtn = document.querySelector('.js-btn-queue');

  // watchedBtn.addEventListener('click', () => {
  //   const typeInfo = 'Watched';
  //   firebase.saveMovieData(data, typeInfo); // TODO *************************
  //   firebase.readMovieData(typeInfo); // TODO *************************
  //   // }
  // });

  queuedBtn.addEventListener('click', () => {
    const typeInfo = 'Queue';

    firebase.readMovieData(typeInfo).then(({ arrFilms }) => {
      if (!arrFilms) {
        return firebase.saveMovieData([data], typeInfo);
      }

      const isUnique = arrFilms.some(elem => {
        console.log(elem.id, data.id);
        return elem.id === data.id;
      });

      if (!isUnique) {
        arrFilms.push(data);
        firebase.saveMovieData(arrFilms, typeInfo);
      } else {
        console.log('This film in your collection 😂😋😍🤩');
      }
    });
  });
}

function handleAddToFirebase() {}
