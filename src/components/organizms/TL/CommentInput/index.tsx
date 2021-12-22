import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectComment, changeComment, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const CommentInput: VFC = () => {
  const dispatch = useAppDispatch()
  const comment = useAppSelector(selectComment)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeComment(e.target.value))

  return <Presenter value={comment} onChange={onChange} disabled={!isCharactersSelected} />
}

export default CommentInput
