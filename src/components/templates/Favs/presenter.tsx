import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import TLThumbnail from 'components/molecules/TLThumbnail'
import Colmun from 'components/atoms/Column'

type Props = {
  tls: TLState[]
  makeManuItems: (tl: TLState) => { title: string; func: () => void }[]
}

const Favs: VFC<Props> = ({ tls, makeManuItems }) => (
  <Colmun>
    <div className="ml-3">
      {[...tls]
        .sort((a, b) => b.updateDateUTC - a.updateDateUTC)
        .map((tl) => (
          <TLThumbnail tl={tl} key={tl.tlId} menuItems={makeManuItems(tl)} />
        ))}
    </div>
  </Colmun>
)

export default Favs
