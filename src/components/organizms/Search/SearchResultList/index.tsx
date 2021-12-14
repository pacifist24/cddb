import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  selectSearchResults,
  DBTLDataType,
  removeSearchResult,
  doFav as doFavLocal,
} from 'ducks/search'
import { addFav } from 'ducks/favs'
import { loadTL } from 'ducks/tl'
import { useAuthContext } from 'app/AuthContext'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import { deleteTL, doFav, buildSaveIdFromData } from 'lib/dbRegistration'
import { useCommonDialogContext } from 'components/atoms/CommonDialogProvider'
import { generateTLId } from 'lib/util'

import Presenter from './presenter'

const SearchResultList: VFC = () => {
  const dispatch = useAppDispatch()
  const searchResults = useAppSelector(selectSearchResults)
  const openAlert = useCommonAlertContext()
  const currentUser = useAuthContext().currentUser
  const openDialog = useCommonDialogContext()

  const makeMenuItems = (searchResult: DBTLDataType) => {
    const menuItems = [
      {
        title: 'TLを読み込む',
        func: () => {
          dispatch(loadTL(searchResult.tl))
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
        title: 'TL保管に追加',
        func: () => {
          dispatch(addFav({ targetTLId: generateTLId(), tl: searchResult.tl }))
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
    ]
    const targetId = buildSaveIdFromData(searchResult)
    if (!localStorage.getItem(targetId)) {
      menuItems.push({
        title: 'TLを高評価する',
        func: async () => {
          localStorage.setItem(targetId, 'true')
          await doFav(searchResult)
          dispatch(doFavLocal(searchResult))
          openAlert({
            message: 'TLを高評価しました',
            severity: 'success',
            duration: 1500,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
          })
        },
      })
    }

    if (currentUser && currentUser.uid === searchResult.userId) {
      menuItems.push({
        title: 'TLを削除する',
        func: () => {
          openDialog({
            title: 'TL削除',
            description: 'サーバー上からTLを完全に削除します、元には戻せませんがよろしいですか？',
            buttons: [
              {
                label: 'キャンセル',
                handleClick: () => undefined,
              },
              {
                label: 'OK',
                handleClick: async () => {
                  await deleteTL(searchResult.tl, currentUser)
                  dispatch(removeSearchResult(searchResult))
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
            ],
            onClose: () => undefined,
          })
        },
      })
    }

    return menuItems
  }
  return <Presenter searchResults={searchResults} makeManuItems={makeMenuItems} />
}

export default SearchResultList
