import type { NextPage } from 'next'
import Head from 'next/head'
import Main from 'components/pages/Main'

const Home: NextPage = () => (
  <>
    <Head>
      <title>クラバトDB</title>
      <link rel="icon" href="/ハロウィンミヤコ.jpg" />
    </Head>
    <Main />
  </>
)

export default Home
