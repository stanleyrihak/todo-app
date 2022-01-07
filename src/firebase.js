// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDX9lRDspvMVb-OE106J0aCibkYakC0nj0',
  authDomain: 'todo-list-sr.firebaseapp.com',
  projectId: 'todo-list-sr',
  storageBucket: 'todo-list-sr.appspot.com',
  messagingSenderId: '432150822226',
  appId: '1:432150822226:web:8df22e8a92b531dd684e8b',
  measurementId: 'G-23VBNPDLV0',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const db = getFirestore(app)
