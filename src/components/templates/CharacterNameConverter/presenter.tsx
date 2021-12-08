import { VFC } from 'react'
import Column from 'components/atoms/Column'
import ConversionRuleInput from 'components/organizms/CharacterNameConverter/ConversionRuleInput'
import ConversionRuleOutput from 'components/organizms/CharacterNameConverter/ConversionRuleOutput'

const CharacterNameConverterTab: VFC = () => (
  <Column>
    <div className="p-2">
      <ConversionRuleInput />
      <ConversionRuleOutput />
    </div>
  </Column>
)

export default CharacterNameConverterTab
