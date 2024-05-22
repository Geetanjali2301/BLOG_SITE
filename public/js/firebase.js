const firebaseConfig = {
    apiKey: "AIzaSyAy1jEdLwog_T0_oXmEJWcpMGP2b4XpLO0",
    authDomain: "blogwebpage-634ee.firebaseapp.com",
    projectId: "blogwebpage-634ee",
    storageBucket: "blogwebpage-634ee.appspot.com",
    messagingSenderId: "7413488826",
    appId: "1:7413488826:web:a8353257b701a9d6aff683",
    measurementId: "G-Z7JRWL57SR"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();