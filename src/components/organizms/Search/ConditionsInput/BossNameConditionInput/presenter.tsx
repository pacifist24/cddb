import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel } from '@mui/material'
import { BOSSES_INFO } from 'lib/gameConstants'

type Props = {
  bossNameCondition: string
  changeBossNameCondition: (bossNameCondition: string) => void
}

const BossNameConditionInput: VFC<Props> = ({ bossNameCondition, changeBossNameCondition }) => (
  <div className="flex items-center">
    <FormLabel component="legend">ボス名:</FormLabel>
    <FormControl size="small" variant="outlined" className="ml-3 w-52">
      <InputLabel>ボス名</InputLabel>
      <Select
        value={bossNameCondition}
        label="ボス名"
        onChange={(e) => changeBossNameCondition(e.target.value)}
      >
        <MenuItem value="">指定なし</MenuItem>
        {Object.keys(BOSSES_INFO).map((name) => (
          <MenuItem value={name} key={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
)

export default BossNameConditionInput
