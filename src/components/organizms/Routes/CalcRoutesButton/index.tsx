import { VFC, useState } from 'react'
import {
  selectGroupName,
  setCalcResult,
  selectAttackNum,
  selectDoesCalcRest,
  selectExcludedCharacters,
} from 'ducks/routes'
import { selectFavsByGroupName } from 'ducks/favs'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { calcAttackRoutes } from 'lib/searchRoute'
import Presenter from './presenter'

const CalcRoutesButton: VFC = () => {
  const dispatch = useAppDispatch()
  const groupName = useAppSelector(selectGroupName)
  const tls = useAppSelector(selectFavsByGroupName(groupName))
  const attackNum = useAppSelector(selectAttackNum)
  const doesCalcRest = useAppSelector(selectDoesCalcRest)
  const excludedCharacters = useAppSelector(selectExcludedCharacters)
  const [isProcessing, setIsProcessing] = useState(false)
  const onClick = () => {
    setIsProcessing(true)
    const { routes, tlDic } = calcAttackRoutes(tls, attackNum, doesCalcRest, excludedCharacters)
    const result = routes.map((route) => ({
      attack1: route[0],
      rest1: route[1],
      attack2: route[2],
      rest2: route[3],
      attack3: route[4],
      rest3: route[5],
    }))
    dispatch(setCalcResult({ routes: result, tlDic }))
    setIsProcessing(false)
  }

  return <Presenter onClick={onClick} isProcessing={isProcessing} />
}

export default CalcRoutesButton
