import { VFC } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export type CommonAlertState = {
  isOpen: boolean
  message: string
  anchorOrigin: {
    vertical: 'bottom' | 'top'
    horizontal: 'center' | 'left' | 'right'
  }
  severity: 'error' | 'info' | 'success' | 'warning'
  duration: number
}

type Props = {
  commonAlertState: CommonAlertState
  handleClose: () => void
}

const AlertTemplate: VFC<Props> = ({ commonAlertState, handleClose }) => (
  <Snackbar
    open={commonAlertState.isOpen}
    autoHideDuration={commonAlertState.duration}
    onClose={handleClose}
    anchorOrigin={commonAlertState.anchorOrigin}
  >
    <Alert onClose={handleClose} severity={commonAlertState.severity}>
      {commonAlertState.message}
    </Alert>
  </Snackbar>
)

export default AlertTemplate
