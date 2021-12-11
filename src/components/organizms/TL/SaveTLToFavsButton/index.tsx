import { VFC } from 'react'
import { selectTL, changeTLId, selectIsUBsInputVisible } from 'ducks/tl'
import { selectExistTLInFavs, addFav } from 'ducks/favs'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { generateTLId } from 'lib/util'
import { openDialog } from 'ducks/commonDialog'
import { openAlert } from 'ducks/commonAlert'
import Presenter from './presenter'

const SaveTLToFavsButton: VFC = () => {
  const dispatch = useAppDispatch()
  const existTLInFavs = useAppSelector(selectExistTLInFavs)
  const tl = useAppSelector(selectTL)
  const isDisabled = !useAppSelector(selectIsUBsInputVisible)
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
        dispatch(
          openAlert({
            message: 'TLを新規保存しました。',
            severity: 'success',
            duration: 1500,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          }),
        )
      },
    },
    {
      label: '上書き保存',
      handleClick: () => {
        dispatch(addFav({ targetTLId: tl.tlId, tl }))
        dispatch(
          openAlert({
            message: 'TLを上書き保存しました。',
            severity: 'success',
            duration: 1500,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          }),
        )
      },
    },
  ]

  const onClick = () => {
    if (existTLInFavs) {
      // Favs内に既に同じTLIDのTLが存在する場合には上書きするか確認する
      dispatch(
        openDialog({
          title: '上書き保存確認',
          description: 'お気に入りに既に同一IDのTLが存在します、上書き保存しますか？',
          buttons,
          onClose: () => undefined,
        }),
      )
    } else {
      // ない場合は新規に保存する
      dispatch(addFav({ targetTLId: tl.tlId, tl }))
      dispatch(
        openAlert({
          message: 'TLを新規保存しました。',
          severity: 'success',
          duration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        }),
      )
    }
  }

  return <Presenter onClick={onClick} isDisabled={isDisabled} />
}

export default SaveTLToFavsButton
