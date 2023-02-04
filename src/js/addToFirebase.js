import { FireBaseService } from './firebase';
const firebase = new FireBaseService();

export function onAddToFirebase(data) {
  const watchedBtn = document.querySelector('.js-btn-watched');
  const queuedBtn = document.querySelector('.js-btn-queue');

  watchedBtn.addEventListener('click', () => {
    firebase.saveWatchedMovie(data); // TODO *************************
    // }
  });

  queuedBtn.addEventListener('click', () => {
    firebase.saveQueueMovie(data); // TODO *************************
  });
}
