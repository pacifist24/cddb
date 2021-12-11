import { VFC } from 'react'
import { Button } from '@mui/material'

type Props = {
  onClick: () => void
  isDisabled: boolean
}

const SaveTLToFavsButton: VFC<Props> = ({ onClick, isDisabled }) => (
  <Button variant="contained" color="primary" onClick={onClick} disabled={isDisabled}>
    お気に入り（ローカル）にTLを保存
  </Button>
)

export default SaveTLToFavsButton
