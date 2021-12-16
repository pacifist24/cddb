import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectGroupList, selectSelectedGroup, changeSelectedGroup } from 'ducks/favs'
import Presenter from './presenter'

const GroupInput: VFC = () => {
  const dispatch = useAppDispatch()
  const group = useAppSelector(selectSelectedGroup)
  const groupList = useAppSelector(selectGroupList)

  return (
    <Presenter
      group={group}
      groupList={groupList}
      changeSelectedGroup={(value) => dispatch(changeSelectedGroup(value))}
    />
  )
}

export default GroupInput
