import { VFC } from 'react'
import { OperationType } from 'ducks/tl'

type Props = {
  operation: OperationType
}

const PhaseChip: VFC<Props> = ({ operation }) => {
  switch (operation) {
    case 'fullAuto':
      return (
        <div className="flex items-center h-4 px-1 text-xs text-white bg-green-400 rounded-full">
          フルオート
        </div>
      )
    case 'semiAuto':
      return (
        <div className="flex items-center h-4 px-1 text-xs text-white bg-orange-400 rounded-full">
          セミオート
        </div>
      )
    default:
      return <div />
  }
}

export default PhaseChip
