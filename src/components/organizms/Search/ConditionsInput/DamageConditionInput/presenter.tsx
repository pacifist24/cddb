import { VFC, ChangeEvent } from 'react'
import { FormLabel } from '@mui/material'
import NumberInput from 'components/atoms/NumberInput'
import { MAX_DAMAGE } from 'lib/gameConstants'

type Props = {
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const DamageConditionInput: VFC<Props> = ({ value, onChange, disabled }) => (
  <div className="flex items-center">
    <FormLabel component="legend">ダメージ:</FormLabel>
    <div className="ml-3">
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
    <span className="ml-1">万以上</span>
  </div>
)

export default DamageConditionInput
