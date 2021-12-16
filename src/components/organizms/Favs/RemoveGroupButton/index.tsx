import { VFC } from 'react'
import { removeGroup, selectSelectedGroup } from 'ducks/favs'
import { useCommonDialogContext } from 'components/atoms/CommonDialogProvider'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import Presenter from './presenter'

const AddGroupButton: VFC = () => {
  const dispatch = useAppDispatch()
  const selectedGroup = useAppSelector(selectSelectedGroup)
  const openDialog = useCommonDialogContext()
  const buttons = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: 'OK',
      handleClick: () => {
        dispatch(removeGroup(selectedGroup))
      },
    },
  ]

  const handleClick = () => {
    openDialog({
      title: 'グループの削除',
      description: `グループ「${selectedGroup}」を削除します。グループを削除するとグループに登録されたTLも同時に削除されますがよろしいですか？`,
      buttons,
      onClose: () => undefined,
    })
  }

  return <Presenter handleClick={handleClick} />
}

export default AddGroupButton
