import { VFC, useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectCharacters, changeCharacters, sanitizeUB } from 'ducks/tl'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import { CHARACTERS_INFO, MAX_LV, MAX_RANK } from 'lib/gameConstants'
import { getDefaultSpecialLv } from 'lib/util'
import Presenter from './presenter'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const CharacterSelectModal: VFC<Props> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch()
  const characters = useAppSelector(selectCharacters)

  const [tempSelectedCharacters, setTempSelectedCharacters] = useState<string[]>([])
  const openAlert = useCommonAlertContext()
  useEffect(() => {
    setTempSelectedCharacters(
      characters.filter((character) => character.name !== '').map((character) => character.name),
    )
  }, [characters])

  const toggleIsSelected = (name: string, isSelectedNow: boolean) => {
    if (isSelectedNow) {
      // 対象キャラクターが現在選択しているなら選択を外す処理
      setTempSelectedCharacters(tempSelectedCharacters.filter((val) => val !== name))
    } else if (tempSelectedCharacters.length < 5) {
      // 未選択かつ5キャラ選択されていなければキャラを選択する
      setTempSelectedCharacters([...tempSelectedCharacters, name])
    }
  }

  const handleOK = () => {
    if (tempSelectedCharacters.length < 5) {
      openAlert({
        message: '5キャラ選択してください',
        severity: 'error',
        duration: 3000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      })
    } else {
      dispatch(
        changeCharacters(
          tempSelectedCharacters
            .map((name) => ({
              name,
              star: CHARACTERS_INFO[name].maxStar,
              lv: MAX_LV,
              rank: MAX_RANK,
              specialLv: getDefaultSpecialLv(name),
              comment: '',
            }))
            .sort((a, b) => CHARACTERS_INFO[a.name].position - CHARACTERS_INFO[b.name].position),
        ),
      )
      dispatch(sanitizeUB())
      setIsOpen(false)
    }
  }

  return (
    <Presenter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      tempSelectedCharacters={tempSelectedCharacters}
      toggleIsSelected={toggleIsSelected}
      handleOK={handleOK}
    />
  )
}

export default CharacterSelectModal
