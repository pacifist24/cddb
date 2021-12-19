import { VFC } from 'react'
import { Button } from '@mui/material'

type Props = {
  onClick: () => void
  isProcessing: boolean
}

const CalcRoutesButton: VFC<Props> = ({ onClick, isProcessing }) => (
  <Button variant="contained" color="primary" onClick={onClick} disabled={isProcessing}>
    凸ルート検索
  </Button>
)

export default CalcRoutesButton
