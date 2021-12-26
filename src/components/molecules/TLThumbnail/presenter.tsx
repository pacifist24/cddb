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
  isWide: boolean
}

const TLThumbnail: VFC<Props> = ({ tl, menuItems, favsNum, authorProfile, isWide }) => (
  <>
    {isWide && (
      <div className="flex items-center py-2" style={{ width: '415px' }} title={tl.comment}>
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
              <div className="ml-1">
                <UserPopupLink userName={authorProfile.userName} userId={authorProfile.userId} />
              </div>
            )}
            {favsNum !== undefined && <FavButton favsNum={favsNum} tlId={tl.tlId} />}
          </div>
          <CharactersImage characters={tl.characters} />
        </div>
        <div className="ml-2">
          <MenuButton menuItems={menuItems} anchorOrigin={undefined} disabled={false} />
        </div>
      </div>
    )}
    {!isWide && (
      <div className="relative py-2" style={{ width: '300px' }}>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={`/bosses/${tl.bossName}.png`} className="w-14 h-14" alt={tl.bossName} />{' '}
            <div className="flex flex-col ml-1">
              <div className="flex">
                <div className="font-bold">{`${tl.phase}段階目`}</div>
                <div className="ml-1 font-bold">{`${tl.damage}万`}</div>
                {/* {tl.operation === 'manual' && <div className="font-bold">(手動)</div>}
                {tl.operation === 'fullAuto' && <div className="font-bold">(フルオート)</div>}
                {tl.operation === 'semiAuto' && <div className="font-bold">(セミオート)</div>} */}
                {tl.startTime - tl.endTime !== FULL_BATTLE_TIME && (
                  <div className="ml-1 font-bold">{`(${tl.startTime - tl.endTime}秒)`}</div>
                )}
              </div>
              <div className="flex">
                {authorProfile && (
                  <UserPopupLink userName={authorProfile.userName} userId={authorProfile.userId} />
                )}
                {favsNum !== undefined && (
                  <div className="ml-1">
                    <FavButton favsNum={favsNum} tlId={tl.tlId} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center" title={tl.comment}>
            <CharactersImage characters={tl.characters} />
          </div>
        </div>
        <div className="absolute top-0 right-2">
          <MenuButton menuItems={menuItems} anchorOrigin={undefined} disabled={false} />
        </div>
      </div>
    )}
  </>
)

export default TLThumbnail
