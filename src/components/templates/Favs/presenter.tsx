import { VFC } from 'react'
import Colmun from 'components/atoms/Column'
import FavsList from 'components/organizms/Favs/FavsList'

const Favs: VFC = () => (
  <Colmun>
    <div className="ml-3">
      <FavsList />
    </div>
  </Colmun>
)

export default Favs
