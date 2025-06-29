// import { POPULAR } from '../assets/popular'
import Item from './Item'

const Popular = (popularData) => {  
  return (
    <section className='py-16'>
        <div className=''>
            <h3 className='h3 text-2xl text-center font-semibold'>Popular Products</h3>
            <hr className='h-[10px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-10'/>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Array.isArray(popularData.POPULAR) && popularData.POPULAR.map((elem) => (
             
                <Item key={elem.id} id={elem.id} name={elem.name} image={elem.image} old_price={elem.old_price} new_price={elem.new_price}/>

            ))}
        </div>
    </section>
  )
}

export default Popular