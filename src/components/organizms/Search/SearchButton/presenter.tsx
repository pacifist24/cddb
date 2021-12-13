import { VFC } from 'react'
import { Button } from '@mui/material'

type Props = {
  onClick: () => void
}

const SearchButton: VFC<Props> = ({ onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    検索する
  </Button>
)

export default SearchButton
