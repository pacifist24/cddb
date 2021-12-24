import { VFC, ChangeEvent } from 'react'
import { FormLabel } from '@mui/material'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const BossNameConditionInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <div className="flex items-center">
    <FormLabel component="legend">ボス名:</FormLabel>
    <div className="ml-3">
      <SelectInput
        value={value}
        onChange={onChange}
        label="ボス名"
        disabled={disabled}
        items={items}
        className="w-52"
      />
    </div>
  </div>
)

export default BossNameConditionInput
