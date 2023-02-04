// import { initializeApp } from 'firebase/app';

// import Notiflix from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import axios from 'axios';

// import {Spinner} from 'spin.js';

// lodash

// #API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';

import { saveGenres } from './js/trandingfilms';
import { renderTrendMovie } from './js/trandingfilms';
import { scrollTop } from './js/button';

saveGenres();
renderTrendMovie();

import './js/search-films';

// Створення Модальогое вікна обраного фільму Modal Movies
import './js/modal';
import './js/footer-modal';
