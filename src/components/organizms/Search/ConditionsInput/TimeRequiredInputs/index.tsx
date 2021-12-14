import { VFC } from 'react'
import {
  changeTimeRequiredLower,
  changeTimeRequiredUpper,
  selectTimeRequiredLower,
  selectTimeRequiredUpper,
} from 'ducks/search'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import Presenter from './presenter'

const SortConditionRadio: VFC = () => {
  const dispatch = useAppDispatch()
  const timeRequiredLower = useAppSelector(selectTimeRequiredLower)
  const timeRequiredUpper = useAppSelector(selectTimeRequiredUpper)
  return (
    <Presenter
      timeRequiredLower={timeRequiredLower}
      timeRequiredUpper={timeRequiredUpper}
      changeTimeRequiredLower={(value: number) => dispatch(changeTimeRequiredLower(value))}
      changeTimeRequiredUpper={(value: number) => dispatch(changeTimeRequiredUpper(value))}
    />
  )
}

export default SortConditionRadio
