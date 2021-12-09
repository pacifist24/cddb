import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeDisplayedContent, selectDisplayedContent, ContentType } from 'ducks/main'
import { useAuthContext } from 'app/AuthContext'
import Presenter from './presenter'

const Sidebar: VFC = () => {
  const dispatch = useAppDispatch()
  const displayedContent = useAppSelector(selectDisplayedContent)
  const handleChangeDisplayedContent = (value: ContentType) => {
    dispatch(changeDisplayedContent(value))
  }
  const currentUser = useAuthContext().currentUser

  return (
    <Presenter
      displayedContent={displayedContent}
      handleChangeDisplayedContent={handleChangeDisplayedContent}
      currentUser={currentUser}
    />
  )
}

export default Sidebar
