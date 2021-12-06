import { VFC } from 'react'
import { useAppSelector } from 'app/hooks'
import { selectDisplayedContent } from 'ducks/main'
import Presenter from './presenter'

const Main: VFC = () => {
  const displayedContent = useAppSelector(selectDisplayedContent)
  return <Presenter displayedContent={displayedContent} />
}

export default Main
