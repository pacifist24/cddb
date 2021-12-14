import { VFC } from 'react'
import { Button } from '@mui/material'

type Props = {
  onClick: () => void
  disabled: boolean
}

const SearchButton: VFC<Props> = ({ onClick, disabled }) => (
  <Button variant="contained" color="primary" onClick={onClick} disabled={disabled}>
    検索する
  </Button>
)

export default SearchButton
