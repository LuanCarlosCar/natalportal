import type { NextPage } from 'next'
import Accessory from '../components/home/Accessory'
import Donation from '../components/home/Donation'
import Donation2 from '../components/home/Donation2'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Donation />
      <Accessory />
      <Donation2 />
      <Footer />
    </>
  )
}

export default Home
