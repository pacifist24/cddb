import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import useMedia from 'use-media'
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
}) => {
  const isWide = useMedia({ minWidth: '1000px' })
  return (
    <Presenter
      tl={tl}
      menuItems={menuItems}
      favsNum={favsNum}
      authorProfile={authorProfile}
      isWide={isWide}
    />
  )
}

export default TLThumbnail
