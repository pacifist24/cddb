import { VFC, ChangeEvent } from 'react'
import { MAX_DAMAGE } from 'lib/gameConstants'
import NumberInput from 'components/atoms/NumberInput'

type Props = {
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const DamageInput: VFC<Props> = ({ value, onChange, disabled }) => (
  <div className="flex items-center">
    <div className="mr-1">
      <NumberInput
        value={value}
        label="ダメージ"
        onChange={onChange}
        disabled={disabled}
        className="w-24"
        min={0}
        max={MAX_DAMAGE}
        step={100}
      />
    </div>
    万
  </div>
)

export default DamageInput
