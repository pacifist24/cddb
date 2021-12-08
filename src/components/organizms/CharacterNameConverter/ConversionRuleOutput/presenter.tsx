import { VFC } from 'react'
import Chip from 'components/atoms/Chip'

type Props = {
  nameConversionTable: { [key: string]: string }
  handleDelete: (key: string) => () => void
}

const ConversionRuleOutput: VFC<Props> = ({ nameConversionTable, handleDelete }) => (
  <div className="flex flex-wrap mt-8 overflow-x-hidden">
    {Object.keys(nameConversionTable)
      .sort()
      .map((val) => (
        <Chip onDelete={handleDelete(val)} key={val}>
          {val} <br />⇒ {nameConversionTable[val]}
        </Chip>
      ))}
  </div>
)

export default ConversionRuleOutput
