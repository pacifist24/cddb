import { VFC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectDisplayedContent } from 'ducks/main'
import { loadStyle, selectStyle, StyleState } from 'ducks/style'
import { FavsState, loadFavs, selectFavs } from 'ducks/favs'
import { TLState, selectTL, loadTL } from 'ducks/tl'
import Presenter from './presenter'

const Main: VFC = () => {
  const dispatch = useAppDispatch()
  const displayedContent = useAppSelector(selectDisplayedContent)
  const favs = useAppSelector(selectFavs)
  const tl = useAppSelector(selectTL)
  const style = useAppSelector(selectStyle)

  const tlLocalStrageKey = `tl${process.env.version}`
  const favsLocalStrageKey = `favs${process.env.version}`
  const styleLocalStrageKey = `style${process.env.version}`
  // マウント時に各種設定を初期化する
  useEffect(() => {
    // ローカルストレージにStyleの設定があれば設定する
    if (localStorage.getItem(styleLocalStrageKey)) {
      dispatch(loadStyle(JSON.parse(localStorage.getItem(styleLocalStrageKey)) as StyleState))
    }

    // ローカルストレージにFavsの設定があれば設定する
    if (localStorage.getItem(favsLocalStrageKey)) {
      dispatch(loadFavs(JSON.parse(localStorage.getItem(favsLocalStrageKey)) as FavsState))
    }

    // ローカルストレージにtlの設定があれば設定する
    if (localStorage.getItem(tlLocalStrageKey)) {
      dispatch(loadTL(JSON.parse(localStorage.getItem(tlLocalStrageKey)) as TLState))
    }
  }, [dispatch, favsLocalStrageKey, styleLocalStrageKey, tlLocalStrageKey])

  // style変更時にローカルストレージに保存する
  useEffect(() => {
    localStorage.setItem(styleLocalStrageKey, JSON.stringify(style))
  }, [style, styleLocalStrageKey])

  // Favs変更時にローカルストレージに保存する
  useEffect(() => {
    localStorage.setItem(favsLocalStrageKey, JSON.stringify({ favsList: favs }))
  }, [favs, favsLocalStrageKey])

  // tl変更時にローカルストレージに保存する
  useEffect(() => {
    localStorage.setItem(tlLocalStrageKey, JSON.stringify(tl))
  }, [tl, tlLocalStrageKey])

  return <Presenter displayedContent={displayedContent} />
}

export default Main
