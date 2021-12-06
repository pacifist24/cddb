import { VFC } from 'react'
import { TextField } from '@mui/material'

type Props = {
  comment: string
  changeCharacterComment: (comment: string) => void
  isCharactersSelected: boolean
}

const CharacterCommentInput: VFC<Props> = ({
  comment,
  changeCharacterComment,
  isCharactersSelected,
}) => (
  <div>
    <TextField
      label="装備状況等"
      variant="outlined"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      className="w-48"
      value={comment}
      onChange={(e) => changeCharacterComment(e.target.value)}
      disabled={!isCharactersSelected}
    />
  </div>
)

export default CharacterCommentInput
