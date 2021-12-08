import { VFC } from 'react'
import { CHARACTERS_INFO } from 'lib/gameConstants'

type Props = {
  name?: string
  changeUBName?: () => void
}

const UBNameInput: VFC<Props> = ({ name = '', changeUBName = () => undefined }) => (
  <button type="button" onClick={changeUBName}>
    {name in CHARACTERS_INFO && (
      <img src={`/characters/${name}.png`} className="w-12 h-12" alt="" />
    )}
    {!(name in CHARACTERS_INFO) && <img src={`/bosses/${name}.png`} className="w-12 h-12" alt="" />}
  </button>
)

export default UBNameInput
