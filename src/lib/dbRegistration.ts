import { setDoc, getFirestore, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { TLState } from 'ducks/tl'
import { initializeApp } from 'firebase/app'
import { User } from 'firebase/auth'
import { DBTLDataType } from 'ducks/search'
import { CONFIG, TL_COLLECTION_NAME } from 'lib/dbConstants'

initializeApp(CONFIG)
const db = getFirestore()

export const buildSaveId = (tlId: string, user: User): string => tlId + user.uid
export const buildSaveIdFromData = (data: DBTLDataType): string => data.tl.tlId + data.userId

/** TLデータの存在チェック */
export const checkExistence = async (tlId: string, user: User): Promise<boolean> => {
  const id = buildSaveId(tlId, user)
  const docRef = doc(db, TL_COLLECTION_NAME, id)
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
      const saveId = buildSaveId(newTLId, user)
      await setDoc(doc(db, TL_COLLECTION_NAME, saveId), saveData)
    } else {
      // 新規にデータを投稿する想定
      const saveData: DBTLDataType = {
        tl: { ...tl, updateDateUTC: Date.now() },
        fav: 0,
        userName: user.displayName,
        userId: user.uid,
        userPhotoURL: user.photoURL,
      }
      const saveId = buildSaveId(tl.tlId, user)
      await setDoc(doc(db, TL_COLLECTION_NAME, saveId), saveData)
    }
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

/** TLデータの更新 */
export const updateTL = async (tl: TLState, user: User): Promise<void> => {
  try {
    const saveId = buildSaveId(tl.tlId, user)
    const docRef = doc(db, TL_COLLECTION_NAME, saveId)
    await updateDoc(docRef, {
      tl: { ...tl, updateDateUTC: Date.now() },
    })
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

/** TLデータの削除 */
export const deleteTL = async (tl: TLState, user: User): Promise<void> => {
  const deleteId = buildSaveId(tl.tlId, user)
  try {
    await deleteDoc(doc(db, TL_COLLECTION_NAME, deleteId))
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

/** TLにFavする */
export const doFav = async (target: DBTLDataType): Promise<void> => {
  const targetId = buildSaveIdFromData(target)
  try {
    const docRef = doc(db, TL_COLLECTION_NAME, targetId)
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
