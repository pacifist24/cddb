import { VFC } from 'react'
import Column from 'components/atoms/Column'

type Props = {
  tlTextLines: string[]
}

const TLTab: VFC<Props> = ({ tlTextLines }) => (
  <Column>
    <div className="p-2 font-mono text-sm">
      {tlTextLines.map((line) => (
        <div key={Math.random()}>{line}</div>
      ))}
    </div>
  </Column>
)

export default TLTab
