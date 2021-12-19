import { VFC } from 'react'
import { RouteState } from 'ducks/routes'
import { TLState } from 'ducks/tl'

type Props = {
  route: RouteState
  tlDic: { [tlId: string]: TLState }
}

const calcDamageSum = (route: RouteState, tlDic: { [tlId: string]: TLState }): number => {
  let sum = 0
  sum += route.attack1 ? tlDic[route.attack1].damage : 0
  sum += route.attack2 ? tlDic[route.attack2].damage : 0
  sum += route.attack3 ? tlDic[route.attack3].damage : 0
  sum += route.rest1 ? tlDic[route.rest1].damage : 0
  sum += route.rest2 ? tlDic[route.rest2].damage : 0
  sum += route.rest3 ? tlDic[route.rest3].damage : 0
  return sum
}

const RouteSummary: VFC<Props> = ({ route, tlDic }) => (
  <div className="pl-3 font-bold text-white bg-green-500">
    合計{calcDamageSum(route, tlDic)}万ダメージ
  </div>
)

export default RouteSummary
