import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel } from '@mui/material'

type Props = {
  accidentRateCondition: number
  changeAccidentRateCondition: (likeNumCondition: number) => void
}

const AccidentRateConditionInput: VFC<Props> = ({
  accidentRateCondition,
  changeAccidentRateCondition,
}) => (
  <div className="flex items-center">
    <FormLabel component="legend">事故率:</FormLabel>
    <FormControl size="small" variant="outlined" className="ml-3 w-36">
      <InputLabel>事故率</InputLabel>
      <Select
        value={accidentRateCondition}
        label="事故率"
        onChange={(e) => changeAccidentRateCondition(e.target.value as number)}
      >
        <MenuItem value={100}>指定なし</MenuItem>
        {Array.from(Array(20).keys(), (x) => x * 5).map((val) => (
          <MenuItem value={val} key={val}>
            {`${val}％以下`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
)

export default AccidentRateConditionInput
