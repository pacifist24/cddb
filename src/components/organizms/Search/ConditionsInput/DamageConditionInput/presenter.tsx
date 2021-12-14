import { VFC } from 'react'
import TextField from '@mui/material/TextField'
import { FormLabel } from '@mui/material'
import { MAX_DAMAGE } from 'lib/gameConstants'

type Props = {
  damageCondition: number
  changeDamageCondition: (damageCondition: number) => void
}

const DamageConditionInput: VFC<Props> = ({ damageCondition, changeDamageCondition }) => (
  <div className="flex items-center">
    <FormLabel component="legend">ダメージ:</FormLabel>
    <TextField
      label="ダメージ"
      type="number"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: 0,
        max: Math.floor(MAX_DAMAGE / 10000),
        step: 100,
      }}
      value={damageCondition}
      onChange={(e) => changeDamageCondition(parseInt(e.target.value, 10))}
      className="w-24 ml-3"
    />
    <span className="ml-1">万以上</span>
  </div>
)

export default DamageConditionInput
