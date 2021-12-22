import { VFC } from 'react'
import AddButton from 'components/atoms/AddButton'
import NameFromInput from './NameFromInput'
import NameToInput from './NameToInput'

type Props = {
  handleClickSubmit: (key: string, value: string) => () => void
  nameFrom: string
  setNameFrom: (val: string) => void
  nameTo: string
  setNameTo: (val: string) => void
}

const ConversionRuleInput: VFC<Props> = ({
  handleClickSubmit,
  nameFrom,
  setNameFrom,
  nameTo,
  setNameTo,
}) => (
  <div className="flex items-center justify-center mt-8">
    <NameFromInput nameFrom={nameFrom} setNameFrom={setNameFrom} />

    <span className="mx-1 text-gray-600">
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
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </span>
    <NameToInput nameTo={nameTo} setNameTo={setNameTo} />
    <AddButton
      onClick={handleClickSubmit(nameFrom, nameTo)}
      disabled={nameFrom === '' || nameTo === ''}
    />
  </div>
)

export default ConversionRuleInput
