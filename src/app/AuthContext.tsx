import { User } from 'firebase/auth'
import { FC, createContext, useEffect, useState, useMemo, useContext } from 'react'

import { onAuthStateChanged } from 'lib/auth'

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined)

  const memorizedCurrrentUser = useMemo(() => ({ currentUser }), [currentUser])
  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    onAuthStateChanged((user) => {
      // ログイン状態が変化すると呼ばれる
      setCurrentUser(user)
    })
  }, [])

  /* 下階層のコンポーネントをラップする */
  return <AuthContext.Provider value={memorizedCurrrentUser}>{children}</AuthContext.Provider>
}

export const useAuthContext = (): AuthContextProps => useContext(AuthContext)
