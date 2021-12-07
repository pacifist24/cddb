import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeStartTime, changeEndTime, addUB } from 'ducks/tl'
// import { changeStartTime as changeStyleStartTime } from 'ducks/style'
import UBsInputComponent from './presenter'

const UBsInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const insertUBFirst = () =>
    dispatch(
      addUB({
        index: 0,
        ub: {
          id: Math.random(),
          time: tl.startTime,
          name: tl.characters[0].name,
          comment: '',
        },
      }),
    )
  const handleChangeStartTime = (time: number) => {
    dispatch(changeStartTime(time))
    // dispatch(changeStyleStartTime(time))
  }

  return (
    <UBsInputComponent
      ubs={tl.timeline}
      startTime={tl.startTime}
      endTime={tl.endTime}
      changeStartTime={handleChangeStartTime}
      changeEndTime={(time) => dispatch(changeEndTime(time))}
      insertUBFirst={insertUBFirst}
    />
  )
}

export default UBsInput
