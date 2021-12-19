import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectGroupList } from 'ducks/favs'
import { selectGroupName, changeGroupName } from 'ducks/routes'
import Presenter from './presenter'

const GroupNameInput: VFC = () => {
  const dispatch = useAppDispatch()
  const groupList = useAppSelector(selectGroupList)
  const groupName = useAppSelector(selectGroupName)
  const handleChange = (bossName: string) => {
    dispatch(changeGroupName(bossName))
  }

  return (
    <Presenter groupList={groupList} groupName={groupName} handleChangeGroupName={handleChange} />
  )
}

export default GroupNameInput
