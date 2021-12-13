import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import TLThumbnail from 'components/molecules/TLThumbnail'

type Props = {
  tls: TLState[]
  makeManuItems: (tl: TLState) => { title: string; func: () => void }[]
}

const FavsList: VFC<Props> = ({ tls, makeManuItems }) => (
  <>
    {[...tls]
      .sort((a, b) => b.updateDateUTC - a.updateDateUTC)
      .map((tl) => (
        <TLThumbnail
          tl={tl}
          key={tl.tlId}
          menuItems={makeManuItems(tl)}
          authorProfile={undefined}
          favsNum={undefined}
        />
      ))}
  </>
)

export default FavsList
