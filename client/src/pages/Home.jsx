
import Hero from '../Component/Hero'
import NewCollection from '../Component/NewCollection'
import NewsLetter from '../Component/NewsLetter'
import Offer from '../Component/Offer'
import Popular from '../Component/Popular'

const Home = () => {
  return (
    <div className='bg-slate-100'>
    <Hero />
    <Popular />
    <Offer />
    <NewCollection />
    <NewsLetter />
    </div>
  )
}

export default Home