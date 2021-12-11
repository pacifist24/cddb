import { VFC } from 'react'
import Button from '@mui/material/Button'

type Props = {
  onClick: () => void
}

const ParseTLFromClipboardButton: VFC<Props> = ({ onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    クリップボードからTLを読込
  </Button>
)

export default ParseTLFromClipboardButton
