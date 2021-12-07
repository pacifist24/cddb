import { VFC } from 'react'
import SplitPane from 'react-split-pane'
import Pane from 'react-split-pane/lib/Pane'
import Sidebar from 'components/templates/Sidebar'
import TL from 'components/templates/TL'
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
      <Pane initialSize="500px">{displayedContent === 'tl' && <TL />}</Pane>
      <Pane>right</Pane>
    </SplitPane>
    <CommonAlert />
  </>
)

export default Main
