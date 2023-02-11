// Refs for Modal Movies
import axios from 'axios';
import { createMarkupSelectedMovie } from './markup';
import { fetchTrailerKey } from './modal-trailer';
import { onAddToLocalStorage } from './addToLocalStorage';
import { AddToFirebase } from './addToFirebase';
import { showMovieFromFirebase } from './library-markup';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Spinner } from './spinner';
import { onOpenModal, onCloseModal } from './registr-modal';

const spinner = new Spinner();

const addToFirebase = new AddToFirebase();

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalMovies: document.querySelector('[data-modal]'),
  openModalCard: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  trailerBtn: document.querySelector('.trailer-btn'),
  watchedLibraryBtn: document.querySelector('.js-btn-library-watched'),
  queueLibraryBtn: document.querySelector('.js-btn-library-queue'),
  modalSignInBtn: document.querySelector('.js-modal-sign-in'),

  queuedBtn: document.querySelector('.js-btn-queue'),
  watchedBtn: document.querySelector('.js-btn-watched'),
  removeQueueBtn: document.querySelector('.js-btn-remove-queue'),
  removeWatchedBtn: document.querySelector('.js-btn-remove-watched'),
  signInBtn: document.querySelector('.js-modal-sign-in'),
};

// create copy FireBase obj
let firebaseObj = null;

refs.openModalCard.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);

// Function write firebase to firebaseObj
export function toFirebase(firebase) {
  firebaseObj = firebase;
}

export function openModal(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }

  document.querySelector('.wrap-disc').innerHTML = '';

  const currentMovie = evt.target.closest('.js-target');
  const currentId = Number(currentMovie.dataset.id);

  fetchModal(currentId)
    .then(data => {
      createMarkupSelectedMovie(data);

      const queuedBtn = document.querySelector('.js-btn-queue');
      const watchedBtn = document.querySelector('.js-btn-watched');
      const removeQueueBtn = document.querySelector('.js-btn-remove-queue');
      const removeWatchedBtn = document.querySelector('.js-btn-remove-watched');
      const signInBtn = document.querySelector('.js-modal-sign-in');

      if (firebaseObj.isUserSignedIn()) {
        signInBtn.classList.add('visually-hidden');
        // onAddToLocalStorage(data, firebaseObj);
        // checkKeyInLocal(data);

        checkKeyInFirebase(data);

        watchedBtn.addEventListener('click', () => {
          fetchModal(currentId)
            .then(data => {
              addToFirebase.addMovieToFireBase(data, 'Watched');

              removeWatchedBtn.classList.remove('visually-hidden');
              watchedBtn.classList.add('visually-hidden');
            })
            .catch(error => console.log(error));
        });
        queuedBtn.addEventListener('click', () => {
          fetchModal(currentId)
            .then(data => {
              addToFirebase.addMovieToFireBase(data, 'Queue');

              removeQueueBtn.classList.remove('visually-hidden');
              queuedBtn.classList.add('visually-hidden');
            })
            .catch(error => console.log(error));
        });
        removeWatchedBtn.addEventListener('click', () => {
          fetchModal(currentId)
            .then(data => {
              addToFirebase.deleteMovieFromFireBase(data, 'Watched');

              removeWatchedBtn.classList.add('visually-hidden');
              watchedBtn.classList.remove('visually-hidden');
            })
            .catch(error => console.log(error));
        });
        removeQueueBtn.addEventListener('click', () => {
          fetchModal(currentId)
            .then(data => {
              addToFirebase.deleteMovieFromFireBase(data, 'Queue');

              removeQueueBtn.classList.add('visually-hidden');
              queuedBtn.classList.remove('visually-hidden');
            })
            .catch(error => console.log(error));
        });
      } else {
        signInBtn.classList.remove('visually-hidden');
        queuedBtn.classList.remove('visually-hidden');
        watchedBtn.classList.remove('visually-hidden');
        watchedBtn.setAttribute('disabled', true);
        queuedBtn.setAttribute('disabled', true);
        removeQueueBtn.classList.add('visually-hidden');
        removeWatchedBtn.classList.add('visually-hidden');

        signInBtn.addEventListener('click', onOpenModal);
      }
    })
    .catch(error => console.log(error));

  fetchTrailerKey(currentId).then(key => {
    refs.trailerBtn.onclick = () => {
      const instance = basicLightbox.create(
        `<div class="modal-trailer">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>`,
        {
          onShow: () => {
            window.removeEventListener('keydown', onEscPress);
            window.addEventListener('keydown', onEsc.bind(instance), {
              once: true,
            });
          },
          onClose: () => {
            window.addEventListener('keydown', onEscPress, { once: true });
            window.removeEventListener('keydown', onEsc.bind(instance));
          },
        }
      );
      instance.show();

      function onEsc(evt) {
        if (evt.key === 'Escape') {
          this.close();
        }
      }
    };
  });
  document.body.classList.toggle('disable-scroll');
  // bodyScrollOff();
  toggleModal();
}

