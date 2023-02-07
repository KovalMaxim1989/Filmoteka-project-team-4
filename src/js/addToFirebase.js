import { FireBaseService } from './firebase';
const firebase = new FireBaseService();

export class AddToFirebase {
  // const watchedBtn = document.querySelector('.js-btn-watched');
  // const queuedBtn = document.querySelector('.js-btn-queue');

  addMovieToFireBase(data, movieType) {
    firebase.readMovieData(movieType).then(({ arrFilms }) => {
      if (!arrFilms) {
        return firebase.saveMovieData([data], movieType);
      }

      const isUnique = arrFilms.some(elem => elem.id === data.id);

      if (!isUnique) {
        console.log('go to FireBase 😁', movieType);

        arrFilms.push(data);
        firebase.saveMovieData(arrFilms, movieType);
      } else {
        console.log('This film in your collection 😂😋😍🤩');
      }
    });
  }
}
