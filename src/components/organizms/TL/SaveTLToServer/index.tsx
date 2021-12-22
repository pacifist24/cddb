import { VFC } from 'react'
import { selectTL, selectIsUBsInputVisible } from 'ducks/tl'
import { useAppSelector } from 'app/hooks'
import { generateTLId } from 'lib/util'
import { saveTL, updateTL, checkExistence } from 'lib/dbAccess'
import { useCommonDialogContext } from 'components/atoms/CommonDialogProvider'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import { useAuthContext } from 'app/AuthContext'
import Presenter from './presenter'

const SaveTLToServer: VFC = () => {
  const tl = useAppSelector(selectTL)
  const openAlert = useCommonAlertContext()
  const currentUser = useAuthContext().currentUser
  // ログインしてないもしくはTL入力が不完全の場合非活性にする
  const isDisabled = !useAppSelector(selectIsUBsInputVisible) || !currentUser
  const openDialog = useCommonDialogContext()
  const buttonsExist = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: '新規登録',
      handleClick: async () => {
        const newTLId = generateTLId()
        await saveTL(tl, currentUser, newTLId)
        openAlert({
          message: 'TLをサーバーに新規公開しました。',
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
      label: '更新する',
      handleClick: async () => {
        await updateTL(tl)
        openAlert({
          message: 'サーバー上のTLを更新しました。',
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

  const buttonsNotExist = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: 'OK',
      handleClick: async () => {
        await saveTL(tl, currentUser)
        openAlert({
          message: 'TLをサーバーに新規公開しました。',
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

  const onClick = async () => {
    const existTL = await checkExistence(tl.tlId)
    if (existTL) {
      openDialog({
        title: 'サーバーにTLを公開',
        description:
          'サーバー上に既に同一IDのTLデータが存在します。上書き更新しますか？新規TLとして登録しますか？',
        buttons: buttonsExist,
        onClose: () => undefined,
      })
    } else {
      openDialog({
        title: 'サーバーにTLを公開',
        description: 'サーバーにTLを公開してよろしいですか？',
        buttons: buttonsNotExist,
        onClose: () => undefined,
      })
    }
  }

  return <Presenter onClick={onClick} isDisabled={isDisabled} />
}

export default SaveTLToServer
