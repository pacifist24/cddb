import { VFC } from 'react'
import { FavState } from 'ducks/favs'
import { TLState } from 'ducks/tl'
import TLThumbnail from 'components/molecules/TLThumbnail'

type Props = {
  favs: FavState[]
  makeManuItems: (tl: TLState) => { title: string; func: () => void }[]
}

const FavsList: VFC<Props> = ({ favs, makeManuItems }) => (
  <>
    {[...favs]
      .sort((a, b) => b.tl.updateDateUTC - a.tl.updateDateUTC)
      .map((fav) => (
        <TLThumbnail
          tl={fav.tl}
          key={fav.tl.tlId}
          menuItems={makeManuItems(fav.tl)}
          authorProfile={undefined}
          favsNum={undefined}
        />
      ))}
  </>
)

export default FavsList
