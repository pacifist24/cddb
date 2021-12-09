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
  text: string
  onClose: () => void
  buttons: {
    label: string
    handleClick: () => void
  }[]
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

const CommonDialog: VFC<Props> = ({ title, text, buttons, isOpen, setIsOpen, onClose }) => (
  <div>
    <Dialog
      open={isOpen}
      onClose={() => {
        onClose()
        setIsOpen(false)
      }}
      aria-labelledby="form-dialog-title2"
    >
      <DialogTitle id="form-dialog-title2">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons.map((button) => (
          <Button
            onClick={() => {
              button.handleClick()
              setIsOpen(false)
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

export default CommonDialog
