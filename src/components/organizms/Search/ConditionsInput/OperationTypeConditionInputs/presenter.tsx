import { VFC } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
  allowFullAuto: boolean
  allowSemiAuto: boolean
  allowManual: boolean
  toggleAllowFullAuto: () => void
  toggleAllowSemiAuto: () => void
  toggleAllowManual: () => void
}

const SortConditionRadio: VFC<Props> = ({
  allowFullAuto,
  allowSemiAuto,
  allowManual,
  toggleAllowFullAuto,
  toggleAllowSemiAuto,
  toggleAllowManual,
}) => (
  <div>
    <FormLabel component="legend">操作種別</FormLabel>
    <FormGroup>
      <div className="flex">
        <FormControlLabel
          control={<Checkbox size="small" checked={allowFullAuto} onChange={toggleAllowFullAuto} />}
          label="フルオート"
        />
        <FormControlLabel
          control={<Checkbox size="small" checked={allowSemiAuto} onChange={toggleAllowSemiAuto} />}
          label="セミオート"
        />
        <FormControlLabel
          control={<Checkbox size="small" checked={allowManual} onChange={toggleAllowManual} />}
          label="手動"
        />
      </div>
    </FormGroup>
  </div>
)

export default SortConditionRadio
