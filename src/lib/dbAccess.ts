import {
  setDoc,
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocsFromCache,
  loadBundle,
  namedQuery,
} from 'firebase/firestore'
import { TLState } from 'ducks/tl'
import { initializeApp } from 'firebase/app'
import { User } from 'firebase/auth'
import { DBTLDataType } from 'ducks/search'
import { CONFIG, TL_COLLECTION_NAME } from 'lib/dbConstants'

initializeApp(CONFIG)
const db = getFirestore()

/** TLデータの存在チェック */
export const checkExistence = async (tlId: string): Promise<boolean> => {
  const docRef = doc(db, TL_COLLECTION_NAME, tlId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists()
}

/** TLデータの新規登録 */
export const saveTL = async (
  tl: TLState,
  user: User,
  newTLId: string = undefined,
): Promise<void> => {
  try {
    if (newTLId) {
      // DB上にデータが既にある場合に別データとして投稿する想定
      const saveData: DBTLDataType = {
        tl: { ...tl, tlId: newTLId, updateDateUTC: Date.now() },
        fav: 0,
        userName: user.displayName,
        userId: user.uid,
        userPhotoURL: user.photoURL,
      }
      await setDoc(doc(db, TL_COLLECTION_NAME, newTLId), saveData)
    } else {
      // 新規にデータを投稿する想定
      const saveData: DBTLDataType = {
        tl: { ...tl, updateDateUTC: Date.now() },
        fav: 0,
        userName: user.displayName,
        userId: user.uid,
        userPhotoURL: user.photoURL,
      }
      await setDoc(doc(db, TL_COLLECTION_NAME, tl.tlId), saveData)
    }
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

/** TLデータの更新 */
export const updateTL = async (tl: TLState): Promise<void> => {
  try {
    const docRef = doc(db, TL_COLLECTION_NAME, tl.tlId)
    await updateDoc(docRef, {
      tl: { ...tl, updateDateUTC: Date.now() },
    })
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

/** TLデータの削除 */
export const deleteTL = async (tlId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, TL_COLLECTION_NAME, tlId))
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

/** TLに高評価する */
export const doGoodEval = async (tlId: string): Promise<void> => {
  try {
    const docRef = doc(db, TL_COLLECTION_NAME, tlId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const targetData = docSnap.data() as DBTLDataType
      await updateDoc(docRef, {
        fav: targetData.fav + 1,
      })
    }
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

/** TLの高評価を取り消す */
export const undoGoodEval = async (tlId: string): Promise<void> => {
  try {
    const docRef = doc(db, TL_COLLECTION_NAME, tlId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const targetData = docSnap.data() as DBTLDataType
      await updateDoc(docRef, {
        fav: targetData.fav - 1,
      })
    }
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

/** TLを検索する */
// export const fetchTlsData = async (limitNum = 1000): Promise<DBTLDataType[]> => {
//   const q = query(
//     collection(db, TL_COLLECTION_NAME),
//     orderBy('tl.updateDateUTC', 'desc'),
//     orderBy('fav', 'desc'),
//     limit(limitNum),
//   )
//   const querySnapshot = await getDocs(q)
//   return querySnapshot.docs.map((doc) => doc.data()) as DBTLDataType[]
// }

/** バンドル化されたTLを取得する */
export const fetchTlsDataFromBundle = async (): Promise<DBTLDataType[]> => {
  const resp = await fetch('https://clanbattledb.web.app/createBundle')
  await loadBundle(db, resp.body)
  const query = await namedQuery(db, 'latest-tls-query')
  const querySnapshot = await getDocsFromCache(query)
  return querySnapshot.docs.map((doc) => doc.data()) as DBTLDataType[]
}
