import { VFC } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

type Props = {
  attackNum: number
  handleChangeAttackNum: (attackNum: number) => void
}

const AttackNumRadio: VFC<Props> = ({ attackNum, handleChangeAttackNum }) => (
  <FormControl component="fieldset" size="small">
    <FormLabel component="legend">検索凸数</FormLabel>
    <RadioGroup
      value={attackNum}
      onChange={(e) => handleChangeAttackNum(Number.parseInt(e.target.value, 10))}
    >
      <div className="flex">
        <div className="ml-3">
          <FormControlLabel
            value={3}
            control={<Radio size="small" color="primary" />}
            label="3凸"
          />
        </div>
        <div className="ml-3">
          <FormControlLabel
            value={2}
            control={<Radio size="small" color="primary" />}
            label="2凸"
          />
        </div>
        <div>
          <FormControlLabel
            value={1}
            control={<Radio size="small" color="primary" />}
            label="1凸"
          />
        </div>
      </div>
    </RadioGroup>
  </FormControl>
)

export default AttackNumRadio
