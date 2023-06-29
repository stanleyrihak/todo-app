import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDX9lRDspvMVb-OE106J0aCibkYakC0nj0',
  authDomain: 'todo-list-sr.firebaseapp.com',
  projectId: 'todo-list-sr',
  storageBucket: 'todo-list-sr.appspot.com',
  messagingSenderId: '432150822226',
  appId: '1:432150822226:web:8df22e8a92b531dd684e8b',
  measurementId: 'G-23VBNPDLV0',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
