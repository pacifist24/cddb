import { VFC } from 'react'
import { Button } from '@mui/material'
import SaveGroupSelectDialog from 'components/molecules/SaveGroupSelectDialog'

type Props = {
  onClick: () => void
  isDisabled: boolean
  groupName: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  handleChangeGroupName: (groupName: string) => void
  handleClickOK: () => void
  handleClickCancel: () => void
}

const SaveTLToFavsButton: VFC<Props> = ({
  onClick,
  isDisabled,
  groupName,
  isOpen,
  setIsOpen,
  handleChangeGroupName,
  handleClickOK,
  handleClickCancel,
}) => (
  <>
    <Button variant="contained" color="primary" onClick={onClick} disabled={isDisabled}>
      TL保管（ローカル）にTLを保存
    </Button>
    <SaveGroupSelectDialog
      groupName={groupName}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleChangeGroupName={handleChangeGroupName}
      handleClickOK={handleClickOK}
      handleClickCancel={handleClickCancel}
    />
  </>
)

export default SaveTLToFavsButton
