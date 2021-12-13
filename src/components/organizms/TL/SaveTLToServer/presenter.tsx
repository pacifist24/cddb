import { VFC } from 'react'
import { Button } from '@mui/material'

type Props = {
  onClick: () => void
  isDisabled: boolean
}

const SaveTLToServer: VFC<Props> = ({ onClick, isDisabled }) => (
  <span title={isDisabled ? 'サーバーへの投稿はtwitterログインが必要です' : ''}>
    <Button variant="contained" color="warning" onClick={onClick} disabled={isDisabled}>
      公開サーバーにTLを保存
    </Button>
  </span>
)

export default SaveTLToServer
