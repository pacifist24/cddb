import { VFC } from 'react'
import { TextField } from '@mui/material'
import { TLState } from 'ducks/tl'
import { MAX_DAMAGE } from 'lib/gameConstants'

type Props = {
  tl: TLState
  changeDamage: (damage: number) => void
  isCharactersSelected: boolean
}

const DamageInput: VFC<Props> = ({ tl, changeDamage, isCharactersSelected }) => (
  <div className="flex items-center">
    <div className="mr-1">
      <TextField
        label="ダメージ"
        variant="outlined"
        size="small"
        type="number"
        inputProps={{
          min: 0,
          max: Math.floor(MAX_DAMAGE / 10000),
          step: 100,
        }}
        className="w-24"
        value={tl.damage}
        onChange={(e) => {
          if (
            !Number.isNaN(parseInt(e.target.value, 10)) &&
            Number.isInteger(parseInt(e.target.value, 10))
          ) {
            changeDamage(parseInt(e.target.value, 10))
          }
        }}
        disabled={!isCharactersSelected}
      />
    </div>
    万
  </div>
)

export default DamageInput
