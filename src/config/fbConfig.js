import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC4iEwv0dpHEYzydlxBzT0_QbmQ4o0xVM4",
  authDomain: "marioplan-a5c73.firebaseapp.com",
  databaseURL: "https://marioplan-a5c73.firebaseio.com",
  projectId: "marioplan-a5c73",
  storageBucket: "",
  messagingSenderId: "983706580725",
  appId: "1:983706580725:web:33d27955d73fde38"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;
