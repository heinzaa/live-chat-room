import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyD2Z9gavAOzfqGM4x-UfQ1AhTCcseotHqY",
    authDomain: "live-chat-5d5ef.firebaseapp.com",
    projectId: "live-chat-5d5ef",
    storageBucket: "live-chat-5d5ef.appspot.com",
    messagingSenderId: "744466783482",
    appId: "1:744466783482:web:9e7c1ea72f986591b1fd43"
  };

  firebase.initializeApp(firebaseConfig)


  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp}