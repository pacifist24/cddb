import { VFC } from 'react'
import { UB } from 'ducks/tl'
import TimeInput from 'components/atoms/TimeInput'
import InsertUBNextButton from './UBInput/InsertUBNextButton'
import UBInput from './UBInput'

type Props = {
  ubs: UB[]
  startTime: number
  endTime: number
  changeStartTime: (time: number) => void
  changeEndTime: (time: number) => void
  insertUBFirst: () => void
}

const UBsInput: VFC<Props> = ({
  ubs,
  startTime,
  endTime,
  changeStartTime,
  changeEndTime,
  insertUBFirst,
}) => (
  <>
    <div className="flex items-center mb-5 font-bold">
      ---{' '}
      <span className="mr-1">
        <TimeInput
          time={startTime}
          upperBound={90}
          lowerBound={ubs.length === 0 ? endTime : ubs[0].time}
          changeTime={changeStartTime}
        />
      </span>
      バトル開始 ---
      <InsertUBNextButton handleClick={insertUBFirst} />
    </div>
    {ubs.map((ub, index) => (
      <UBInput index={index} key={ub.id} />
    ))}
    <div className="mt-2 font-bold">
      ---{' '}
      <span className="mr-1">
        <TimeInput
          time={endTime}
          upperBound={ubs.length === 0 ? startTime : ubs[ubs.length - 1].time}
          lowerBound={0}
          changeTime={changeEndTime}
        />
      </span>
      バトル終了 ---
    </div>
  </>
)

export default UBsInput
