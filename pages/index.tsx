import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="This a clone of netflix where users can discover videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Netflix</h1>
      <Banner title='The Shrek' subtitle='The big green Oger' imgURL="/images/Shrek-5.jpg"/>
      {/* <Nav />     
      <Card /> */}
    </div>
  )
}

export default Home
