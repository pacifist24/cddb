import { VFC, KeyboardEvent, MouseEvent } from 'react'
import Presenter from './presenter'

type Props = {
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void
}

const DrawerContents: VFC<Props> = ({ toggleDrawer }) => <Presenter toggleDrawer={toggleDrawer} />

export default DrawerContents
