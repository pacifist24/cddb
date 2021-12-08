import { VFC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

type Props = {
  startTime: number
  changeStartTime: (time: number) => void
}

const ConfigStartTimeInput: VFC<Props> = ({ startTime, changeStartTime }) => (
  <>
    <h1 className="mx-3 mt-3 text-lg font-medium">バトル開始時間変換</h1>
    <p className="mx-3 mt-2 text-sm">持ち越しのためTLの記述時間をずらしたい場合の設定</p>
    <div className="mt-5 ml-5">
      <FormControl size="small" variant="outlined" className="w-20">
        <InputLabel>時間</InputLabel>
        <Select
          label="時間"
          value={startTime}
          onChange={(e) => changeStartTime(e.target.value as number)}
        >
          {Array.from(new Array(70))
            .map((v, i) => i + 21)
            .reverse()
            .map((val) => (
              <MenuItem value={val} key={val}>
                {Math.floor(val / 60)}:{val % 60 < 10 ? `0${val % 60}` : val % 60}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  </>
)
export default ConfigStartTimeInput
