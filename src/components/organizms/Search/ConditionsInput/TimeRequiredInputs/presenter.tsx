import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel } from '@mui/material'

type Props = {
  timeRequiredLower: number
  timeRequiredUpper: number
  changeTimeRequiredLower: (timeRequiredLower: number) => void
  changeTimeRequiredUpper: (timeRequiredUpper: number) => void
}

const SortConditionRadio: VFC<Props> = ({
  timeRequiredLower,
  timeRequiredUpper,
  changeTimeRequiredLower,
  changeTimeRequiredUpper,
}) => (
  <div className="flex items-center">
    <FormLabel component="legend">バトル時間:</FormLabel>
    <FormControl size="small" variant="outlined" className="w-24 ml-3">
      <InputLabel>バトル時間</InputLabel>
      <Select
        value={timeRequiredLower}
        label="バトル時間"
        onChange={(e) => changeTimeRequiredLower(e.target.value as number)}
      >
        {Array.from({ length: 91 }, (_, i) => i).map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <div className="ml-1">秒</div>
    <div className="ml-1">～</div>
    <FormControl size="small" variant="outlined" className="w-24 ml-1">
      <InputLabel>バトル時間</InputLabel>
      <Select
        value={timeRequiredUpper}
        label="バトル時間"
        onChange={(e) => changeTimeRequiredUpper(e.target.value as number)}
      >
        {Array.from({ length: 91 }, (_, i) => i).map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <div className="ml-1">秒</div>
  </div>
)

export default SortConditionRadio
