import { VFC, useState } from 'react'
import { doGoodEval as doGoodEvalLocal, undoGoodEval as undoGoodEvalLocal } from 'ducks/search'
import {
  doGoodEval as doGoodEvalServer,
  undoGoodEval as undoGoodEvalServer,
} from 'lib/dbRegistration'

import { useAppDispatch } from 'app/hooks'
import Presenter from './presenter'

export type Props = {
  favsNum: number
  tlId: string
}

const FavButton: VFC<Props> = ({ favsNum, tlId }) => {
  const dispatch = useAppDispatch()
  const isEvaluated = localStorage.getItem(tlId) !== null
  const [disabled, setDisabled] = useState(false)
  const onClick = async () => {
    setDisabled(true)
    if (isEvaluated) {
      // すでに高評価されている場合
      localStorage.removeItem(tlId) // ローカルストレージの高評価の記録を消す
      await undoGoodEvalServer(tlId) // サーバー上の高評価を消す
      dispatch(undoGoodEvalLocal(tlId)) // 画面表示の高評価を消す
    } else {
      // まだ高評価されていない場合
      setDisabled(true)
      localStorage.setItem(tlId, 'true') // ローカルストレージに高評価の記録を付ける
      await doGoodEvalServer(tlId) // サーバー上で高評価する
      dispatch(doGoodEvalLocal(tlId)) // 画面表示で高評価する
    }
    // 変な書き方だけどこうしないとメモリリークの警告が出る・・・
    return (): void => {
      setDisabled(false)
    }
  }
  return (
    <Presenter favsNum={favsNum} isEvaluated={isEvaluated} onClick={onClick} disabled={disabled} />
  )
}

export default FavButton
