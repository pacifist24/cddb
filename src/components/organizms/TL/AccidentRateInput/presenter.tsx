import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { TLState } from 'ducks/tl'

type Props = {
  tl: TLState
  changeAccidentRate: (accidentRate: number) => void
  isCharactersSelected: boolean
}

const AccidentRateInput: VFC<Props> = ({ tl, changeAccidentRate, isCharactersSelected }) => (
  <div className="flex items-center">
    <span className="mr-2">事故率</span>
    <FormControl size="small" variant="outlined" className="w-20 mr-2">
      <InputLabel>事故率</InputLabel>
      <Select
        value={tl.accidentRate.toString()}
        label="事故率"
        onChange={(e: SelectChangeEvent) => changeAccidentRate(parseInt(e.target.value, 10))}
        disabled={!isCharactersSelected}
      >
        {Array.from(Array(20).keys(), (x) => x * 5).map((val) => (
          <MenuItem value={val} key={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    ％
  </div>
)

export default AccidentRateInput
