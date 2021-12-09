import { VFC } from 'react'
import Column from 'components/atoms/Column'
import CharactersSelectButton from 'components/organizms/TL/CharactersSelectButton'
import ParseTLFromClipboardButton from 'components/organizms/TL/ParseTLFromClipboardButton'
import CharactersInput from 'components/organizms/TL/CharactersInput'
import PhaseInput from 'components/organizms/TL/PhaseInput'
import BossNameInput from 'components/organizms/TL/BossNameInput'
import DamageInput from 'components/organizms/TL/DamageInput'
import CommentInput from 'components/organizms/TL/CommentInput'
import UBsInput from 'components/organizms/TL/UBsInput'
import SaveTLToFavsButton from 'components/organizms/TL/SaveTLToFavsButton'

const Presenter: VFC = () => (
  <Column>
    <div className="pb-5 mt-5 ml-5">
      <div className="flex">
        <span className="mr-2">
          <CharactersSelectButton />
        </span>
        <ParseTLFromClipboardButton />
      </div>
      <div className="mt-8">
        <CharactersInput />
      </div>
      <div className="flex mt-12">
        <PhaseInput />
        <BossNameInput />
      </div>
      <div className="mt-5">
        <DamageInput />
      </div>
      <div className="mt-3">
        <CommentInput />
      </div>
      <div className="mt-5">
        <UBsInput />
      </div>
      <div>
        <SaveTLToFavsButton />
      </div>
    </div>
  </Column>
)

export default Presenter
