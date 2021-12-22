import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import {
  changeStartTime,
  changeEndTime,
  addUB,
  selectIsUBsInputVisible,
  selectTimeline,
  selectStartTime,
  selectEndTime,
  selectCharacters,
} from 'ducks/tl'
import { changeStartTime as changeStyleStartTime } from 'ducks/style'
import Presenter from './presenter'

const UBsInput: VFC = () => {
  const dispatch = useAppDispatch()
  const ubs = useAppSelector(selectTimeline)
  const startTime = useAppSelector(selectStartTime)
  const endTime = useAppSelector(selectEndTime)
  const characters = useAppSelector(selectCharacters)
  const isUBsInputVisible = useAppSelector(selectIsUBsInputVisible)
  const insertUBFirst = () =>
    dispatch(
      addUB({
        index: 0,
        ub: {
          id: Math.random(),
          time: startTime,
          name: characters[0].name,
          comment: '',
        },
      }),
    )
  const handleChangeStartTime = (time: number) => {
    dispatch(changeStartTime(time))
    dispatch(changeStyleStartTime(time))
  }

  return (
    <Presenter
      ubs={ubs}
      startTime={startTime}
      endTime={endTime}
      isUBsInputVisible={isUBsInputVisible}
      changeStartTime={handleChangeStartTime}
      changeEndTime={(time) => dispatch(changeEndTime(time))}
      insertUBFirst={insertUBFirst}
    />
  )
}

export default UBsInput
