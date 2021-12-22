import { VFC, ChangeEvent } from 'react'
import { FormLabel } from '@mui/material'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const BossNameMustContainsInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <div className="flex items-center">
    <FormLabel component="legend">凸ルートに含むボス:</FormLabel>
    <SelectInput
      value={value}
      onChange={onChange}
      label="ボス名"
      disabled={disabled}
      items={items}
      className="ml-3 w-52"
    />
  </div>
)

export default BossNameMustContainsInput
