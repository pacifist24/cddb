import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeUBTime, changeUBName, changeUBComment, addUB, deleteUB } from 'ducks/tl'
import UBInputComponent from './presenter'

type Props = {
  index: number
}

const UBInput: VFC<Props> = ({ index }) => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const ub = tl.timeline[index]
  const { startTime, endTime } = tl
  const upperBound = index === 0 ? startTime : tl.timeline[index - 1].time
  const calcLowerBound = () => {
    if (index === tl.timeline.length - 1) {
      return endTime === 0 ? 1 : endTime
    }

    return tl.timeline[index + 1].time
  }
  const handleChangeUBTime = (time: number) => dispatch(changeUBTime({ index, value: time }))
  const handleChangeUBComment = (comment: string) =>
    dispatch(changeUBComment({ index, value: comment }))
  const handleChangeUBName = () => {
    const candidateList = [...tl.characters.map((character) => character.name), tl.bossName]
    const nowIndex = candidateList.indexOf(tl.timeline[index].name)
    const nextIndex = (nowIndex + 1) % candidateList.length
    dispatch(changeUBName({ index, value: candidateList[nextIndex] }))
  }
  const handleInsertUBPrev = () =>
    dispatch(
      addUB({
        index,
        ub: {
          id: Math.random(),
          time: ub.time,
          name: tl.characters[0].name,
          comment: '',
        },
      }),
    )
  const handleInsertUBNext = () =>
    dispatch(
      addUB({
        index: index + 1,
        ub: {
          id: Math.random(),
          time: ub.time,
          name: tl.characters[0].name,
          comment: '',
        },
      }),
    )
  const handleDeleteThis = () => {
    dispatch(deleteUB(index))
  }

  return (
    <UBInputComponent
      ub={ub}
      upperBound={upperBound}
      lowerBound={calcLowerBound()}
      changeUBTime={handleChangeUBTime}
      changeUBName={handleChangeUBName}
      changeUBComment={handleChangeUBComment}
      insertUBPrev={handleInsertUBPrev}
      insertUBNext={handleInsertUBNext}
      deleteThis={handleDeleteThis}
    />
  )
}

export default UBInput
