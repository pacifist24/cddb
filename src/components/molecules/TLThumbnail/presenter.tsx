import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import { calcDiffDate } from 'lib/util'
import { FULL_BATTLE_TIME } from 'lib/gameConstants'
import MenuButton from 'components/atoms/MenuButton'
import UserPopupLink from './UserPopupLink'
import BossImage from './BossImage'
import CharactersImage from './CharactersImage'
import FavButton from './FavButton'

type Props = {
  tl: TLState
  menuItems: { title: string; func: () => void }[]
  favsNum: number
  authorProfile: {
    userName: string
    userId: string
  }
}

const TLThumbnail: VFC<Props> = ({ tl, menuItems, favsNum, authorProfile }) => (
  <div className="flex items-center px-3 py-2" style={{ width: '415px' }} title={tl.comment}>
    <BossImage bossName={tl.bossName} phase={tl.phase} operation={tl.operation} />
    <div className="flex flex-col">
      <div className="flex items-center pl-1">
        <div className="font-bold">{`${tl.damage}万`}</div>
        {tl.startTime - tl.endTime !== FULL_BATTLE_TIME && (
          <div className="ml-1 font-bold">{`(${tl.startTime - tl.endTime}秒)`}</div>
        )}

        <div className="ml-1 text-sm font-normal">
          {`${calcDiffDate(new Date(tl.updateDateUTC))}`}
        </div>
        {authorProfile && (
          <UserPopupLink userName={authorProfile.userName} userId={authorProfile.userId} />
        )}
        {favsNum !== undefined && <FavButton favsNum={favsNum} tlId={tl.tlId} />}
      </div>
      <CharactersImage characters={tl.characters} />
    </div>
    <div className="ml-2">
      <MenuButton menuItems={menuItems} anchorOrigin={undefined} disabled={false} />
    </div>
  </div>
)

export default TLThumbnail
