import { VFC, ReactNode } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

type Props = {
  linkIcon: ReactNode
  linkLabel: string
  isSelected: boolean
  handleChangeDisplayedContent: () => void
}

const SidebarMenuLink: VFC<Props> = ({
  linkIcon,
  linkLabel,
  isSelected,
  handleChangeDisplayedContent,
}) => (
  <ListItem disablePadding>
    <ListItemButton
      selected={isSelected}
      onClick={handleChangeDisplayedContent}
      style={{ borderRadius: '9999px' }}
    >
      <ListItemIcon>{linkIcon}</ListItemIcon>
      <ListItemText primary={linkLabel} />
    </ListItemButton>
  </ListItem>
)

export default SidebarMenuLink
