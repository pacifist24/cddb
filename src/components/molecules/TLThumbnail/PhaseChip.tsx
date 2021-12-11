import { VFC } from 'react'

type Props = {
  phase: number
}

const selectBgColor = (phase: number): string => {
  switch (phase) {
    case 1:
      return 'bg-green-500'
    case 2:
      return 'bg-lightBlue-500'
    case 3:
      return 'bg-pink-500'
    case 4:
      return 'bg-red-600'
    default:
      return 'bg-purple-600'
  }
}

const PhaseChip: VFC<Props> = ({ phase }) => (
  <div
    className={`h-4 px-1 text-sm text-white rounded-full flex items-center ${selectBgColor(phase)}`}
  >
    {`${phase}段階目`}
  </div>
)

export default PhaseChip
