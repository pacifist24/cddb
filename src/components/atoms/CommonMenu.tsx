import { FC, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'

type Props = {
  menuItems: {
    title: string
    func: () => void
  }[]
}

const CommonMenu: FC<Props> = ({ menuItems, children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        style={{ minWidth: '0px' }}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          setAnchorEl(event.currentTarget)
        }}
      >
        {children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            dense
            onClick={() => {
              item.func()
              handleClose()
            }}
            key={item.title}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default CommonMenu
