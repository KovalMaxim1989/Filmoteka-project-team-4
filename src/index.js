// ALL IMPORTS:
// import { initializeApp } from 'firebase/app';
// import Notiflix from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import axios from 'axios';
// import {Spinner} from 'spin.js';

import { saveGenres } from './js/trandingfilms';
import { renderTrendMovie } from './js/trandingfilms';
import './js/search-films';
// Створення Модальогое вікна обраного фільму Modal Movies
import './js/modal';
import './js/footer-modal';
import './js/registr-modal';

// ! Section for create new Class instances:
// here you create new Class instances

// ! Section for add listeners:
// here you add listeners

// ! MAIN LOGIC CODE
saveGenres();
renderTrendMovie();

// ! additional functions
//  here you add neccessary functions
//  Кнопка догори
import { scrollTop } from './js/button';