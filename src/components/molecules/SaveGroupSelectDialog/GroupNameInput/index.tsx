import { VFC, ChangeEvent } from 'react'
import { useAppSelector } from 'app/hooks'
import { selectGroupList } from 'ducks/favs'
import Presenter from './presenter'

type Props = {
  groupName: string
  setGroupName: (value: string) => void
}

const GroupInput: VFC<Props> = ({ groupName, setGroupName }) => {
  const groupList = useAppSelector(selectGroupList)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value)
  }
  const items = [{ value: '', label: 'デフォルトグループ' }].concat(
    groupList.map((element) => ({
      value: element,
      label: element,
    })),
  )
  return <Presenter value={groupName} onChange={onChange} disabled={false} items={items} />
}

export default GroupInput
