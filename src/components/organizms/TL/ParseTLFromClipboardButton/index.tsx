import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { loadTL, selectHasTlId } from 'ducks/tl'
import { changeStartTime } from 'ducks/style'
import { openAlert } from 'ducks/commonAlert'
import parseTlData from 'lib/tLParser'
import { useCommonDialogContext } from 'components/atoms/CommonDialogProvider'
import Presenter from './presenter'

const ParseTLFromClipboardButton: VFC = () => {
  const dispatch = useAppDispatch()
  const openDialog = useCommonDialogContext()
  const handleClickOK = () => {
    navigator.clipboard
      .readText()
      .then((clipText) => {
        const tlData = parseTlData(clipText)
        if (tlData) {
          dispatch(loadTL(tlData))
          dispatch(changeStartTime(tlData.startTime))
        } else {
          dispatch(
            openAlert({
              message: 'TLの解析に失敗しました',
              severity: 'error',
              duration: 3000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
              },
            }),
          )
        }
      })
      .catch(() => undefined)
  }

  const buttons = [
    {
      label: 'キャンセル',
      handleClick: () => undefined,
    },
    {
      label: 'OK',
      handleClick: handleClickOK,
    },
  ]

  const hasId = useAppSelector(selectHasTlId)
  const onClick = () => {
    if (hasId) {
      openDialog({
        title: 'クリップボードからTLを読み込み',
        description:
          'クリップボードからTLを読み込んだ場合、今までの入力は全て破棄されますがよろしいですか？',
        buttons,
        onClose: () => undefined,
      })
    } else {
      handleClickOK()
    }
  }

  return <Presenter onClick={onClick} />
}
export default ParseTLFromClipboardButton
