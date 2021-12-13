/* eslint-disable import/prefer-default-export */
import { getFirestore, getDocs, collection, limit, orderBy, query } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { DBTLDataType } from 'ducks/search'
import { CONFIG, TL_COLLECTION_NAME } from 'lib/dbConstants'

initializeApp(CONFIG)
const db = getFirestore()
export const fetchTlsData = async (limitNum = 1000): Promise<DBTLDataType[]> => {
  const q = query(
    collection(db, TL_COLLECTION_NAME),
    orderBy('tl.updateDateUTC', 'desc'),
    orderBy('fav', 'desc'),
    limit(limitNum),
  )
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map((doc) => doc.data()) as DBTLDataType[]
}
