import { onQueue, onWatched, onLoadLibrary } from './js/library-markup';
import { refsLib } from './js/library-pagination';
import { scrollTop } from './js/button';

import './js/modal-library';
import './js/footer-modal-lib';
import './js/registr-modal';

window.onload = onLoadLibrary();

// onQueue();
// onWatched();

// ! FireBase initialization *******************************************
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './js/firebase-config';
import { FireBaseService } from './js/firebase';
import { toFirebase } from './js/modal-library';

const signOutLibraryButton = document.querySelector('.js-sign-out-lib');

const firebaseAppConfig = getFirebaseConfig();
const firebases = new FireBaseService();

// add listeners
signOutLibraryButton.addEventListener('click', () => {
  firebases.signOutUser();
});

// * Initialize Firebase
initializeApp(firebaseAppConfig);
// * Initialize Firebase Performance Monitoring
firebases.initFirebaseAuth();

toFirebase(firebases);
