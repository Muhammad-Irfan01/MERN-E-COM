import {FaSearch} from 'react-icons/fa'
import { POPULAR } from '../assets/popular'
import { Link } from 'react-router-dom'


const Popular = () => {
  return (
    <section className='py-16'>
        <div className=''>
            <h3 className='h3 text-2xl text-center font-semibold'>Popular Products</h3>
            <hr className='h-[10px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-10'/>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {POPULAR.map((data, index) =>(
                <div key={index} className='overflow-hidden rounded-xl shadow-lg'>
                    <div className='relative flex justify-center items-center overflow-hidden'>
                        <Link to={`product/${data.id}`} className='h-12 w-12 bg-white rounded-full flex justify-center items-center absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'>
                        <FaSearch className='scale-125 hover:rotate-90 transition-all duration-200'/>
                        </Link>
                        <img className='w-full group-hover:scale-110 block object-cover transition-all duration-1000' src={data.image} alt="" />
                    </div>

                    <div className=' p-4 overflow-hidden'>
                        <h4 className='p-2 my-4 text-gray-500 font-semibold'>{data.name}</h4>
                        <div className='flex gap-6 p-2'>
                        <div className='font-semibold'>{data.new_price}</div>
                        <div className='text-orange-400 line-through font-bold'>{data.old_price}</div>
                    </div>   
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}

export default Popular