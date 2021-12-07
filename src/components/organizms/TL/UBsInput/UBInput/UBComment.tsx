import { VFC } from 'react'
import { TextField } from '@mui/material'

type Props = {
  comment: string
  changeUBComment: (comment: string) => void
}

const UBComment: VFC<Props> = ({ comment, changeUBComment }) => (
  <TextField
    margin="dense"
    size="small"
    fullWidth
    variant="outlined"
    multiline
    minRows={1}
    maxRows={5}
    value={comment}
    onChange={(e) => changeUBComment(e.target.value)}
  />
)

export default UBComment
