import { VFC, KeyboardEvent, MouseEvent } from 'react'
import Box from '@mui/material/Box'
import Sidebar from 'components/templates/Sidebar'

type Props = {
  toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void
}

const DrawerContents: VFC<Props> = ({ toggleDrawer }) => (
  <Box
    sx={{ width: 240 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <Sidebar />
  </Box>
)

export default DrawerContents
