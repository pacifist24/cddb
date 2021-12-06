import { VFC } from 'react'
import { TextField } from '@mui/material'
import { TLState } from 'ducks/tl'

type Props = {
  tl: TLState
  changeComment: (comment: string) => void
  isCharactersSelected: boolean
}

const TLScoreInfoInput: VFC<Props> = ({ tl, changeComment, isCharactersSelected }) => (
  <TextField
    margin="dense"
    className="w-11/12 max-w-md"
    size="small"
    label="備考欄"
    variant="outlined"
    multiline
    minRows={2}
    maxRows={5}
    value={tl.comment}
    onChange={(e) => changeComment(e.target.value)}
    disabled={!isCharactersSelected}
  />
)

export default TLScoreInfoInput
