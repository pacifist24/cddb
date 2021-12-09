import { initializeApp } from 'firebase/app'

const config = {
  apiKey: 'AIzaSyDM28T0TNYhMgy0HkAMaH5iJlb0KYIzeqA',
  authDomain: 'clanbattledb.firebaseapp.com',
  projectId: 'clanbattledb',
  storageBucket: 'clanbattledb.appspot.com',
  messagingSenderId: '559656893121',
  appId: '1:559656893121:web:7fee465e79005784223240',
}

const firebaseApp = initializeApp(config)

export default firebaseApp
