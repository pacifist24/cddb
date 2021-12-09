import { VFC } from 'react'
import { User } from 'firebase/auth'
import { logout } from 'lib/auth'
import { Button, Menu, MenuItem } from '@mui/material'

type Props = {
  user: User
  open: boolean
  handleClose: () => void
  handleOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  anchorEl: HTMLElement
}

const UserProfileButton: VFC<Props> = ({ user, open, handleClose, handleOpen, anchorEl }) => (
  <>
    <Button
      style={{ borderRadius: '9999px', padding: '10px' }}
      onClick={handleOpen}
      aria-expanded={open ? 'true' : undefined}
      className="hover:bg-gray-200"
    >
      <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
      <span className="ml-3 font-bold text-gray-800">{user.displayName}</span>
      <span className="ml-5 text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </span>
    </Button>
    <Menu
      id="basic-menu"
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem
        dense
        onClick={async () => {
          await logout()
          handleClose()
        }}
      >
        ログアウトする
      </MenuItem>
    </Menu>
  </>
)

export default UserProfileButton
