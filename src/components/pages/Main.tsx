import { VFC } from 'react'
import Sidebar from 'components/templates/Sidebar'

const Main: VFC = () => (
  <div className="flex w-screen h-screen">
    <div className="w-64 border">
      <Sidebar />
    </div>
    <div className="flex-1 border">center</div>
    <div className="border w-72">right</div>
  </div>
)

export default Main
