// ALL IMPORTS:
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './js/firebase-config';

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
// import { refs } from './js/refs';

// filters
import './js/filter-search-films';
import './js/animationsFilterBtn';

// ! Section for create new Class instances:
// here you create new Class instances

// ! Section for add listeners:
// here you add listeners

// ! MAIN LOGIC CODE
saveGenres();
renderTrendMovie();

// ! additional functions
//  here you add neccessary functions

// ! FireBase logic authentification *******************************************

import { FireBaseService } from './js/firebase';
import { refs } from './js/refs';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { toFirebase } from './js/modal';

const firebaseAppConfig = getFirebaseConfig();
const firebase = new FireBaseService();

// add listeners
refs.signInWithGoogle.addEventListener('click', firebase.signIn);
refs.signOutButtonElement.addEventListener('click', firebase.signOutUser);
refs.libraryLink.addEventListener('click', onGoToLibrary);

// * Initialize Firebase
initializeApp(firebaseAppConfig);
// * Initialize Firebase Performance Monitoring
firebase.initFirebaseAuth();

toFirebase(firebase);

async function onGoToLibrary() {
  const isUser = await firebase.isUserSignedIn();
  if (!isUser) {
    return Report.warning('Please sign in to your account!', '', 'Okay');
  }
  window.location.href = './library.html';
}
