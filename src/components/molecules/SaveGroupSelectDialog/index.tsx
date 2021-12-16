import { VFC } from 'react'
import { selectGroupList } from 'ducks/favs'
import { useAppSelector } from 'app/hooks'
import Presenter from './presenter'

type Props = {
  groupName: string
  handleChangeGroupName: (groupName: string) => void
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  handleClickOK: () => void
  handleClickCancel: () => void
}

const SaveGroupSelectDialog: VFC<Props> = ({
  groupName,
  isOpen,
  setIsOpen,
  handleChangeGroupName,
  handleClickOK,
  handleClickCancel,
}) => {
  const groupList = useAppSelector(selectGroupList)

  return (
    <Presenter
      isOpen={isOpen}
      groupList={groupList}
      groupName={groupName}
      handleChangeGroupName={handleChangeGroupName}
      handleClose={() => setIsOpen(false)}
      handleClickOK={handleClickOK}
      handleClickCancel={handleClickCancel}
    />
  )
}

export default SaveGroupSelectDialog