export function toggleModal() {
  window.addEventListener('keydown', onEscPress);
  refs.modalMovies.classList.toggle('is-hidden');

  if (refs.modalMovies.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', onEscPress);
    document.body.classList.remove('disable-scroll');
  }

  let isLibrary = ifLibrary();
  let isCloseModal = refs.modalMovies.classList.contains('is-hidden');

  if (isLibrary && isCloseModal) {
    let watchedLibraryBtn = document.querySelector('.js-btn-library-watched');
    let queueLibraryBtn = document.querySelector('.js-btn-library-queue');

    let isWatchedFilms = watchedLibraryBtn.classList.contains(
      'main-btn--library-active'
    );
    let isQueueFilms = queueLibraryBtn.classList.contains(
      'main-btn--library-active'
    );

    if (isWatchedFilms) {
      showMovieFromFirebase('Watched');
    }
    if (isQueueFilms) {
      showMovieFromFirebase('Queue');
    }
  }
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    toggleModal();

    // window.onscroll = function () {
    //   window.scrollTo();
    // };
  }
}

function onEscPress(evt) {
  if (evt.key === 'Escape') {
    toggleModal();
  }
}

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

async function fetchModal(movie_id) {
  try {
    const response = await axios.get(
      `${BASE_URL}${movie_id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function checkKeyInLocal(data) {
  const queuedBtn = document.querySelector('.js-btn-queue');
  const watchedBtn = document.querySelector('.js-btn-watched');
  const removeQueueBtn = document.querySelector('.js-btn-remove-queue');
  const removeWatchedBtn = document.querySelector('.js-btn-remove-watched');

  const valueOfWatchedKey = localStorage.getItem('watchedMovies');
  const valueOfQueueKey = localStorage.getItem('queueMovies');

  if (valueOfWatchedKey) {
    let movies = JSON.parse(valueOfWatchedKey);
    const isUnique = movies.some(value => value.id === data.id);
    if (isUnique) {
      watchedBtn.classList.add('visually-hidden');
      removeWatchedBtn.classList.remove('visually-hidden');
    }
  }

  if (valueOfQueueKey) {
    let movies = JSON.parse(valueOfQueueKey);
    const isUnique = movies.some(value => value.id === data.id);
    if (isUnique) {
      queuedBtn.classList.add('visually-hidden');
      removeQueueBtn.classList.remove('visually-hidden');
    }
  }
}

function checkKeyInFirebase(data) {
  const queuedBtn = document.querySelector('.js-btn-queue');
  const watchedBtn = document.querySelector('.js-btn-watched');
  const removeQueueBtn = document.querySelector('.js-btn-remove-queue');
  const removeWatchedBtn = document.querySelector('.js-btn-remove-watched');
  spinner.start();
  firebaseObj
    .readMovieData('Queue')
    .then(({ arrFilms }) => {
      if (!arrFilms) {
        queuedBtn.classList.remove('visually-hidden');
        removeQueueBtn.classList.add('visually-hidden');
      }

      const isUnique = arrFilms.some(elem => elem.id === data.id);

      if (isUnique) {
        queuedBtn.classList.add('visually-hidden');
        removeQueueBtn.classList.remove('visually-hidden');
      }
      if (!isUnique) {
        queuedBtn.classList.remove('visually-hidden');
        removeQueueBtn.classList.add('visually-hidden');
      }
    })
    .catch(error => {
      console.error(error);
    });

  firebaseObj
    .readMovieData('Watched')
    .then(({ arrFilms }) => {
      if (!arrFilms) {
        watchedBtn.classList.remove('visually-hidden');
        removeWatchedBtn.classList.add('visually-hidden');
      }

      const isUnique = arrFilms.some(elem => elem.id === data.id);

      if (isUnique) {
        watchedBtn.classList.add('visually-hidden');
        removeWatchedBtn.classList.remove('visually-hidden');
      }
      if (!isUnique) {
        watchedBtn.classList.remove('visually-hidden');
        removeWatchedBtn.classList.add('visually-hidden');
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      spinner.stop();
    });
}

function ifLibrary() {
  return document.documentURI.includes('library.html');
}

// ! Delete in production

//  function handleWathedBtnClick() {
//    fetchModal(currentId)
//      .then(data => {
//        addToFirebase.addMovieToFireBase(data, 'Watched');

//        // refs.removeWatchedBtn.classList.remove('visually-hidden');
//        // refs.watchedBtn.classList.add('visually-hidden');
//      })
//      .catch(error => console.log(error));
//  }
//  function handleQueueBtnClick() {
//    fetchModal(currentId)
//      .then(data => {
//        addToFirebase.addMovieToFireBase(data, 'Queue');

//        // refs.removeQueueBtn.classList.remove('visually-hidden');
//        // refs.queuedBtn.classList.add('visually-hidden');
//      })
//      .catch(error => console.log(error));
//  }
//  function handleRemoveQueue() {
//    if (!firebaseObj.isUserSignedIn()) {
//      return Report.warning('Please sign in to your account!', '', 'Okay');
//    }
//    fetchModal(currentId)
//      .then(data => {
//        addToFirebase.deleteMovieFromFireBase(data, 'Queue');

//        // refs.removeQueueBtn.classList.add('visually-hidden');
//        // refs.queuedBtn.classList.remove('visually-hidden');
//      })
//      .catch(error => console.log(error));
//  }
//  function handleRemoveWatched() {
//    if (!firebaseObj.isUserSignedIn()) {
//      return Report.warning('Please sign in to your account!', '', 'Okay');
//    }
//    fetchModal(currentId)
//      .then(data => {
//        addToFirebase.deleteMovieFromFireBase(data, 'Watched');

//        // refs.removeWatchedBtn.classList.add('visually-hidden');
//        // refs.watchedBtn.classList.remove('visually-hidden');
//      })
//      .catch(error => console.log(error));
//  }
