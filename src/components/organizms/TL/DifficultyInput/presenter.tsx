import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { TLState, DifficultyType } from 'ducks/tl'

type Props = {
  tl: TLState
  changeDifficulty: (difficulty: DifficultyType) => void
  isCharactersSelected: boolean
}

const AccidentRateInput: VFC<Props> = ({ tl, changeDifficulty, isCharactersSelected }) => (
  <div className="flex items-center">
    <span className="mr-2">難易度</span>
    <FormControl size="small" variant="outlined" className="w-20 mr-2">
      <InputLabel>難易度</InputLabel>
      <Select
        value={tl.difficulty}
        label="難易度"
        onChange={(e: SelectChangeEvent) => changeDifficulty(e.target.value as DifficultyType)}
        disabled={!isCharactersSelected}
      >
        <MenuItem value="low">低</MenuItem>
        <MenuItem value="mid">中</MenuItem>
        <MenuItem value="high">高</MenuItem>
      </Select>
    </FormControl>
  </div>
)

export default AccidentRateInput
