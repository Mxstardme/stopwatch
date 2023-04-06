import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDRSgCSuL0I7S4mvC-nwAqDiDa-c57ciag",
  authDomain: "stopwatch-app-75ff6.firebaseapp.com",
  projectId: "stopwatch-app-75ff6",
  storageBucket: "stopwatch-app-75ff6.appspot.com",
  messagingSenderId: "558557723001",
  appId: "1:558557723001:web:4ab65fd3c8620cc00017a8"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database()