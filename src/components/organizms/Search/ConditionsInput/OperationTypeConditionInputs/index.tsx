import { VFC } from 'react'
import {
  selectAllowFullAuto,
  selectAllowSemiAuto,
  selectAllowDifficultManual,
  selectAllowMidManual,
  selectAllowEasyManual,
  toggleAllowFullAuto,
  toggleAllowSemiAuto,
  toggleAllowDifficultManual,
  toggleAllowMidManual,
  toggleAllowEasyManual,
} from 'ducks/search'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import Presenter from './presenter'

const SortConditionRadio: VFC = () => {
  const dispatch = useAppDispatch()
  const allowFullAuto = useAppSelector(selectAllowFullAuto)
  const allowSemiAuto = useAppSelector(selectAllowSemiAuto)
  const allowDifficultManual = useAppSelector(selectAllowDifficultManual)
  const allowMidManual = useAppSelector(selectAllowMidManual)
  const allowEasyManual = useAppSelector(selectAllowEasyManual)
  return (
    <Presenter
      allowFullAuto={allowFullAuto}
      allowSemiAuto={allowSemiAuto}
      allowDifficultManual={allowDifficultManual}
      allowMidManual={allowMidManual}
      allowEasyManual={allowEasyManual}
      toggleAllowFullAuto={() => dispatch(toggleAllowFullAuto())}
      toggleAllowSemiAuto={() => dispatch(toggleAllowSemiAuto())}
      toggleAllowDifficultManual={() => dispatch(toggleAllowDifficultManual())}
      toggleAllowMidManual={() => dispatch(toggleAllowMidManual())}
      toggleAllowEasyManual={() => dispatch(toggleAllowEasyManual())}
    />
  )
}

export default SortConditionRadio
