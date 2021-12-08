import { VFC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectDisplayedContent } from 'ducks/main'
import { initNameConversionRule } from 'ducks/style'
import { CHARACTERS_INFO } from 'lib/gameConstants'
import Presenter from './presenter'

const Main: VFC = () => {
  const dispatch = useAppDispatch()
  const displayedContent = useAppSelector(selectDisplayedContent)
  // マウント時に各種設定を初期化する
  useEffect(() => {
    // ローカルストレージにStyleの設定があれば設定する
    if (localStorage.getItem(`name${process.env.version}`)) {
      dispatch(
        initNameConversionRule(
          JSON.parse(localStorage.getItem(`name${process.env.version}`)) as {
            [key: string]: string
          },
        ),
      )
    } else {
      const nameConversionTable = {}
      Object.keys(CHARACTERS_INFO).forEach((name) => {
        if (CHARACTERS_INFO[name].defaultShortName) {
          nameConversionTable[name] = CHARACTERS_INFO[name].defaultShortName
        }
      })
      dispatch(initNameConversionRule(nameConversionTable))
    }
  }, [dispatch])
  return <Presenter displayedContent={displayedContent} />
}

export default Main
