import { VFC } from 'react'
import { RouteState } from 'ducks/routes'
import { TLState } from 'ducks/tl'
import TLThumbnail from 'components/molecules/TLThumbnail'
import EmptyTLThumbnail from './EmptyTLThumbnail'
import RouteSummary from './RouteSummary'

type Props = {
  route: RouteState
  tlDic: { [tlId: string]: TLState }
  calculatedAttackNumConditions: number
  calculatedDoesCalcRestConditions: boolean
  makeMenuItems: (tl: TLState) => { title: string; func: () => void }[]
}

const RouteDisplay: VFC<Props> = ({
  route,
  tlDic,
  calculatedAttackNumConditions,
  calculatedDoesCalcRestConditions,
  makeMenuItems,
}) => (
  <div style={{ width: '415px' }} className="border-2 hover:bg-gray-50 rounded-md">
    <RouteSummary route={route} tlDic={tlDic} />

    <div className="mt-2 ml-2 text-center text-white rounded-full w-14 bg-turquoise-500">1凸目</div>
    <div>
      <TLThumbnail
        tl={tlDic[route.attack1]}
        menuItems={makeMenuItems(tlDic[route.attack1])}
        favsNum={undefined}
        authorProfile={undefined}
      />
    </div>
    {calculatedDoesCalcRestConditions && (
      <>
        {route.rest1 && (
          <TLThumbnail
            tl={tlDic[route.rest1]}
            menuItems={route.rest1 ? makeMenuItems(tlDic[route.rest1]) : []}
            favsNum={undefined}
            authorProfile={undefined}
          />
        )}
        {!route.rest1 && <EmptyTLThumbnail />}
      </>
    )}

    {calculatedAttackNumConditions >= 2 && (
      <>
        <div className="mt-2 ml-2 text-center text-white rounded-full w-14 bg-turquoise-500">
          2凸目
        </div>
        <div>
          <TLThumbnail
            tl={tlDic[route.attack2]}
            menuItems={makeMenuItems(tlDic[route.attack2])}
            favsNum={undefined}
            authorProfile={undefined}
          />
        </div>
      </>
    )}
    {calculatedAttackNumConditions >= 2 && calculatedDoesCalcRestConditions && (
      <div>
        {route.rest2 && (
          <TLThumbnail
            tl={tlDic[route.rest2]}
            menuItems={route.rest2 ? makeMenuItems(tlDic[route.rest2]) : []}
            favsNum={undefined}
            authorProfile={undefined}
          />
        )}
        {!route.rest2 && <EmptyTLThumbnail />}
      </div>
    )}
    {calculatedAttackNumConditions >= 3 && (
      <>
        <div className="mt-2 ml-2 text-center text-white rounded-full w-14 bg-turquoise-500">
          3凸目
        </div>
        <div>
          <TLThumbnail
            tl={tlDic[route.attack3]}
            menuItems={makeMenuItems(tlDic[route.attack3])}
            favsNum={undefined}
            authorProfile={undefined}
          />
        </div>
      </>
    )}
    {calculatedAttackNumConditions >= 3 && calculatedDoesCalcRestConditions && (
      <div>
        {route.rest3 && (
          <TLThumbnail
            tl={tlDic[route.rest3]}
            menuItems={route.rest3 ? makeMenuItems(tlDic[route.rest3]) : []}
            favsNum={undefined}
            authorProfile={undefined}
          />
        )}
        {!route.rest3 && <EmptyTLThumbnail />}
      </div>
    )}
  </div>
)

export default RouteDisplay
