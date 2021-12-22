import { VFC } from 'react'
import { TextField } from '@mui/material'

type Props = {
  nameTo: string
  setNameTo: (value: string) => void
}

const NameToInput: VFC<Props> = ({ nameTo, setNameTo }) => (
  <TextField
    className="w-1/3"
    size="small"
    label="変換後キャラ名"
    variant="outlined"
    value={nameTo}
    onChange={(e) => setNameTo(e.target.value)}
  />
)

export default NameToInput
