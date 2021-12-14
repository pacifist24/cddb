import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectUpdateDateLimit, changeUpdateDateLimit } from 'ducks/search'
import Presenter from './presenter'

const UpdateDateLimitInput: VFC = () => {
  const dispatch = useAppDispatch()
  const likeNumCondition = useAppSelector(selectUpdateDateLimit)

  return (
    <Presenter
      updateDateLimit={likeNumCondition}
      changeUpdateDateLimit={(value: number) => dispatch(changeUpdateDateLimit(value))}
    />
  )
}

export default UpdateDateLimitInput
