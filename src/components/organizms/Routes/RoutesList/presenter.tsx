import { VFC, CSSProperties } from 'react'
import { FixedSizeList } from 'react-window'
import { RouteState } from 'ducks/routes'
import { TLState } from 'ducks/tl'
import RouteDisplay from './RouteDisplay'

const renderRow =
  (routes: RouteState[], tlDic: { [tlId: string]: TLState }) =>
  ({ index, style }: { index: number; style: CSSProperties }) =>
    (
      <div style={style}>
        <RouteDisplay route={routes[index]} tlDic={tlDic} />
      </div>
    )

type Props = {
  routes: RouteState[]
  tlDic: { [tlId: string]: TLState }
  itemSize: number
}

const RoutesList: VFC<Props> = ({ routes, tlDic, itemSize }) => (
  <FixedSizeList height={1000} itemCount={routes.length} itemSize={itemSize} width={1000}>
    {renderRow(routes, tlDic)}
  </FixedSizeList>
)

export default RoutesList
