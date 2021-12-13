import { VFC } from 'react'
import { logout } from 'lib/auth'
import { useAuthContext } from 'app/AuthContext'
import Presenter from './presenter'

const UserProfileButton: VFC = () => {
  const currentUser = useAuthContext().currentUser
  const menuItems = [
    {
      title: 'ログアウトする',
      func: async () => {
        await logout()
      },
    },
  ]

  return <Presenter user={currentUser} menuItems={menuItems} />
}

export default UserProfileButton
