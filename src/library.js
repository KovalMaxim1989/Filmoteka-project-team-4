import { onQueue, onWatched, onLoadLibrary } from './js/library-markup';
import { refsLib } from './js/library-pagination';
import { scrollTop } from './js/button';

import './js/modal';
import './js/footer-modal';
import './js/registr-modal';
import { Spinner } from './js/spinner';

const spinner = new Spinner();

// ! FireBase initialization *******************************************
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './js/firebase-config';
import { FireBaseService } from './js/firebase';
import { toFirebase } from './js/modal';
// import { toFirebaseLib } from './js/library-markup';

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

toFirebase(firebase);
// toFirebaseLib(firebase);

window.onload = onLoadLibrary(firebase);
