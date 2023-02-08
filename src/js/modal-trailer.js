import axios from 'axios';
import Notiflix from 'notiflix';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Spinner } from './spinner';

// import { refs } from './refs';
const spinner = new Spinner();

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modalMovies: document.querySelector('[data-modal]'),
  openModalCard: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  trailerBtn: document.querySelector('.trailer-btn'),
};

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

async function fetchTrailerKey(currentId) {
  refs.trailerBtn.classList.remove('visually-hidden');
  spinner.start();
  try {
    const response = await axios.get(
      `${BASE_URL}${currentId}/videos?api_key=${API_KEY}`
    );
    const key = response.data.results[0].key;
    spinner.stop();
    return key;
  } catch (error) {
    refs.trailerBtn.classList.add('visually-hidden');
    spinner.stop();
  }
}

export { fetchTrailerKey };
