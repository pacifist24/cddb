import { VFC } from 'react'
import { selectAttackNum, changeAttackNum } from 'ducks/routes'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import Presenter from './presenter'

const AttackNumRadio: VFC = () => {
  const dispatch = useAppDispatch()
  const attackNum = useAppSelector(selectAttackNum)
  return (
    <Presenter
      attackNum={attackNum}
      handleChangeAttackNum={(attackNum: number) => dispatch(changeAttackNum(attackNum))}
    />
  )
}

export default AttackNumRadio
