import { FC, useState } from 'react'
import { Menu, MenuItem, PopoverOrigin } from '@mui/material'

type Props = {
  menuItems: {
    title: string
    func: () => void
  }[]
  anchorOrigin: PopoverOrigin
}

const CommonMenu: FC<Props> = ({
  menuItems,
  children,
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
  },
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <button
        style={{ minWidth: '0px' }}
        className="block"
        type="button"
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          setAnchorEl(event.currentTarget)
        }}
      >
        {children}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
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
    </>
  )
}

export default CommonMenu
