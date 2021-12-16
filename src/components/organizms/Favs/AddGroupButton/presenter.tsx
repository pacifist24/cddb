import { VFC } from 'react'
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
    <button
      type="button"
      title="グループを追加する"
      className="p-1 ml-1 text-gray-500 rounded-full transition-colors duration-300 hover:bg-gray-200 active:bg-gray-400"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
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
