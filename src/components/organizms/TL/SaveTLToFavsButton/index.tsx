import { VFC, useState } from 'react'
import { selectTL, changeTLId, selectIsUBsInputVisible } from 'ducks/tl'
import { selectExistFavByTLIdAndGroupName, addFav } from 'ducks/favs'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { generateTLId } from 'lib/util'
import { useCommonDialogContext } from 'components/atoms/CommonDialogProvider'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import Presenter from './presenter'

const SaveTLToFavsButton: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const openAlert = useCommonAlertContext()
  const isDisabled = !useAppSelector(selectIsUBsInputVisible)
  const openDialog = useCommonDialogContext()
  const [groupName, setGroupName] = useState('')
  const [isGroupNameSelectDialogOpen, setIsGroupNameSelectDialogOpen] = useState(false)
  const existTLInFavs = useAppSelector(selectExistFavByTLIdAndGroupName(tl.tlId, groupName))

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
        dispatch(addFav({ targetTLId: newId, tl, group: groupName }))
        openAlert({
          message: 'TLを新規保存しました。',
          severity: 'success',
          duration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        })
      },
    },
    {
      label: '上書き保存',
      handleClick: () => {
        dispatch(addFav({ targetTLId: tl.tlId, tl, group: groupName }))
        openAlert({
          message: 'TLを上書き保存しました。',
          severity: 'success',
          duration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        })
      },
    },
  ]

  const handleClickOK = () => {
    if (existTLInFavs) {
      // Favs内に既に同じグループかつ同じTLIDのTLが存在する場合には上書きするか確認する
      openDialog({
        title: '上書き保存確認',
        description: 'TL保管に既に同一IDのTLが存在します、上書き保存しますか？',
        buttons,
        onClose: () => undefined,
      })
    } else {
      // ない場合は新規に保存する
      const newId = generateTLId()
      dispatch(changeTLId(newId))
      dispatch(addFav({ targetTLId: newId, tl, group: groupName }))
      openAlert({
        message: 'TLを新規保存しました。',
        severity: 'success',
        duration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      })
    }
    setIsGroupNameSelectDialogOpen(false)
  }

  return (
    <Presenter
      onClick={() => setIsGroupNameSelectDialogOpen(true)}
      isDisabled={isDisabled}
      groupName={groupName}
      isOpen={isGroupNameSelectDialogOpen}
      setIsOpen={setIsGroupNameSelectDialogOpen}
      handleChangeGroupName={setGroupName}
      handleClickOK={handleClickOK}
      handleClickCancel={() => setIsGroupNameSelectDialogOpen(false)}
    />
  )
}

export default SaveTLToFavsButton
