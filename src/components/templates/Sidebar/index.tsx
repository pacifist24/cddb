import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeDisplayedContent, selectDisplayedContent, ContentType } from 'ducks/main'
import useMedia from 'use-media'
import Presenter from './presenter'

const Sidebar: VFC = () => {
  const dispatch = useAppDispatch()
  const displayedContent = useAppSelector(selectDisplayedContent)
  const handleChangeDisplayedContent = (value: ContentType) => {
    dispatch(changeDisplayedContent(value))
  }
  const isWide = useMedia({ minWidth: '1000px' })

  return (
    <Presenter
      displayedContent={displayedContent}
      handleChangeDisplayedContent={handleChangeDisplayedContent}
      isWide={isWide}
    />
  )
}

export default Sidebar
