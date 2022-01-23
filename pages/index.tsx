import type { NextPage } from 'next'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
   <div>
     <Header/>
     <h1>Hi</h1>
     <Footer/> 
   </div>
  )
}

export default Home