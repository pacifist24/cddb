import { VFC } from 'react'
import { User } from 'firebase/auth'
import { logout } from 'lib/auth'
import Presenter from './presenter'

type Props = {
  user: User
}

const UserProfileButton: VFC<Props> = ({ user }) => {
  const menuItems = [
    {
      title: 'ログアウトする',
      func: async () => {
        await logout()
      },
    },
  ]

  return <Presenter user={user} menuItems={menuItems} />
}

export default UserProfileButton
