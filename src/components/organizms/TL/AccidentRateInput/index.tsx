import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectAccidentRate, changeAccidentRate, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const AccidentRateInput: VFC = () => {
  const dispatch = useAppDispatch()
  const accidentRate = useAppSelector(selectAccidentRate)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeAccidentRate(parseInt(e.target.value, 10)))
  const items = Array.from(Array(20).keys(), (x) => x * 5).map((element) => ({
    value: element,
    label: element,
  }))
  return (
    <Presenter
      value={accidentRate}
      items={items}
      onChange={onChange}
      disabled={!isCharactersSelected}
    />
  )
}

export default AccidentRateInput
