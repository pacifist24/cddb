import { VFC, ChangeEvent } from 'react'
import { CHARACTERS_INFO } from 'lib/gameConstants'
import Presenter from './presenter'

type Props = {
  nameFrom: string
  setNameFrom: (value: string) => void
}

const NameFromInput: VFC<Props> = ({ nameFrom, setNameFrom }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameFrom(e.target.value)
  }
  const items = Object.keys(CHARACTERS_INFO)
    .sort()
    .map((element) => ({
      value: element,
      label: element,
    }))
  return <Presenter value={nameFrom} items={items} onChange={onChange} disabled={false} />
}

export default NameFromInput
