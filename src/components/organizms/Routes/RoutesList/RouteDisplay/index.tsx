import { VFC } from 'react'
import { TLState, loadTL } from 'ducks/tl'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import {
  RouteState,
  selectCalculatedAttackNumConditions,
  selectCalculatedDoesCalcRestConditions,
} from 'ducks/routes'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import Presenter from './presenter'

type Props = {
  route: RouteState
  tlDic: { [tlId: string]: TLState }
}

const RouteDisplay: VFC<Props> = ({ route, tlDic }) => {
  const dispatch = useAppDispatch()
  const openAlert = useCommonAlertContext()
  const calculatedAttackNumConditions = useAppSelector(selectCalculatedAttackNumConditions)
  const calculatedDoesCalcRestConditions = useAppSelector(selectCalculatedDoesCalcRestConditions)
  const makeMenuItems = (tl: TLState) => [
    {
      title: 'TLを読み込む',
      func: () => {
        dispatch(loadTL(tl))
        openAlert({
          message: 'TLの読み込みに成功しました',
          severity: 'success',
          duration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        })
      },
    },
  ]

  return (
    <Presenter
      route={route}
      tlDic={tlDic}
      calculatedAttackNumConditions={calculatedAttackNumConditions}
      calculatedDoesCalcRestConditions={calculatedDoesCalcRestConditions}
      makeMenuItems={makeMenuItems}
    />
  )
}

export default RouteDisplay
