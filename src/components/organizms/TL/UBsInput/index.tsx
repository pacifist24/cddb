import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeStartTime, changeEndTime, addUB, selectIsUBsInputVisible } from 'ducks/tl'
import { changeStartTime as changeStyleStartTime } from 'ducks/style'
import Presenter from './presenter'

const UBsInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isUBsInputVisible = useAppSelector(selectIsUBsInputVisible)
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
    dispatch(changeStyleStartTime(time))
  }

  return (
    <Presenter
      ubs={tl.timeline}
      startTime={tl.startTime}
      endTime={tl.endTime}
      isUBsInputVisible={isUBsInputVisible}
      changeStartTime={handleChangeStartTime}
      changeEndTime={(time) => dispatch(changeEndTime(time))}
      insertUBFirst={insertUBFirst}
    />
  )
}

export default UBsInput
