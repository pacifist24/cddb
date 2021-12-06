import { VFC } from 'react'
import Sidebar from 'components/templates/Sidebar'
import TL from 'components/templates/TL'
import { ContentType } from 'ducks/main'
import CommonAlert from 'components/atoms/CommonAlert'

type Props = {
  displayedContent: ContentType
}

const Main: VFC<Props> = ({ displayedContent }) => (
  <div className="flex w-screen h-screen">
    <div className="w-64 border">
      <Sidebar />
    </div>
    <div className="flex-1 border">{displayedContent === 'tl' && <TL />}</div>
    <div className="border w-72">right</div>
    <CommonAlert />
  </div>
)

export default Main
