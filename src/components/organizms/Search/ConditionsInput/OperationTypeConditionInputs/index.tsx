import { VFC } from 'react'
import {
  selectAllowFullAuto,
  selectAllowSemiAuto,
  selectAllowManual,
  toggleAllowFullAuto,
  toggleAllowSemiAuto,
  toggleAllowManual,
} from 'ducks/search'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import Presenter from './presenter'

const SortConditionRadio: VFC = () => {
  const dispatch = useAppDispatch()
  const allowFullAuto = useAppSelector(selectAllowFullAuto)
  const allowSemiAuto = useAppSelector(selectAllowSemiAuto)
  const allowManual = useAppSelector(selectAllowManual)
  return (
    <Presenter
      allowFullAuto={allowFullAuto}
      allowSemiAuto={allowSemiAuto}
      allowManual={allowManual}
      toggleAllowFullAuto={() => dispatch(toggleAllowFullAuto())}
      toggleAllowSemiAuto={() => dispatch(toggleAllowSemiAuto())}
      toggleAllowManual={() => dispatch(toggleAllowManual())}
    />
  )
}

export default SortConditionRadio
