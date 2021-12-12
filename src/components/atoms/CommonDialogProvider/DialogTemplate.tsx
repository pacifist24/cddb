import { VFC } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

type Props = {
  title: string
  description: string
  onClose: () => void
  buttons: {
    label: string
    handleClick: () => void
  }[]
  isOpen: boolean
  closeDialog: () => void
}

const DialogTemplate: VFC<Props> = ({
  title,
  description,
  buttons,
  isOpen,
  closeDialog,
  onClose,
}) => (
  <div>
    <Dialog
      open={isOpen}
      onClose={() => {
        onClose()
        closeDialog()
      }}
      aria-labelledby="form-dialog-title2"
    >
      <DialogTitle id="form-dialog-title2">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons.map((button) => (
          <Button
            onClick={() => {
              button.handleClick()
              closeDialog()
            }}
            key={button.label}
            color="primary"
          >
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  </div>
)

export default DialogTemplate
