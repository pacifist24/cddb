import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import CommonMenu from 'components/atoms/CommonMenu'
import { calcDiffDate } from 'lib/util'
import { FULL_BATTLE_TIME } from 'lib/gameConstants'
import PhaseChip from './PhaseChip'
import OperationTypeChip from './OperationTypeChip'
import UserPopupLink from './UserPopupLink'

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
  <CommonMenu menuItems={menuItems} anchorOrigin={undefined}>
    <div className="flex items-center px-3 py-2 rounded-md hover:bg-gray-200" title={tl.comment}>
      <div className="relative">
        <img src={`/bosses/${tl.bossName}.png`} className="w-20 h-20" alt={tl.bossName} />
        <div className="absolute bottom-0.5 right-0.5">
          <PhaseChip phase={tl.phase} />
        </div>
        <div className="absolute top-0.5 right-0.5">
          <OperationTypeChip operation={tl.operation} />
        </div>
      </div>
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
          {favsNum !== 0 && (
            <div className="flex items-center ml-1 text-sm">
              <div className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold">{favsNum}</span>
            </div>
          )}
        </div>

        <div className="flex">
          {tl.characters.map((character) => (
            <img
              src={`/characters/${character.name}.png`}
              className="w-14 h-14"
              key={character.name}
              alt={character.name}
            />
          ))}
        </div>
      </div>
      <div className="ml-2 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
    </div>
  </CommonMenu>
)

export default TLThumbnail
