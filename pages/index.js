import Head from 'next/head'
import Navbar from "./components/Navbar"
import GlobalStyles from "./components/styles/Global"

import TopComp from './components/TopComp'




export default function Home() {

  return (
    <>
    <GlobalStyles />
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <TopComp />

      </>
  )
}
