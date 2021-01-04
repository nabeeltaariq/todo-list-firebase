// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'
import 'firebase/firestore'

const firebaseapp = firebase.initializeApp({
  apiKey: 'AIzaSyBtSlrNCG5vUzL1WNiBGP89fuvbAzglkNw',
  authDomain: 'todo-app-4cbff.firebaseapp.com',
  projectId: 'todo-app-4cbff',
  storageBucket: 'todo-app-4cbff.appspot.com',
  messagingSenderId: '455679695381',
  appId: '1:455679695381:web:9178f8f29971f02f5c8c1c',
  measurementId: 'G-PQE28NH3CS',
})

const db = firebase.firestore()
export default db
