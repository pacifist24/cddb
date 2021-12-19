import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel } from '@mui/material'

type Props = {
  phaseCondition: number
  onChange: (value: number) => void
}

const PhaseConditionInput: VFC<Props> = ({ phaseCondition, onChange }) => (
  <div className="flex items-center">
    <FormLabel component="legend">段階:</FormLabel>
    <FormControl size="small" variant="outlined" className="w-32 ml-3">
      <InputLabel>段階</InputLabel>
      <Select
        value={phaseCondition}
        label="段階"
        onChange={(e) => onChange(e.target.value as number)}
      >
        <MenuItem value={0}>指定なし</MenuItem>
        <MenuItem value={1}>1段階目</MenuItem>
        <MenuItem value={2}>2段階目</MenuItem>
        <MenuItem value={3}>3段階目</MenuItem>
        <MenuItem value={4}>4段階目</MenuItem>
        <MenuItem value={5}>5段階目</MenuItem>
      </Select>
    </FormControl>
  </div>
)

export default PhaseConditionInput
