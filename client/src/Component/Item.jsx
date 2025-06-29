import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Item = ({id, name, image, new_price, old_price}) => {
  return (
                   <Link to={`/getSingleProduct/${id}`} className='overflow-hidden rounded-xl shadow-lg'>
                        <div className='relative flex justify-center items-center overflow-hidden'>
                            <div className='h-12 w-12 bg-white rounded-full flex justify-center items-center absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'>
                            <FaSearch className='scale-125 hover:rotate-90 transition-all duration-200'/>
                            </div>
                            <img className='w-full group-hover:scale-110 block object-cover transition-all duration-1000' src={image} alt="ProductImage" />
                        </div>

                        <div className=' p-4 overflow-hidden'>
                            <h4 className='p-2 my-4 text-gray-500 font-semibold'>{name}</h4>
                            <div className='flex gap-6 p-2'>
                                <div className='font-semibold'>{new_price}</div>
                                <div className='text-orange-400 line-through font-bold'>{old_price}</div>
                            </div>   
                        </div>
                    </Link>
        )
}

export default Item