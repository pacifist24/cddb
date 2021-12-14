import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel } from '@mui/material'

type Props = {
  likeNumCondition: number
  changeLikeNumCondition: (likeNumCondition: number) => void
}

const selectBoxValue = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600,
  700, 800, 900, 1000,
]

const LikeNumConditionInput: VFC<Props> = ({ likeNumCondition, changeLikeNumCondition }) => (
  <div className="flex items-center">
    <FormLabel component="legend">Like数:</FormLabel>
    <FormControl size="small" variant="outlined" className="w-24 ml-3">
      <InputLabel>Like数</InputLabel>
      <Select
        value={likeNumCondition}
        label="Like数"
        onChange={(e) => changeLikeNumCondition(e.target.value as number)}
      >
        {selectBoxValue.map((value) => (
          <MenuItem value={value} key={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <span className="ml-1">以上</span>
  </div>
)

export default LikeNumConditionInput
