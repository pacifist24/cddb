import { VFC } from 'react'
import { useAuthContext } from 'app/AuthContext'
import Presenter from './presenter'

const LoginButton: VFC = () => {
  const currentUser = useAuthContext().currentUser
  return <Presenter user={currentUser} />
}

export default LoginButton
