import { VFC } from 'react'
import { useAppSelector } from 'app/hooks'
import {
  selectRoutes,
  selectTLDic,
  selectCalculatedAttackNumConditions,
  selectCalculatedDoesCalcRestConditions,
} from 'ducks/routes'
import useMedia from 'use-media'
import Presenter from './presenter'

// 無限スクロールライブラリのFixedSizeListコンポーネントの要素サイズの計算用
const calcItemSize = (attackNum: number, calcRest: boolean, isWide: boolean): number => {
  if (isWide) {
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
  if (attackNum === 3) {
    if (calcRest) {
      return 925
    }
    return 540
  }
  if (attackNum === 2) {
    if (calcRest) {
      return 640
    }
    return 380
  }
  if (attackNum === 1) {
    if (calcRest) {
      return 350
    }
    return 220
  }
  return 0
}

const RoutesList: VFC = () => {
  const routes = useAppSelector(selectRoutes)
  const tlDic = useAppSelector(selectTLDic)
  const calculatedAttackNumConditions = useAppSelector(selectCalculatedAttackNumConditions)
  const calculatedDoesCalcRestConditions = useAppSelector(selectCalculatedDoesCalcRestConditions)
  const isWide = useMedia({ minWidth: '500px' })

  return (
    <Presenter
      routes={routes}
      tlDic={tlDic}
      itemSize={calcItemSize(
        calculatedAttackNumConditions,
        calculatedDoesCalcRestConditions,
        isWide,
      )}
    />
  )
}

export default RoutesList
