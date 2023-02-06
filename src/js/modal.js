// Refs for Modal Movies
import axios from 'axios';
import { createMarkupSelectedMovie } from './markup';
import { fetchTrailerKey } from './modal-trailer';
import { onAddToLocalStorage } from './addToLocalStorage';
// import { onAddToFirebase } from './addToFirebase';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

// import { refs } from './refs';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalMovies: document.querySelector('[data-modal]'),
  openModalCard: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  trailerBtn: document.querySelector('.trailer-btn'),
};

// Тимчасово пам'ятка в продакшн видалити
// References to DOM
// const backdrop = document.querySelector('.backdrop');
// const modalMovies = document.querySelector('[data-modal]');
// const openModalCard = document.querySelector('[data-modal-open]');
// const closeModalBtn = document.querySelector('[data-modal-close]');
// const trailerBtn = document.querySelector('.trailer-btn')

refs.openModalCard.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);

// debugger;

export function openModal(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }

  document.querySelector('.wrap-disc').innerHTML = '';

  const currentMovie = evt.target.closest('.js-target');
  const currentId = Number(currentMovie.dataset.id);

  fetchModal(currentId).then(data => {
    createMarkupSelectedMovie(data);
    onAddToLocalStorage(data);
    onAddToFirebase(data);
  });

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
  bodyScrollOff();
  toggleModal();
}

export function bodyScrollOff() {
  let scrollX = window.scrollX;
  let scrollY = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(scrollX, scrollY);
  };
}

function toggleModal() {
  window.addEventListener('keydown', onEscPress);
  refs.modalMovies.classList.toggle('is-hidden');
  if (refs.modalMovies.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', onEscPress);

    window.onscroll = function () {
      window.scrollTo();
    };
  }
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    toggleModal();

    window.onscroll = function () {
      window.scrollTo();
    };
  }
}

function onEscPress(evt) {
  if (evt.key === 'Escape') {
    toggleModal();

    window.onscroll = function () {
      window.scrollTo();
    };
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
