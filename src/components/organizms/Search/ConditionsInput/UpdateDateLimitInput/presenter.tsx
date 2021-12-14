import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel } from '@mui/material'

type Props = {
  updateDateLimit: number
  changeUpdateDateLimit: (updateDateLimit: number) => void
}

const oneHourInMS = 60 * 60 * 1000

const UpdateDateLimitInput: VFC<Props> = ({ updateDateLimit, changeUpdateDateLimit }) => (
  <div className="flex items-center">
    <FormLabel component="legend">投稿日時:</FormLabel>
    <FormControl size="small" variant="outlined" className="ml-1 w-36">
      <InputLabel>投稿日時</InputLabel>
      <Select
        value={updateDateLimit}
        label="投稿日時"
        onChange={(e) => changeUpdateDateLimit(e.target.value as number)}
      >
        <MenuItem value={0}>指定なし</MenuItem>
        <MenuItem value={oneHourInMS}>1時間以内</MenuItem>
        <MenuItem value={oneHourInMS * 2}>2時間以内</MenuItem>
        <MenuItem value={oneHourInMS * 3}>3時間以内</MenuItem>
        <MenuItem value={oneHourInMS * 6}>6時間以内</MenuItem>
        <MenuItem value={oneHourInMS * 12}>12時間以内</MenuItem>
        <MenuItem value={oneHourInMS * 24}>24時間以内</MenuItem>
        <MenuItem value={oneHourInMS * 48}>2日以内</MenuItem>
        <MenuItem value={oneHourInMS * 72}>3日以内</MenuItem>
      </Select>
    </FormControl>
  </div>
)

export default UpdateDateLimitInput
