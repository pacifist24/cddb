import { VFC, useState } from 'react'
import Presenter from './presenter'

const DrawerOpenButton: VFC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const onClick = () => setIsDrawerOpen(true)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsDrawerOpen(open)
  }

  return <Presenter onClick={onClick} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
}

export default DrawerOpenButton
