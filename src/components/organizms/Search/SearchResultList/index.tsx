import { VFC, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectSearchResults, DBTLDataType, removeSearchResult } from 'ducks/search'
import { addFav } from 'ducks/favs'
import { loadTL, TLState } from 'ducks/tl'
import { useAuthContext } from 'app/AuthContext'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import { deleteTL } from 'lib/dbAccess'
import { useCommonDialogContext } from 'components/atoms/CommonDialogProvider'
import { generateTLId } from 'lib/util'

import Presenter from './presenter'

const SearchResultList: VFC = () => {
  const dispatch = useAppDispatch()
  const searchResults = useAppSelector(selectSearchResults)
  const openAlert = useCommonAlertContext()
  const currentUser = useAuthContext().currentUser
  const openDialog = useCommonDialogContext()

  const [groupName, setGroupName] = useState('')
  const [isGroupNameSelectDialogOpen, setIsGroupNameSelectDialogOpen] = useState(false)
  const [targetTL, setTargetTL] = useState<TLState>(undefined)

  const handleClickDialogOK = () => {
    dispatch(addFav({ targetTLId: generateTLId(), tl: targetTL, group: groupName }))
    setIsGroupNameSelectDialogOpen(false)
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
          setTargetTL(searchResult.tl)
          setIsGroupNameSelectDialogOpen(true)
        },
      },
    ]

    if (currentUser && currentUser.uid === searchResult.userId) {
      menuItems.push({
        title: 'TLを公開サーバー上から削除する',
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
                  await deleteTL(searchResult.tl.tlId)
                  dispatch(removeSearchResult(searchResult.tl.tlId))
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
  return (
    <Presenter
      searchResults={searchResults}
      makeManuItems={makeMenuItems}
      groupName={groupName}
      handleChangeGroupName={setGroupName}
      isOpen={isGroupNameSelectDialogOpen}
      setIsOpen={setIsGroupNameSelectDialogOpen}
      handleClickOK={handleClickDialogOK}
      handleClickCancel={() => setIsGroupNameSelectDialogOpen(false)}
    />
  )
}

export default SearchResultList
