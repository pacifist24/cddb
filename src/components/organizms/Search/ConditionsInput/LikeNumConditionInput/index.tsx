import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectLikeNumCondition, changeLikeNumCondition } from 'ducks/search'
import Presenter from './presenter'

const selectBoxValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 50, 100, 300, 500, 1000]

const LikeNumConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const likeNumCondition = useAppSelector(selectLikeNumCondition)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLikeNumCondition(parseInt(e.target.value, 10)))
  }
  const items = selectBoxValue.map((element) => ({
    value: element,
    label: element,
  }))
  return <Presenter value={likeNumCondition} items={items} onChange={onChange} disabled={false} />
}

export default LikeNumConditionInput
