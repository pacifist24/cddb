import { VFC } from 'react'
import { UB } from 'ducks/tl'
import TimeInput from 'components/atoms/TimeInput'
import UBNameInput from './UBNameInput'
import UBComment from './UBComment'
import InsertUBNextButton from './InsertUBNextButton'
import DeleteThisUBButton from './DeleteThisUBButton'

type Props = {
  ub: UB
  upperBound: number
  lowerBound: number
  changeUBTime: (time: number) => void
  changeUBName: () => void
  changeUBComment: (comment: string) => void
  insertUBPrev: () => void
  insertUBNext: () => void
  deleteThis: () => void
}

const UBInput: VFC<Props> = ({
  ub,
  upperBound = 90,
  lowerBound = 0,
  changeUBTime = () => undefined,
  changeUBName = () => undefined,
  changeUBComment = () => undefined,
  insertUBNext = () => undefined,
  deleteThis = () => undefined,
}) => (
  <div className="flex items-center max-w-md mb-2 group">
    <div className="flex flex-col items-center mr-1.5">
      <UBNameInput name={ub.name} changeUBName={changeUBName} />
      <TimeInput
        time={ub.time}
        upperBound={upperBound}
        lowerBound={lowerBound}
        changeTime={changeUBTime}
      />
    </div>
    <div className="flex items-center flex-1 mb-3 ml-2">
      <UBComment comment={ub.comment} changeUBComment={changeUBComment} />
      <div>
        <InsertUBNextButton handleClick={insertUBNext} />
      </div>
      <div>
        <DeleteThisUBButton handleClick={deleteThis} />
      </div>
    </div>
  </div>
)

export default UBInput
