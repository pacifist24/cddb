import { VFC } from 'react'
import AddButton from 'components/atoms/AddButton'
import AddGroupDialog from './AddGroupDialog'

type Props = {
  handleClick: () => void
  isOpen: boolean
  groupName: string
  handleChangeGroupName: (groupName: string) => void
  handleClose: () => void
  handleClickOK: () => void
  handleClickCancel: () => void
}

const AddGroupButton: VFC<Props> = ({
  handleClick,
  isOpen,
  groupName,
  handleChangeGroupName,
  handleClose,
  handleClickOK,
  handleClickCancel,
}) => (
  <>
    <AddButton onClick={handleClick} disabled={false} />
    <AddGroupDialog
      isOpen={isOpen}
      groupName={groupName}
      handleChangeGroupName={handleChangeGroupName}
      handleClose={handleClose}
      handleClickOK={handleClickOK}
      handleClickCancel={handleClickCancel}
    />
  </>
)

export default AddGroupButton
