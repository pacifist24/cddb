import { VFC, ChangeEvent } from 'react'
import { FormLabel } from '@mui/material'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const PhaseConditionInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <div className="flex items-center">
    <FormLabel component="legend">段階:</FormLabel>
    <SelectInput
      value={value}
      onChange={onChange}
      label="段階"
      disabled={disabled}
      items={items}
      className="w-32 ml-3"
    />
  </div>
)

export default PhaseConditionInput
