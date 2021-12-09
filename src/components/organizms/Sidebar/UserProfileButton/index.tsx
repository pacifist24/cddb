import { VFC, useState } from 'react'
import { User } from 'firebase/auth'
import Presenter from './presenter'

type Props = {
  user: User
}

const UserProfileButton: VFC<Props> = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <Presenter
      user={user}
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      anchorEl={anchorEl}
    />
  )
}

export default UserProfileButton
