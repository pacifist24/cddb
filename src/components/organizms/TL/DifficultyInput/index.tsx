import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import {
  selectDifficulty,
  changeDifficulty,
  selectIsCharactersSelected,
  DifficultyType,
} from 'ducks/tl'
import Presenter from './presenter'

const DifficultyInput: VFC = () => {
  const dispatch = useAppDispatch()
  const accidentRate = useAppSelector(selectDifficulty)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeDifficulty(e.target.value as DifficultyType))
  const items = [
    { value: 'low', label: '低' },
    { value: 'mid', label: '中' },
    { value: 'high', label: '高' },
  ]
  return (
    <Presenter
      value={accidentRate}
      items={items}
      onChange={onChange}
      disabled={!isCharactersSelected}
    />
  )
}

export default DifficultyInput
