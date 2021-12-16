import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectFavsInSelectedGroup, removeFav } from 'ducks/favs'
import { loadTL, TLState } from 'ducks/tl'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import Presenter from './presenter'

const FavsList: VFC = () => {
  const dispatch = useAppDispatch()
  const favs = useAppSelector(selectFavsInSelectedGroup)
  const openAlert = useCommonAlertContext()
  const makeMenuItems = (tl: TLState) => [
    {
      title: 'TLを読み込み/編集する',
      func: () => {
        dispatch(loadTL(tl))
        openAlert({
          message: 'TLの読み込みに成功しました',
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
      title: 'TLを削除する',
      func: () => {
        dispatch(removeFav(tl.tlId))
        openAlert({
          message: 'TLを削除しました',
          severity: 'warning',
          duration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        })
      },
    },
  ]
  return <Presenter favs={favs} makeManuItems={makeMenuItems} />
}

export default FavsList
