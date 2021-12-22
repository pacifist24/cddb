import { VFC } from 'react'
import { changeSortKey, SortType, selectSortKey } from 'ducks/search'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import Presenter from './presenter'

const SortConditionRadio: VFC = () => {
  const dispatch = useAppDispatch()
  const sortKey = useAppSelector(selectSortKey)
  return (
    <Presenter
      sortKey={sortKey}
      changeSortKey={(sortKey: SortType) => dispatch(changeSortKey(sortKey))}
    />
  )
}

export default SortConditionRadio
