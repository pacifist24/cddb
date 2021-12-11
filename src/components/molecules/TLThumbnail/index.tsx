import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import Presenter from './presenter'

type Props = {
  tl: TLState
  menuItems: { title: string; func: () => void }[]
}

const TLThumbnail: VFC<Props> = ({ tl, menuItems }) => <Presenter tl={tl} menuItems={menuItems} />

export default TLThumbnail
