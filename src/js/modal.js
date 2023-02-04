// Refs for Modal Movies
import axios from 'axios';
import { createMarkupSelectedMovie } from './markup';
import { fetchTrailerKey } from './modal-trailer';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { refs } from './refs';

// debugger

// Тимчасово пам'ятка
// References to DOM
// const backdrop = document.querySelector('.backdrop');
// const modalMovies = document.querySelector('[data-modal]');
// const openModalCard = document.querySelector('[data-modal-open]');
// const closeModalBtn = document.querySelector('[data-modal-close]');
// const trailerBtn = document.querySelector('.trailer-btn')

refs.openModalCard.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', onBackdropClick);

export function openModal(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }

  refs.body.document.querySelector('.wrap-disc').innerHTML = '';

  const currentMovie = evt.target.closest('.js-target');
  const currentId = Number(currentMovie.dataset.id);

  // debugger;
  fetchModal(currentId).then(data => {
    createMarkupSelectedMovie(data);
  });

  fetchTrailerKey(currentId).then(
    key =>
      (refs.trailerBtn.onclick = () => {
        basicLightbox;
        const instance = basicLightbox.create(
          `<div class="modal-trailer">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>`,
          {
            onShow: () =>
              window.addEventListener('keydown', onEsc.bind(instance)),
            onClose: () =>
              window.removeEventListener('keydown', onEsc.bind(instance)),
          }
        );
        // debugger
        instance.show();

        function onEsc(evt) {
          if (evt.key === 'Escape') {
            this.close();
          }
        }
      })
  );

  // refs.trailerBtn.addEventListener('click', fetchTrailerKey(currentId));
  // debugger;
  toggleModal();
}

function toggleModal() {
  window.addEventListener('keydown', onEscPress);
  refs.modalMovies.classList.toggle('is-hidden');
  hideScroll();
  if (refs.modalMovies.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', onEscPress);
    // refs.trailerBtn.removeEventListener('click', modalTrailer.fetchTrailer);
    // debugger;
  }
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    toggleModal();
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
// debugger;

function hideScroll() {
  refs.body.classList.toggle('show-modal');
}
