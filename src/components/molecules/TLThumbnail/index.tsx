import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import Presenter from './presenter'

type Props = {
  tl: TLState
  menuItems: { title: string; func: () => void }[]
  favsNum: number
  authorProfile: {
    userName: string
    userId: string
  }
}

const TLThumbnail: VFC<Props> = ({
  tl,
  menuItems = [],
  favsNum = undefined,
  authorProfile = undefined,
}) => <Presenter tl={tl} menuItems={menuItems} favsNum={favsNum} authorProfile={authorProfile} />

export default TLThumbnail
