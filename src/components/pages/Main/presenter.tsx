import { VFC } from 'react'
import SplitPane from 'react-split-pane'
import Pane from 'react-split-pane/lib/Pane'
import Sidebar from 'components/templates/Sidebar'
import CharacterNameConverter from 'components/templates/CharacterNameConverter'
import TL from 'components/templates/TL'
import Config from 'components/templates/Config'
import Favs from 'components/templates/Favs'
import Search from 'components/templates/Search'
import TLOutputText from 'components/templates/TLOutputText'
import { ContentType } from 'ducks/main'

type Props = {
  displayedContent: ContentType
}

const Main: VFC<Props> = ({ displayedContent }) => (
  <SplitPane split="vertical">
    <Pane initialSize="240px">
      <Sidebar />
    </Pane>
    <Pane initialSize="520px">
      {displayedContent === 'tl' && <TL />}
      {displayedContent === 'search' && <Search />}
      {displayedContent === 'favs' && <Favs />}
      {displayedContent === 'name' && <CharacterNameConverter />}
      {displayedContent === 'config' && <Config />}
    </Pane>
    <Pane>
      <TLOutputText />
    </Pane>
  </SplitPane>
)

export default Main
