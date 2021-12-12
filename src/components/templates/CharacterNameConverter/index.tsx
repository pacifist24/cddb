import { VFC, useEffect } from 'react'
import { CHARACTERS_INFO } from 'lib/gameConstants'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { initNameConversionRule, selectNameConversionTable } from 'ducks/style'
import Presenter from './presenter'

const CharacterNameConverterTab: VFC = () => {
  const dispatch = useAppDispatch()
  const nameConversionTable = useAppSelector(selectNameConversionTable)
  // キャラ名称設定の規則が空の場合(主に初回表示時)にデフォルトの略名を入れる
  useEffect(() => {
    if (Object.keys(nameConversionTable).length === 0) {
      const nameConversionTable = {}

      Object.keys(CHARACTERS_INFO).forEach((name) => {
        if (CHARACTERS_INFO[name].defaultShortName) {
          nameConversionTable[name] = CHARACTERS_INFO[name].defaultShortName
        }
      })
      dispatch(initNameConversionRule(nameConversionTable))
    }
  }, [dispatch, nameConversionTable])
  return <Presenter />
}

export default CharacterNameConverterTab
