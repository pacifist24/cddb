import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectGroupList } from 'ducks/favs'
import { selectGroupName, changeGroupName } from 'ducks/routes'
import Presenter from './presenter'

const GroupNameInput: VFC = () => {
  const dispatch = useAppDispatch()
  const groupList = useAppSelector(selectGroupList)
  const groupName = useAppSelector(selectGroupName)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeGroupName(e.target.value))
  }
  const items = [{ value: '', label: 'デフォルトグループ' }].concat(
    groupList.map((element) => ({
      value: element,
      label: element,
    })),
  )

  return <Presenter value={groupName} items={items} onChange={onChange} disabled={false} />
}

export default GroupNameInput
