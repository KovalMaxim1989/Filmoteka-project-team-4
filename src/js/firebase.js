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
import { onCloseModal } from '../js/registr-modal';

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
    let profilePicUrl = getProfilePicUrl();
    let userName = getUserName();

    // Set the user's profile pic and name.
    refs.userPicElement.style.backgroundImage =
      'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
    refs.userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    // refs.userNameElement.removeAttribute('hidden');
    // refs.userPicElement.removeAttribute('hidden');
    refs.userInfoElement.classList.remove('visually-hidden');
    refs.signOutButtonElement.classList.remove('visually-hidden');

    // Hide sign-in button.
    refs.signInButtonElement.classList.add('visually-hidden');

    // close modal
    onCloseModal();
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    // refs.userNameElement.setAttribute('hidden', 'true');
    // refs.userPicElement.setAttribute('hidden', 'true');
    refs.userInfoElement.classList.add('visually-hidden');
    refs.signOutButtonElement.classList.add('visually-hidden');

    // Show sign-in button.
    refs.signInButtonElement.classList.remove('visually-hidden');
  }
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '../images/profile_placeholder.png';
  // return getAuth().currentUser.photoURL;
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
    return url + '?sz=150';
  }
  return url;
}
