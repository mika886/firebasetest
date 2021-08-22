import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCuOqbUiJWGqILdtreNYHWbOFUBgGsO9As",
      authDomain: "fir-test-20108.firebaseapp.com",
      projectId: "fir-test-20108",
      storageBucket: "fir-test-20108.appspot.com",
      messagingSenderId: "1096673951709",
      appId: "1:1096673951709:web:d5d9db86a25a13333a0034",
      measurementId: "G-KE48S7X5S3"
    }
  )
}

export default firebase
