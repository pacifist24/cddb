import { VFC } from 'react'
import DrawerOpenButton from 'components/organizms/Header/DrawerOpenButton'

const Header: VFC = () => (
  <div className="flex">
    <DrawerOpenButton />
    <div className="ml-2 font-bold">クラバトDB</div>
  </div>
)

export default Header
