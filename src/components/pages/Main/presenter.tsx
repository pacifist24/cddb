import { VFC } from 'react'
import SplitPane from 'react-split-pane'
import Pane from 'react-split-pane/lib/Pane'
import Sidebar from 'components/templates/Sidebar'
import CharacterNameConverter from 'components/templates/CharacterNameConverter'
import TL from 'components/templates/TL'
import Config from 'components/templates/Config'
import TLOutputText from 'components/templates/TLOutputText'
import { ContentType } from 'ducks/main'
import CommonAlert from 'components/atoms/CommonAlert'

type Props = {
  displayedContent: ContentType
}

const Main: VFC<Props> = ({ displayedContent }) => (
  <>
    <SplitPane split="vertical">
      <Pane initialSize="240px">
        <Sidebar />
      </Pane>
      <Pane initialSize="520px">
        {displayedContent === 'tl' && <TL />}
        {displayedContent === 'config' && <Config />}
        {displayedContent === 'name' && <CharacterNameConverter />}
      </Pane>
      <Pane>
        <TLOutputText />
      </Pane>
    </SplitPane>
    <CommonAlert />
  </>
)

export default Main
