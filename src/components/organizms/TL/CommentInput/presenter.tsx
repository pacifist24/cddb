import { VFC, ChangeEvent } from 'react'
import { TextField } from '@mui/material'

type Props = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const TLScoreInfoInput: VFC<Props> = ({ value, onChange, disabled }) => (
  <TextField
    margin="dense"
    className="w-11/12 max-w-md"
    size="small"
    label="備考欄"
    variant="outlined"
    multiline
    minRows={2}
    maxRows={5}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
)

export default TLScoreInfoInput
