import { VFC } from 'react'
import { OperationType } from 'ducks/tl'
import PhaseChip from './PhaseChip'
import OperationTypeChip from './OperationTypeChip'

type Props = {
  bossName: string
  phase: number
  operation: OperationType
}

const BossImage: VFC<Props> = ({ bossName, phase, operation }) => (
  <div className="relative">
    <img src={`/bosses/${bossName}.png`} className="w-20 h-20" alt={bossName} />
    <div className="absolute bottom-0.5 right-0.5">
      <PhaseChip phase={phase} />
    </div>
    <div className="absolute top-0.5 right-0.5">
      <OperationTypeChip operation={operation} />
    </div>
  </div>
)

export default BossImage
