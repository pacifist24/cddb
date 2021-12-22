import { VFC, ChangeEvent } from 'react'
import { FormLabel } from '@mui/material'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const LikeNumConditionInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <div className="flex items-center">
    <FormLabel component="legend">Like数:</FormLabel>
    <SelectInput
      value={value}
      onChange={onChange}
      label="Like数"
      disabled={disabled}
      items={items}
      className="w-24 ml-3"
    />
    <span className="ml-1">以上</span>
  </div>
)

export default LikeNumConditionInput
