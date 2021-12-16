import { VFC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'

type Props = {
  isOpen: boolean
  groupList: string[]
  groupName: string
  handleChangeGroupName: (groupName: string) => void
  handleClose: () => void
  handleClickOK: () => void
  handleClickCancel: () => void
}

const SaveGroupSelectDialog: VFC<Props> = ({
  isOpen,
  groupList,
  groupName,
  handleChangeGroupName,
  handleClose,
  handleClickOK,
  handleClickCancel,
}) => (
  <Dialog open={isOpen} onClose={handleClose}>
    <DialogTitle>保存先グループの選択</DialogTitle>
    <DialogContent>
      <DialogContentText>保存先のグループを選択してください</DialogContentText>
      <FormControl size="small" variant="outlined" className="mt-3 mr-2 w-52">
        <InputLabel>グループ選択</InputLabel>
        <Select
          value={groupName}
          label="グループ選択"
          margin="dense"
          onChange={(e: SelectChangeEvent) => handleChangeGroupName(e.target.value)}
        >
          <MenuItem value="">デフォルトグループ</MenuItem>
          {groupList.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClickCancel}>キャンセル</Button>
      <Button onClick={handleClickOK}>OK</Button>
    </DialogActions>
  </Dialog>
)

export default SaveGroupSelectDialog
