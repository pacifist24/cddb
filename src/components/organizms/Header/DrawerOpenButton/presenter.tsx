import { VFC, KeyboardEvent, MouseEvent } from 'react'
import Drawer from '@mui/material/Drawer'
import DrawerContents from 'components/organizms/Header/DrawerContents'

type Props = {
  onClick: () => void
  isDrawerOpen: boolean
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void
}

const DrawerOpenButton: VFC<Props> = ({ onClick, isDrawerOpen, toggleDrawer }) => (
  <>
    <button type="button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
      <DrawerContents toggleDrawer={toggleDrawer} />
    </Drawer>
  </>
)

export default DrawerOpenButton
