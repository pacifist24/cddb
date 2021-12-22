import { VFC, ChangeEvent } from 'react'
import SelectInput, { SelectItemsType } from 'components/atoms/SelectInput'

type Props = {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  items: SelectItemsType
}

const AccidentRateInput: VFC<Props> = ({ value, onChange, disabled, items }) => (
  <div className="flex items-center">
    <span className="mr-2">事故率</span>
    <SelectInput
      value={value}
      onChange={onChange}
      label="事故率"
      disabled={disabled}
      items={items}
      className="w-20"
    />
    ％
  </div>
)

export default AccidentRateInput
