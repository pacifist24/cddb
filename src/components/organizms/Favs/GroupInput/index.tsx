import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectGroupList, selectSelectedGroup, changeSelectedGroup } from 'ducks/favs'
import Presenter from './presenter'

const GroupInput: VFC = () => {
  const dispatch = useAppDispatch()
  const group = useAppSelector(selectSelectedGroup)
  const groupList = useAppSelector(selectGroupList)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSelectedGroup(e.target.value))
  }
  const items = [{ value: '', label: 'デフォルトグループ' }].concat(
    groupList.map((element) => ({
      value: element,
      label: element,
    })),
  )
  return <Presenter value={group} onChange={onChange} disabled={false} items={items} />
}

export default GroupInput
