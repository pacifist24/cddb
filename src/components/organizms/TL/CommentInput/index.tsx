import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeComment, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const CommentInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)

  return (
    <Presenter
      tl={tl}
      changeComment={(comment) => dispatch(changeComment(comment))}
      isCharactersSelected={isCharactersSelected}
    />
  )
}

export default CommentInput
