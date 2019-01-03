import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details, rename file as fbConfig.js
var fbConfig = {
    apiKey: "####################################",
    authDomain: "####################################",
    databaseURL: "####################################",
    projectId: "####################################",
    storageBucket: "####################################",
    messagingSenderId: "####################################"
  };
firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase 
