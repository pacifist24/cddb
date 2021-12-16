import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

type Props = {
  group: string
  groupList: string[]
  changeSelectedGroup: (group: string) => void
}

const GroupInput: VFC<Props> = ({ group, groupList, changeSelectedGroup }) => (
  <FormControl size="small" variant="outlined" className="mr-2 w-52">
    <InputLabel>グループ選択</InputLabel>
    <Select
      value={group}
      label="グループ選択"
      onChange={(e: SelectChangeEvent) => changeSelectedGroup(e.target.value)}
    >
      <MenuItem value="">デフォルトグループ</MenuItem>
      {groupList.map((item) => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

export default GroupInput
