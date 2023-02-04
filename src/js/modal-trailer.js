import axios from 'axios';
import Notiflix from 'notiflix';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { refs } from './refs';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

async function fetchTrailerKey(currentId) {
  //   spinnerOn();
  try {
    const response = await axios.get(
      `${BASE_URL}${currentId}/videos?api_key=${API_KEY}`
    );
    const key = response.data.results[0].key;

    return key;
  } catch (error) {
    Notiflix.Notify.failure('Sorry, there is no trailer for this movie');
  }
  //   spinnerOff();
}

export { fetchTrailerKey };
