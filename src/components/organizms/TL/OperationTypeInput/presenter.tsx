import { VFC, ChangeEvent } from 'react'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const OperationTypeInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <SelectInput
    value={value}
    onChange={onChange}
    label="操作種別"
    disabled={disabled}
    items={items}
    className="w-36"
  />
)

export default OperationTypeInput
