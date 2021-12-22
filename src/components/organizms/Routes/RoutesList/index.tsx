import { VFC } from 'react'
import { useAppSelector } from 'app/hooks'
import {
  selectRoutes,
  selectTLDic,
  selectCalculatedAttackNumConditions,
  selectCalculatedDoesCalcRestConditions,
} from 'ducks/routes'

import Presenter from './presenter'

// 無限スクロールライブラリのFixedSizeListコンポーネントの要素サイズの計算用
const calcItemSize = (attackNum: number, calcRest: boolean): number => {
  if (attackNum === 3) {
    if (calcRest) {
      return 730
    }
    return 430
  }
  if (attackNum === 2) {
    if (calcRest) {
      return 500
    }
    return 300
  }
  if (attackNum === 1) {
    if (calcRest) {
      return 280
    }
    return 170
  }
  return 0
}

const RoutesList: VFC = () => {
  const routes = useAppSelector(selectRoutes)
  const tlDic = useAppSelector(selectTLDic)
  const calculatedAttackNumConditions = useAppSelector(selectCalculatedAttackNumConditions)
  const calculatedDoesCalcRestConditions = useAppSelector(selectCalculatedDoesCalcRestConditions)

  return (
    <Presenter
      routes={routes}
      tlDic={tlDic}
      itemSize={calcItemSize(calculatedAttackNumConditions, calculatedDoesCalcRestConditions)}
    />
  )
}

export default RoutesList
