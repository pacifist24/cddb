import 'styles/globals.css'
import { VFC } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AuthProvider } from 'app/AuthContext'
import { CommonDialogProvider } from 'components/atoms/CommonDialogProvider'
import { CommonAlertProvider } from 'components/atoms/CommonAlertProvider'
import Head from 'next/head'
import store from 'app/store'

const MyApp: VFC = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>クラバトDB</title>
      <meta property="og:url" content={process.env.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="クラバトDB" />
      <meta property="og:description" content="クラバト編成を投稿、検索できるWebサイトです。" />
      <meta property="og:site_name" content="クラバトDB" />
      <meta property="og:image" content={`${process.env.siteUrl}ハロウィンミヤコ.jpg`} />
    </Head>
    <CommonAlertProvider>
      <CommonDialogProvider>
        <AuthProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </AuthProvider>
      </CommonDialogProvider>
    </CommonAlertProvider>
  </>
)

export default MyApp
