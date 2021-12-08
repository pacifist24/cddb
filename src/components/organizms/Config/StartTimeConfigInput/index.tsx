import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectStartTime, changeStartTime } from 'ducks/style'
import Presenter from './presenter'

const StartTimeConfigInput: VFC = () => {
  const dispatch = useAppDispatch()
  const handleChangeStartTime = (time: number) => {
    dispatch(changeStartTime(time))
  }
  const startTime = useAppSelector(selectStartTime)

  return <Presenter startTime={startTime} changeStartTime={handleChangeStartTime} />
}
export default StartTimeConfigInput
