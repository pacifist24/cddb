import { VFC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@mui/material'
import GroupNameInput from './GroupNameInput'

type Props = {
  isOpen: boolean
  groupName: string
  handleChangeGroupName: (groupName: string) => void
  handleClose: () => void
  handleClickOK: () => void
  handleClickCancel: () => void
}

const SaveGroupSelectDialog: VFC<Props> = ({
  isOpen,
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
      <div className="mt-3 mr-2">
        <GroupNameInput groupName={groupName} setGroupName={handleChangeGroupName} />
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClickCancel}>キャンセル</Button>
      <Button onClick={handleClickOK}>OK</Button>
    </DialogActions>
  </Dialog>
)

export default SaveGroupSelectDialog
