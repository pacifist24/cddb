import { VFC, ChangeEvent } from 'react'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const GroupInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <SelectInput
    value={value}
    onChange={onChange}
    label="グループ選択"
    disabled={disabled}
    items={items}
    className="w-52"
  />
)

export default GroupInput
