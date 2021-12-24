import { VFC } from 'react'
import { selectTL, selectIsUBsInputVisible } from 'ducks/tl'
import { useAppSelector } from 'app/hooks'
import { saveTL } from 'lib/dbAccess'
import { generateTLId } from 'lib/util'
import { useCommonDialogContext } from 'components/atoms/CommonDialogProvider'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import { useAuthContext } from 'app/AuthContext'
import Presenter from './presenter'

const SaveTLToServerButton: VFC = () => {
  const tl = useAppSelector(selectTL)
  const openAlert = useCommonAlertContext()
  const currentUser = useAuthContext().currentUser
  // ログインしてないもしくはTL入力が不完全の場合非活性にする
  const isDisabled = !useAppSelector(selectIsUBsInputVisible) || !currentUser
  const openDialog = useCommonDialogContext()

  const buttons = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: 'OK',
      handleClick: async () => {
        const newTLId = generateTLId()
        await saveTL(tl, currentUser, newTLId)
        openAlert({
          message: 'TLをサーバーに新規公開しました。（反映には数分かかります）',
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

  const onClick = () => {
    openDialog({
      title: 'サーバーにTLを公開',
      description: 'サーバーにTLを公開してよろしいですか？（反映には数分かかります）',
      buttons,
      onClose: () => undefined,
    })
  }

  return <Presenter onClick={onClick} isDisabled={isDisabled} />
}

export default SaveTLToServerButton
