import { VFC } from 'react'
import { FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import { ArrangeType } from 'ducks/style'

type Props = {
  arrangement: ArrangeType
  changeArrangement: (arrangement: ArrangeType) => void
}

const ArrangementConfigInput: VFC<Props> = ({ arrangement, changeArrangement }) => (
  <>
    <h1 className="mx-3 mt-6 text-lg font-medium">同一秒数UB発動の場合のまとめ書き</h1>
    <p className="mx-3 mt-2 text-sm">
      同一秒数のUB発動でコメントが無い場合、横並べでまとめ書きする
    </p>
    <div className="flex items-center mt-5 ml-5">
      <FormControl component="fieldset" size="small">
        <RadioGroup
          value={arrangement}
          name="radio-arrage"
          onChange={(e) => changeArrangement(e.target.value as ArrangeType)}
        >
          <div className="flex">
            <div className="ml-3">
              <FormControlLabel
                value="same"
                control={<Radio size="small" color="primary" />}
                label="同行"
              />
            </div>
            <div className="ml-3">
              <FormControlLabel
                value="next"
                control={<Radio size="small" color="primary" />}
                label="次行"
              />
            </div>
            <div>
              <FormControlLabel
                value="none"
                control={<Radio size="small" color="primary" />}
                label="無し"
              />
            </div>
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  </>
)
export default ArrangementConfigInput
