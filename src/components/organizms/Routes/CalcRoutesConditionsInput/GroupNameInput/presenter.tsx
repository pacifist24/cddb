import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel } from '@mui/material'

type Props = {
  groupList: string[]
  groupName: string
  handleChangeGroupName: (groupName: string) => void
}

const GroupNameInput: VFC<Props> = ({ groupList, groupName, handleChangeGroupName }) => (
  <div className="flex items-center">
    <FormLabel component="legend">検索対象グループ名:</FormLabel>
    <FormControl size="small" variant="outlined" className="ml-3 w-52">
      <InputLabel>グループ</InputLabel>
      <Select
        value={groupName}
        label="グループ"
        onChange={(e) => handleChangeGroupName(e.target.value)}
      >
        <MenuItem value="">デフォルトグループ</MenuItem>
        {groupList.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
)

export default GroupNameInput
