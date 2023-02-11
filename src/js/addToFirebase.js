import { FireBaseService } from './firebase';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const firebase = new FireBaseService();

export class AddToFirebase {
  addMovieToFireBase(data, movieType) {
    firebase
      .readMovieData(movieType)
      .then(({ arrFilms }) => {
        if (!arrFilms) {
          return firebase.saveMovieData([data], movieType);
        }

        const isUnique = arrFilms.some(elem => elem.id === data.id);

        if (!isUnique) {
          arrFilms.push(data);
          firebase.saveMovieData(arrFilms, movieType);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  deleteMovieFromFireBase(data, movieType) {
    firebase
      .readMovieData(movieType)
      .then(({ arrFilms }) => {
        if (!arrFilms) {
          return;
        }
        const filmsAfterDelete = arrFilms.filter(elem => elem.id !== data.id);
        firebase.saveMovieData(filmsAfterDelete, movieType);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
