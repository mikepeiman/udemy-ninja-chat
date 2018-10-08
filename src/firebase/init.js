  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzWOUiC5xzUf04_9DJHQvotf1ovTpiHio",
    authDomain: "udemy-ninja-chat-9da67.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-9da67.firebaseio.com",
    projectId: "udemy-ninja-chat-9da67",
    storageBucket: "udemy-ninja-chat-9da67.appspot.com",
    messagingSenderId: "439592703969"
  };
  const firebaseApp = firebase.initializeApp(config);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
