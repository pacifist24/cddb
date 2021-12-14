import { VFC } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
  allowFullAuto: boolean
  allowSemiAuto: boolean
  allowDifficultManual: boolean
  allowMidManual: boolean
  allowEasyManual: boolean
  toggleAllowFullAuto: () => void
  toggleAllowSemiAuto: () => void
  toggleAllowDifficultManual: () => void
  toggleAllowMidManual: () => void
  toggleAllowEasyManual: () => void
}

const SortConditionRadio: VFC<Props> = ({
  allowFullAuto,
  allowSemiAuto,
  allowDifficultManual,
  allowMidManual,
  allowEasyManual,
  toggleAllowFullAuto,
  toggleAllowSemiAuto,
  toggleAllowDifficultManual,
  toggleAllowMidManual,
  toggleAllowEasyManual,
}) => (
  <div>
    <FormLabel component="legend">操作種別</FormLabel>
    <FormGroup>
      <div className="flex">
        <FormControlLabel
          control={<Checkbox checked={allowFullAuto} onChange={toggleAllowFullAuto} />}
          label="フルオート"
        />
        <FormControlLabel
          control={<Checkbox checked={allowSemiAuto} onChange={toggleAllowSemiAuto} />}
          label="セミオート"
          className="ml-1"
        />
      </div>
      <div className="flex">
        <FormControlLabel
          control={
            <Checkbox checked={allowDifficultManual} onChange={toggleAllowDifficultManual} />
          }
          label="手動(難)"
        />
        <FormControlLabel
          control={<Checkbox checked={allowMidManual} onChange={toggleAllowMidManual} />}
          label="手動(普通)"
          className="ml-1"
        />
        <FormControlLabel
          control={<Checkbox checked={allowEasyManual} onChange={toggleAllowEasyManual} />}
          label="手動(易)"
          className="ml-1"
        />
      </div>
    </FormGroup>
  </div>
)

export default SortConditionRadio
