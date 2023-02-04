// ALL IMPORTS:
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './js/firebase-config';
import { refs } from './js/refs';
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
//  Кнопка догори
import { scrollTop } from './js/button';

// ! Section for create new Class instances:
// here you create new Class instances

// ! Section for add listeners:
// here you add listeners

// ! MAIN LOGIC CODE
saveGenres();
renderTrendMovie();

// ! additional functions
//  here you add neccessary functions

// ? *******************************************

const firebaseAppConfig = getFirebaseConfig();
// TODO 0: Initialize Firebase
initializeApp(firebaseAppConfig);

// TODO : Initialize Firebase Performance Monitoring
// initFirebaseAuth();
// loadQueueMovie(); //

//  signInButtonElement: document.querySelector('.js-sign-in'),
//   signOutButtonElement: document.querySelector('.js-sign-out'),
//   userPicElement: document.getElementById('user-pic'),
//   userNameElement: document.getElementById('user-name'),

console.log(refs.signInButtonElement);
console.log(refs.signOutButtonElement);
console.log(refs.userPicElement);
console.log(refs.userNameElement);
