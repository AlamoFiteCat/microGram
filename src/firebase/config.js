// Import
import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASzBqeHO8lfiLHoCv9BEl8fyd_64MH2vs',
  authDomain: 'react-firegram-36b63.firebaseapp.com',
  databaseURL: 'https://react-firegram-36b63.firebaseio.com',
  projectId: 'react-firegram-36b63',
  storageBucket: 'react-firegram-36b63.appspot.com',
  messagingSenderId: '248375751905',
  appId: '1:248375751905:web:6fb28dea5566150b66b3a0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
