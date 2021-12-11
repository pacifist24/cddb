import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectFavs, removeFav } from 'ducks/favs'
import { loadTL, TLState } from 'ducks/tl'
import { openAlert } from 'ducks/commonAlert'
import Presenter from './presenter'

const Favs: VFC = () => {
  const dispatch = useAppDispatch()
  const tls = useAppSelector(selectFavs)

  const makeMenuItems = (tl: TLState) => [
    {
      title: 'TLを読み込み/編集する',
      func: () => {
        dispatch(loadTL(tl))
        dispatch(
          openAlert({
            message: 'TLの読み込みに成功しました',
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
      title: 'TLを削除する',
      func: () => dispatch(removeFav(tl.tlId)),
    },
  ]
  return <Presenter tls={tls} makeManuItems={makeMenuItems} />
}

export default Favs
