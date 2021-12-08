import { VFC } from 'react'
import Column from 'components/atoms/Column'
import StartTimeConfigInput from 'components/organizms/Config/StartTimeConfigInput'
import ArrangementConfigInput from 'components/organizms/Config/ArrangementConfigInput'

const ConfigTab: VFC = () => (
  <Column>
    <StartTimeConfigInput />
    <ArrangementConfigInput />
  </Column>
)

export default ConfigTab
