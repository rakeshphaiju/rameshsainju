import firebase from 'firebase'
import 'firebase/storage'


 const app =  firebase.initializeApp({
  "projectId": "frb-albm",
  "appId": "1:45417098047:web:3e2bbb21a0d4d369a1418a",
  "databaseURL": "https://frb-albm.firebaseio.com",
  "storageBucket": "frb-albm.appspot.com",
  "locationId": "europe-west",
  "apiKey": "AIzaSyBUsRNCof6RAXRn8iUl307Xb_mWkvFfWuU",
  "authDomain": "frb-albm.firebaseapp.com",
  "messagingSenderId": "45417098047"
});

export default app;
