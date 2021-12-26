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
import AttackRoute from 'components/templates/Routes'
import { ContentType } from 'ducks/main'
import Header from 'components/templates/Header'

type Props = {
  displayedContent: ContentType
  isWide: boolean
}

const Main: VFC<Props> = ({ displayedContent, isWide }) => (
  <>
    {!isWide && (
      <div className="w-screen">
        <div className="relative top-0 left-0 z-10 flex items-center flex-none h-10 py-3 pl-5 border-b space-x-4">
          <Header />
        </div>
        <div className="fixed left-0 w-screen top-10">
          {displayedContent === 'search' && <Search />}
          {displayedContent === 'tl' && <TL />}
          {displayedContent === 'favs' && <Favs />}
          {displayedContent === 'route' && <AttackRoute />}
          {displayedContent === 'name' && <CharacterNameConverter />}
          {displayedContent === 'config' && <Config />}
          {displayedContent === 'output' && !isWide && <TLOutputText />}
        </div>
      </div>
    )}
    {isWide && (
      <SplitPane split="vertical">
        <Pane initialSize="240px">
          <Sidebar />
        </Pane>
        <Pane initialSize="520px">
          {displayedContent === 'tl' && <TL />}
          {displayedContent === 'search' && <Search />}
          {displayedContent === 'favs' && <Favs />}
          {displayedContent === 'route' && <AttackRoute />}
          {displayedContent === 'name' && <CharacterNameConverter />}
          {displayedContent === 'config' && <Config />}
        </Pane>
        <Pane>
          <TLOutputText />
        </Pane>
      </SplitPane>
    )}
  </>
)

export default Main
