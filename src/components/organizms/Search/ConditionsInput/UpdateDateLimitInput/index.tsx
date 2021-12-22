import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectUpdateDateLimit, changeUpdateDateLimit } from 'ducks/search'
import Presenter from './presenter'

const oneHourInMS = 60 * 60 * 1000
const items = [
  {
    value: 0,
    label: '指定なし',
  },
  {
    value: oneHourInMS,
    label: '1時間以内',
  },
  {
    value: oneHourInMS * 2,
    label: '2時間以内',
  },
  {
    value: oneHourInMS * 3,
    label: '3時間以内',
  },
  {
    value: oneHourInMS * 6,
    label: '6時間以内',
  },
  {
    value: oneHourInMS * 12,
    label: '12時間以内',
  },
  {
    value: oneHourInMS * 24,
    label: '24時間以内',
  },
  {
    value: oneHourInMS * 48,
    label: '2日以内',
  },
  {
    value: oneHourInMS * 72,
    label: '3日以内',
  },
]

const UpdateDateLimitInput: VFC = () => {
  const dispatch = useAppDispatch()
  const likeNumCondition = useAppSelector(selectUpdateDateLimit)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUpdateDateLimit(parseInt(e.target.value, 10)))
  }
  return <Presenter value={likeNumCondition} items={items} onChange={onChange} disabled={false} />
}

export default UpdateDateLimitInput
