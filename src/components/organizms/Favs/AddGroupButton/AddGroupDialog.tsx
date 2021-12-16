import { VFC } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

type Props = {
  isOpen: boolean
  groupName: string
  handleChangeGroupName: (groupName: string) => void
  handleClose: () => void
  handleClickOK: () => void
  handleClickCancel: () => void
}

const AddGroupDialog: VFC<Props> = ({
  isOpen,
  handleClose,
  handleClickOK,
  handleClickCancel,
  handleChangeGroupName,
  groupName,
}) => (
  <Dialog open={isOpen} onClose={handleClose}>
    <DialogTitle>グループの追加</DialogTitle>
    <DialogContent>
      <DialogContentText>追加するグループの名前を入力してください。（10字以内）</DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        size="small"
        label="グループ名"
        type="email"
        value={groupName}
        onChange={(e) => handleChangeGroupName(e.target.value)}
        variant="outlined"
        inputProps={{
          maxLength: 10,
        }}
        fullWidth
        className="items-center"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClickCancel}>キャンセル</Button>
      <Button onClick={handleClickOK}>OK</Button>
    </DialogActions>
  </Dialog>
)

export default AddGroupDialog
