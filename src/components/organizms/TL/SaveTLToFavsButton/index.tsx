import { VFC, useState } from 'react'
import { selectTL, changeTLId } from 'ducks/tl'
import { selectExistTLInFavs, addFav } from 'ducks/favs'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { generateTLId } from 'lib/util'
import Presenter from './presenter'

const SaveTLToFavsButton: VFC = () => {
  const dispatch = useAppDispatch()
  const existTLInFavs = useAppSelector(selectExistTLInFavs)
  const tl = useAppSelector(selectTL)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const buttons = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: '新規保存',
      handleClick: () => {
        const newId = generateTLId()
        dispatch(changeTLId(newId))
        dispatch(addFav({ targetTLId: newId, tl }))
      },
    },
    {
      label: '上書き保存',
      handleClick: () => {
        dispatch(addFav({ targetTLId: tl.tlId, tl }))
      },
    },
  ]

  const onClick = () => {
    if (existTLInFavs) {
      // Favs内に既に同じTLIDのTLが存在する場合には上書きするか確認する
      setIsDialogOpen(true)
    } else {
      // ない場合は新規に保存する
      dispatch(addFav({ targetTLId: tl.tlId, tl }))
    }
  }

  return (
    <Presenter
      onClick={onClick}
      onDialogClose={() => undefined}
      dialogButtons={buttons}
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  )
}

export default SaveTLToFavsButton
