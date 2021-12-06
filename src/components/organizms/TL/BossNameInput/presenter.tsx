import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { TLState } from 'ducks/tl'
import { BOSSES_INFO } from 'lib/gameConstants'

type Props = {
  tl: TLState
  changeBossName: (bossName: string) => void
  isCharactersSelected: boolean
}

const BossNameInput: VFC<Props> = ({ tl, changeBossName, isCharactersSelected }) => (
  <FormControl size="small" variant="outlined" className="w-52">
    <InputLabel>ボス名</InputLabel>
    <Select
      value={tl.bossName}
      label="ボス名"
      onChange={(e) => changeBossName(e.target.value)}
      disabled={!isCharactersSelected}
    >
      {Object.keys(BOSSES_INFO).map((name) => (
        <MenuItem value={name} key={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default BossNameInput
