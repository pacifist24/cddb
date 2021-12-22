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
import AccidentRateInput from 'components/organizms/TL/AccidentRateInput'
import OperationTypeInput from 'components/organizms/TL/OperationTypeInput'
import SaveTLToServer from 'components/organizms/TL/SaveTLToServer'

const Presenter: VFC = () => (
  <Column>
    <div className="pb-10 mt-5 ml-5">
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
        <div className="ml-2">
          <BossNameInput />
        </div>
      </div>
      <div className="flex mt-6">
        <div className="mr-2">
          <OperationTypeInput />
        </div>
        <DamageInput />
      </div>
      <div className="flex mt-6">
        <AccidentRateInput />
      </div>
      <div className="mt-3">
        <CommentInput />
      </div>
      <div className="mt-6">
        <UBsInput />
      </div>
      <div className="mt-3">
        <SaveTLToFavsButton />
      </div>
      <div className="mt-3">
        <SaveTLToServer />
      </div>
    </div>
  </Column>
)

export default Presenter
