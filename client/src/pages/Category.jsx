import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
// import all_products from '../assets/all_products'
import Item from '../Component/Item'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react';
// import {getData} from '../Redux/action';

const Category = ({banner, DATA}) => {
  return (
    <section className='py-16 md:px-8 px-4'>
    <div>
     <div>
        <img src={banner} alt="" />
      </div>
      <div className='flex justify-between py-8 px-2'>
        <h4><span className='font-bold'>Showing 1-12 </span> out of 36</h4>
        <div className='flex items-center border rounded-full px-6 py-3'>Sort by <MdOutlineKeyboardArrowDown className='mt-1 ml-2'/> </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array.isArray(DATA) && DATA.map((item, index) =>{
           return <Item key={index} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_Price={item.old_price}/>
         })}
      </div>
      <div className='mt-16 text-center'>
        <button className='bg-black rounded-full text-white px-6 py-3'>Load More</button>
      </div>
    </div>
    </section>
  )
}

export default Category