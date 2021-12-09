import firebaseApp from 'lib/firebase'
import {
  User,
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithRedirect,
  TwitterAuthProvider,
  signOut,
} from 'firebase/auth'

const provider = new TwitterAuthProvider()

export const login = async (): Promise<void> => {
  const auth = getAuth(firebaseApp)
  await signInWithRedirect(auth, provider)
}

export const logout = (): Promise<void> =>
  new Promise((resolve, reject) => {
    const auth = getAuth(firebaseApp)
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error))
  })

export const onAuthStateChanged = (callback: (user: User | null) => void): void => {
  const auth = getAuth(firebaseApp)

  onFirebaseAuthStateChanged(auth, (user) => {
    const userInfo: User | null = user || null
    callback(userInfo)
  })
}
