import { VFC } from 'react'
import Colmun from 'components/atoms/Column'
import CalCRoutesButton from 'components/organizms/Routes/CalcRoutesButton'
import RoutesList from 'components/organizms/Routes/RoutesList'
import CalcRoutesConditionsInput from 'components/organizms/Routes/CalcRoutesConditionsInput'

const AttackRoute: VFC = () => (
  <Colmun>
    <CalcRoutesConditionsInput />
    <div className=" ml-3">
      <div className="mt-3">
        <CalCRoutesButton />
      </div>
      <div className="mt-3">
        <RoutesList />
      </div>
    </div>
  </Colmun>
)

export default AttackRoute
