import { VFC } from 'react'
import { TextField } from '@mui/material'

type Props = {
  comment: string
  changeCharacterComment: (comment: string) => void
}

const CharacterCommentInput: VFC<Props> = ({ comment, changeCharacterComment }) => (
  <div>
    <TextField
      label="装備状況等"
      variant="outlined"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      className="w-36"
      value={comment}
      onChange={(e) => changeCharacterComment(e.target.value)}
    />
  </div>
)

export default CharacterCommentInput
