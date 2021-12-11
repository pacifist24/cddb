import { VFC } from 'react'
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { TLState, OperationType } from 'ducks/tl'

type Props = {
  tl: TLState
  changeOperation: (operation: OperationType) => void
  isCharactersSelected: boolean
}

const OperationTypeInput: VFC<Props> = ({ tl, changeOperation, isCharactersSelected }) => (
  <FormControl size="small" variant="outlined" className="mr-2 w-36">
    <InputLabel>操作種別</InputLabel>
    <Select
      value={tl.operation}
      label="操作種別"
      onChange={(e: SelectChangeEvent) => changeOperation(e.target.value as OperationType)}
      disabled={!isCharactersSelected}
    >
      <MenuItem value="manual">マニュアル</MenuItem>
      <MenuItem value="semiAuto">セミオート</MenuItem>
      <MenuItem value="fullAuto">フルオート</MenuItem>
    </Select>
  </FormControl>
)

export default OperationTypeInput
