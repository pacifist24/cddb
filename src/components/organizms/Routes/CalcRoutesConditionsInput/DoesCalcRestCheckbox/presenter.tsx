import { VFC } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
  doesCalcRest: boolean
  toggleDoesCalcRest: () => void
}

const DoesCalcRestCheckbox: VFC<Props> = ({ doesCalcRest, toggleDoesCalcRest }) => (
  <div>
    <FormLabel component="legend">持ち越し凸検索設定</FormLabel>
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={doesCalcRest} onChange={toggleDoesCalcRest} />}
        label="持ち越し凸有り（重いので注意）"
        className="ml-1"
      />
    </FormGroup>
  </div>
)

export default DoesCalcRestCheckbox
