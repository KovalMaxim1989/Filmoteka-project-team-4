import axios from 'axios';
import { createMarkupSelectedMovie } from './markup';
import {fetchTrailer} from './modal-trailer'


// References to DOM
const backdrop = document.querySelector('.backdrop');
const modalFilm = document.querySelector('[data-modal]');
const openModalCard = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const trailerBtn = document.querySelector('.trailer-btn')

openModalCard.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', onBackdropClick);

export function openModal(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  document.querySelector('.wrap-disc').innerHTML = '';

  const currentMovie = evt.target.closest('.js-target');
  const currentId = Number(currentMovie.dataset.id);
  
  fetchModal(currentId).then(data => {
    createMarkupSelectedMovie(data);
  })

  trailerBtn.addEventListener('click', () => fetchTrailer(currentId) , {once: true})
toggleModal();
}


function toggleModal() {
  window.addEventListener('keydown', onEscPress);
  modalFilm.classList.toggle('is-hidden');
  if (modalFilm.classList.contains('is-hidden')) {
    window.removeEventListener('keydown', onEscPress);
  }
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    toggleModal();
  }
}

function onEscPress(evt) {
    if(evt.key === 'Escape'){
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
  } catch(error) {
    console.log(error);
  }
}

