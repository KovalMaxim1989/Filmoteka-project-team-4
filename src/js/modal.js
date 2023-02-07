// Refs for Modal Movies
import axios from 'axios';
import { createMarkupSelectedMovie } from './markup';
import { fetchTrailerKey } from './modal-trailer';
import { onAddToLocalStorage } from './addToLocalStorage';
import { AddToFirebase } from './addToFirebase';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

// import { refs } from './refs';
const addToFirebase = new AddToFirebase();

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalMovies: document.querySelector('[data-modal]'),
  openModalCard: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  trailerBtn: document.querySelector('.trailer-btn'),
  watchedLibraryBtn: document.querySelector('.js-btn-library-watched'),
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

  let libraryPage;

  if (refs.watchedLibraryBtn) {
    libraryPage = 'queue';
    if (
      refs.watchedLibraryBtn.className
        .split(' ')
        .some(btn => btn === 'main-btn--library-active')
    ) {
      libraryPage = 'watched';
    }
  }

  document.querySelector('.wrap-disc').innerHTML = '';

  const currentMovie = evt.target.closest('.js-target');
  const currentId = Number(currentMovie.dataset.id);

  fetchModal(currentId)
    .then(data => {
      createMarkupSelectedMovie(data);
      onAddToLocalStorage(data, firebaseObj);
      const queuedBtn = document.querySelector('.js-btn-queue');
      const watchedBtn = document.querySelector('.js-btn-watched');
      const removeQueueBtn = document.querySelector('.js-btn-remove-queue');
      const removeWatchedeBtn = document.querySelector(
        '.js-btn-remove-watched'
      );
      checkKeyInLocal(data);

      watchedBtn.addEventListener('click', handleWathedBtnClick);
      queuedBtn.addEventListener('click', handleQueueBtnClick);
      removeWatchedeBtn.addEventListener('click', handleRemoveWatched);
      removeQueueBtn.addEventListener('click', handleRemoveQueue);

      if (libraryPage === 'queue') {
        removeQueueBtn.classList.remove('visually-hidden');
        queuedBtn.classList.add('visually-hidden');
      } else if (libraryPage === 'watched') {
        removeWatchedeBtn.classList.remove('visually-hidden');
        watchedBtn.classList.add('visually-hidden');
      }
    })
    .catch(error => console.log(error));

  function handleWathedBtnClick() {
    fetchModal(currentId)
      .then(data => {
        addToFirebase.addMovieToFireBase(data, 'Watched');
      })
      .catch(error => console.log(error));
  }
  function handleQueueBtnClick() {
    fetchModal(currentId)
      .then(data => {
        addToFirebase.addMovieToFireBase(data, 'Queue');
      })
      .catch(error => console.log(error));
  }
  function handleRemoveQueue() {
    fetchModal(currentId)
      .then(data => {
        addToFirebase.deleteMovieFromFireBase(data, 'Queue');
      })
      .catch(error => console.log(error));
  }
  function handleRemoveWatched() {
    fetchModal(currentId)
      .then(data => {
        addToFirebase.deleteMovieFromFireBase(data, 'Watched');
      })
      .catch(error => console.log(error));
  }

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

export function bodyScrollOff() {
  // scrollX = window.scrollX;
  // scrollY = window.scrollY;
  // window.onscroll = function () {
  //   window.scrollTo(scrollX, scrollY);
  // };
}

function toggleModal() {
  window.addEventListener('keydown', onEscPress);
  refs.modalMovies.classList.toggle('is-hidden');

  if (refs.modalMovies.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', onEscPress);
    document.body.classList.remove('disable-scroll');

    // window.onscroll = function () {
    //   window.scrollTo();
    // };
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

    // window.onscroll = function () {
    //   window.scrollTo();
    // };
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
  const removeWatchedeBtn = document.querySelector('.js-btn-remove-watched');

  const valueOfWatchedKey = localStorage.getItem('watchedMovies');
  const valueOfQueueKey = localStorage.getItem('queueMovies');

  if (valueOfWatchedKey) {
    let movies = JSON.parse(valueOfWatchedKey);
    const isUnique = movies.some(value => value.id === data.id);
    if (isUnique) {
      watchedBtn.classList.add('visually-hidden');
      removeWatchedeBtn.classList.remove('visually-hidden');
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
