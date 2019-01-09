import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details, rename file as fbConfig.js
var fbConfig = {
    apiKey: "FB_API_KEY",
    authDomain: "FB_AUTH_DOMAIN",
    databaseURL: "FB_DB_URL",
    projectId: "FB_PROJECT_ID",
    storageBucket: "FB_STORAGE_BUCKET",
    messagingSenderId: "FB_SENDER_ID"
  };
firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase 
