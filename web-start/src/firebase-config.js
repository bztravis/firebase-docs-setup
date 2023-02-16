/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: 'AIzaSyDl8c_OHXURv4j3IUF9dyOJOaA6ld-wvnk',
  authDomain: 'friendlychat-cd020.firebaseapp.com',
  projectId: 'friendlychat-cd020',
  storageBucket: 'friendlychat-cd020.appspot.com',
  messagingSenderId: '1036245935419',
  appId: '1:1036245935419:web:b99965f71ff0b54e0ac31e',
}

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    )
  } else {
    return config
  }
}
