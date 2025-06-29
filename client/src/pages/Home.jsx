import { useDispatch, useSelector } from 'react-redux'
import Hero from '../Component/Hero'
import NewCollection from '../Component/NewCollection'
import NewsLetter from '../Component/NewsLetter'
import Offer from '../Component/Offer'
import Popular from '../Component/Popular'
import { useEffect } from 'react'
import { getData } from '../Redux/action'

const Home = () => {  

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.firstReducer);
  const popularData = data?.filter(item => item.type === 'popular');
  const latestData = data?.filter(item => item.type === 'latest');
  
  // console.log(latestData)

  useEffect(() =>{
    dispatch(getData())
  }, [dispatch]);

  
  return (
    <div className='bg-slate-100'>
    <Hero />
    {popularData && <Popular POPULAR={popularData}/>}
    <Offer />
    {latestData && <NewCollection LATEST={latestData}/>}
    <NewsLetter />
    </div>
  )
}

export default Home