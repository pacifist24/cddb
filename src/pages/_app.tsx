import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AuthProvider } from 'app/AuthContext'
import store from 'app/store'

const MyApp: React.VFC = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </AuthProvider>
)

export default MyApp
