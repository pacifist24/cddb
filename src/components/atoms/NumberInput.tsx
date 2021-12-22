import { TextField } from '@mui/material'
import { VFC, ChangeEvent } from 'react'

type Props = {
  value: number
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  className: string
  min: number
  max: number
  step: number
}

const NumberInput: VFC<Props> = ({
  value = 0,
  onChange = () => undefined,
  label = '',
  className = '',
  disabled = false,
  min = 0,
  max = 1,
  step = 1,
}) => (
  <TextField
    label={label}
    variant="outlined"
    inputProps={{
      min,
      max,
      step,
    }}
    className={className}
    value={value}
    onChange={onChange}
    type="number"
    size="small"
    InputLabelProps={{
      shrink: true,
    }}
    disabled={disabled}
  />
)

export default NumberInput
