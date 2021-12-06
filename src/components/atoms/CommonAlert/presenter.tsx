import { VFC } from 'react'
import { CommonAlertState } from 'ducks/commonAlert'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

type Props = {
  commonAlertState: CommonAlertState
  handleClose: () => void
}

const CommonAlert: VFC<Props> = ({ commonAlertState, handleClose }) => (
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

export default CommonAlert
