import { VFC, useState } from 'react'
import { selectHasTlId, initializeTL, changeTLId } from 'ducks/tl'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { generateTLId } from 'lib/util'
import Presenter from './presenter'

const CharactersSelectButton: VFC = () => {
  const dispatch = useAppDispatch()
  const hasId = useAppSelector(selectHasTlId)
  const [isCharactersSelectModalOpen, setIsCharactersSelectModalOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const buttons = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: 'OK',
      handleClick: () => {
        dispatch(initializeTL())
        dispatch(changeTLId(generateTLId()))
        setIsCharactersSelectModalOpen(true)
      },
    },
  ]

  const onClick = () => {
    if (hasId) {
      // 既に入力がある場合（TLIDの存在で判断）は確認のダイアログを開く
      setIsDialogOpen(true)
    } else {
      // 未入力の場合はTLIDを生成後、確認無しでキャラ選択モダルを開く
      dispatch(changeTLId(generateTLId()))
      setIsCharactersSelectModalOpen(true)
    }
  }

  return (
    <Presenter
      onClick={onClick}
      setIsCharactersSelectModalOpen={setIsCharactersSelectModalOpen}
      isCharactersSelectModalOpen={isCharactersSelectModalOpen}
      onDialogClose={() => undefined}
      dialogButtons={buttons}
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  )
}

export default CharactersSelectButton
