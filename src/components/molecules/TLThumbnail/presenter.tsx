import { VFC } from 'react'
import { TLState } from 'ducks/tl'
import CommonMenu from 'components/atoms/CommonMenu'
import { calcDiffDate } from 'lib/util'
import { FULL_BATTLE_TIME } from 'lib/gameConstants'
import PhaseChip from './PhaseChip'
import OperationTypeChip from './OperationTypeChip'

type Props = {
  tl: TLState
  menuItems: { title: string; func: () => void }[]
}

const TLThumbnail: VFC<Props> = ({ tl, menuItems = [] }) => (
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
        <div className="flex items-center pl-1 font-bold">
          {`${tl.damage}万`}
          {tl.startTime - tl.endTime !== FULL_BATTLE_TIME && (
            <div className="ml-1 font-bold">{`(${tl.startTime - tl.endTime}秒)`}</div>
          )}
          <div className="ml-1 text-sm font-normal">
            {`- ${calcDiffDate(new Date(tl.updateDateUTC))}`}
          </div>
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
