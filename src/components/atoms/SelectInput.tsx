import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { VFC, ChangeEvent } from 'react'

export type SelectItemsType = {
  label: string | number
  value: string | number
}[]

type Props = {
  value: string | number
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
  className: string
}

const SelectInput: VFC<Props> = ({
  value = '',
  onChange = () => undefined,
  label = '',
  className = '',
  items = [],
  disabled = false,
}) => (
  <FormControl size="small" variant="outlined" className={className}>
    <InputLabel>{label}</InputLabel>
    <Select value={value} label={label} onChange={onChange} disabled={disabled}>
      {items.map((item) => (
        <MenuItem value={item.value} key={item.label}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default SelectInput
