import { onQueue, onWatched, onLoadLibrary } from './js/library-markup';
import { refsLib } from './js/library-pagination';
import { scrollTop } from './js/button';

import './js/modal';
import './js/footer-modal';
import './js/registr-modal';

window.onload = onLoadLibrary();

onQueue();
onWatched();

// ! FireBase initialization *******************************************
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './js/firebase-config';
import { FireBaseService } from './js/firebase';
// import { refs } from './js/refs';
const signOutLibraryButton = document.querySelector('.js-sign-out-lib');

const firebaseAppConfig = getFirebaseConfig();
const firebase = new FireBaseService();

// add listeners
signOutLibraryButton.addEventListener('click', () => {
  firebase.signOutUser();
});

// * Initialize Firebase
initializeApp(firebaseAppConfig);
// * Initialize Firebase Performance Monitoring
firebase.initFirebaseAuth();
