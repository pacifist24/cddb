import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AuthProvider } from 'app/AuthContext'
import { CommonDialogProvider } from 'components/atoms/CommonDialogProvider'
import { CommonAlertProvider } from 'components/atoms/CommonAlertProvider'
import store from 'app/store'

const MyApp: React.VFC = ({ Component, pageProps }: AppProps) => (
  <CommonAlertProvider>
    <CommonDialogProvider>
      <AuthProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </CommonDialogProvider>
  </CommonAlertProvider>
)

export default MyApp
