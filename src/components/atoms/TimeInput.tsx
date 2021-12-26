import { VFC } from 'react'
import { timeNum2Str } from 'lib/util'

type Props = {
  time: number
  changeTime: (time: number) => void
  upperBound: number
  lowerBound: number
}

const TimeInput: VFC<Props> = ({
  time = 90,
  changeTime = () => undefined,
  upperBound = 90,
  lowerBound = 0,
}) => (
  <select
    value={time}
    onChange={(e) => changeTime(parseInt(e.target.value, 10))}
    className="bg-transparent appearance-none focus:outline-none"
  >
    {Array.from(Array(upperBound - lowerBound + 1).keys())
      .map((val) => (
        <option value={val + lowerBound} key={val}>
          {timeNum2Str(val + lowerBound).substring(1)}
        </option>
      ))
      .reverse()}
  </select>
)

export default TimeInput
