import { VFC } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { SortType } from 'ducks/search'

type Props = {
  sortKey: SortType
  changeSortKey: (sortKey: SortType) => void
}

const SortConditionRadio: VFC<Props> = ({ sortKey, changeSortKey }) => (
  <FormControl component="fieldset" size="small">
    <FormLabel component="legend">並び順</FormLabel>
    <RadioGroup
      value={sortKey}
      name="radio-arrage"
      onChange={(e) => changeSortKey(e.target.value as SortType)}
    >
      <div className="flex">
        <div className="ml-3">
          <FormControlLabel
            value="like"
            control={<Radio size="small" color="primary" />}
            label="Like数"
          />
        </div>
        <div className="ml-3">
          <FormControlLabel
            value="damage"
            control={<Radio size="small" color="primary" />}
            label="ダメージ"
          />
        </div>
        <div>
          <FormControlLabel
            value="updateDate"
            control={<Radio size="small" color="primary" />}
            label="投稿日時"
          />
        </div>
      </div>
    </RadioGroup>
  </FormControl>
)

export default SortConditionRadio
