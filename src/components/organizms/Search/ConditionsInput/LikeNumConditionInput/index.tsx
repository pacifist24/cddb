import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectLikeNumCondition, changeLikeNumCondition } from 'ducks/search'
import Presenter from './presenter'

const LikeNumConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const likeNumCondition = useAppSelector(selectLikeNumCondition)

  return (
    <Presenter
      likeNumCondition={likeNumCondition}
      changeLikeNumCondition={(value: number) => dispatch(changeLikeNumCondition(value))}
    />
  )
}

export default LikeNumConditionInput
