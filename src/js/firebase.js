// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

// import { getFirebaseConfig } from '../js/firebase-config';
import { refs } from '../js/refs';

// const signInButtonElement = document.querySelector('.js-sign-in');
// const signOutButtonElement = document.querySelector('.js-sign-out');
// const deleteMovieEl = document.querySelector('[data-modal-movie-delete]'); // TODO
// const userPicElement = document.getElementById('user-pic');
// const userNameElement = document.getElementById('user-name');

// refs.signOutButtonElement.addEventListener('click', signOutUser);
// refs.signInButtonElement.addEventListener('click', signIn);
// deleteMovieEl.addEventListener('click', deleteQueueMovie);

export class FireBaseService {
  // Signs-in Movie cabinet.
  async signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  // Signs-out of Friendly Chat.
  signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
  }

  // Initialize firebase auth
  initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver);
  }
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    // let profilePicUrl = getProfilePicUrl();
    // let userName = getUserName();

    // // Set the user's profile pic and name.
    // userPicElement.style.backgroundImage =
    //   "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
    // userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    // userNameElement.removeAttribute("hidden");
    // userPicElement.removeAttribute("hidden");
    refs.signOutButtonElement.classList.remove('visually-hidden');

    // Hide sign-in button.
    refs.signInButtonElement.classList.add('visually-hidden');

    // We save the Firebase Messaging Device token and enable notifications.
    // saveMessagingDeviceToken();
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    // userNameElement.setAttribute("hidden", "true");
    // userPicElement.setAttribute("hidden", "true");
    refs.signOutButtonElement.classList.add('visually-hidden');

    // Show sign-in button.
    refs.signInButtonElement.classList.remove('visually-hidden');
  }
}
