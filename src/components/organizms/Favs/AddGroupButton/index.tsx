import { VFC, useState } from 'react'
import { addGroup } from 'ducks/favs'
import { useAppDispatch } from 'app/hooks'
import Presenter from './presenter'

const AddGroupButton: VFC = () => {
  const dispatch = useAppDispatch()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [groupName, setGroupName] = useState('')

  const handleClickDialogOK = () => {
    dispatch(addGroup(groupName))
    setGroupName('')
    setIsDialogOpen(false)
  }

  return (
    <Presenter
      handleClick={() => setIsDialogOpen(true)}
      isOpen={isDialogOpen}
      groupName={groupName}
      handleChangeGroupName={setGroupName}
      handleClose={() => setIsDialogOpen(false)}
      handleClickOK={handleClickDialogOK}
      handleClickCancel={() => setIsDialogOpen(false)}
    />
  )
}

export default AddGroupButton
