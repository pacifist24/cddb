import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeDisplayedContent, selectDisplayedContent, ContentType } from 'ducks/main'
import Presenter from './presenter'

const Sidebar: VFC = () => {
  const dispatch = useAppDispatch()
  const displayedContent = useAppSelector(selectDisplayedContent)
  const handleChangeDisplayedContent = (value: ContentType) => {
    dispatch(changeDisplayedContent(value))
  }
  return (
    <Presenter
      displayedContent={displayedContent}
      handleChangeDisplayedContent={handleChangeDisplayedContent}
    />
  )
}

export default Sidebar
