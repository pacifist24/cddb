import { initializeApp } from 'firebase/app'
import { CONFIG } from 'lib/dbConstants'

const firebaseApp = initializeApp(CONFIG)

export default firebaseApp
