import { VFC } from 'react'
import { FormLabel } from '@mui/material'
import TimeRequredUpperInput from './TimeRequredUpperInput'
import TimeRequredLowerInput from './TimeRequredLowerInput'

const TimeRequiredInputs: VFC = () => (
  <div className="flex items-center">
    <FormLabel component="legend">バトル時間:</FormLabel>
    <div className="ml-3">
      <TimeRequredLowerInput />
    </div>
    <div className="ml-1">秒</div>
    <div className="ml-1">～</div>
    <div className="ml-2">
      <TimeRequredUpperInput />
    </div>
    <div className="ml-1">秒</div>
  </div>
)

export default TimeRequiredInputs
