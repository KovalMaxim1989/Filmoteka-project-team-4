const config = {
  apiKey: 'AIzaSyCf4tLspRq68Ljv4DBPIn8lepUq3CBW6kQ',
  authDomain: 'filmoteka-bl6.firebaseapp.com',
  projectId: 'filmoteka-bl6',
  storageBucket: 'filmoteka-bl6.appspot.com',
  messagingSenderId: '513518233245',
  appId: '1:513518233245:web:28560022e0c985e2f09674',
  measurementId: 'G-6CEWHL9KG0',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
