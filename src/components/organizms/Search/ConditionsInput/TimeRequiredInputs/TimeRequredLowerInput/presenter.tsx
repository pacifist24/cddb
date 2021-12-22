import { VFC, ChangeEvent } from 'react'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const TimeRequredLowerInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <SelectInput
    value={value}
    onChange={onChange}
    label="バトル時間"
    disabled={disabled}
    items={items}
    className="w-24"
  />
)

export default TimeRequredLowerInput
