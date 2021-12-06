import { VFC } from 'react'
import { TextField } from '@mui/material'
import { TLState } from 'ducks/tl'
import { MAX_PHASE } from 'lib/gameConstants'

type Props = {
  tl: TLState
  handleChangePhase: (phase: number) => void
  isCharactersSelected: boolean
}

const PhaseInput: VFC<Props> = ({ tl, handleChangePhase, isCharactersSelected }) => (
  <div className="flex items-center">
    <div className="mr-1">
      <TextField
        label="段階"
        variant="outlined"
        size="small"
        type="number"
        inputProps={{ min: 1, max: MAX_PHASE }}
        className="w-14"
        value={tl.phase}
        onChange={(e) => {
          if (
            !Number.isNaN(parseInt(e.target.value, 10)) &&
            Number.isInteger(parseInt(e.target.value, 10))
          ) {
            handleChangePhase(parseInt(e.target.value, 10))
          }
        }}
        disabled={!isCharactersSelected}
      />
    </div>
    <div className="mr-3">段階目</div>
  </div>
)

export default PhaseInput
