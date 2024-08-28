
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import all_products from '../assets/all_products'
import Popular from '../Component/Popular'


const Category = ({Category, banner}) => {
  return (
    <section className='py-16 md:px-8 px-4'>
    <div>
     <div>
        <img src={banner} alt="" />
      </div>
      <div>
        <h4><span>Showing 1-12 </span> òut of 36</h4>
        <div>Sort by <MdOutlineKeyboardArrowDown/> </div>
      </div>
      <div>
        {all_products.map((item, index) =>{
          if(Category === item.Category){
            <Popular key={index} image={item.image} name={item.name} new_price={item.new_price} old_Price={item.old_price}/>
          }
            
          })}
      </div>
    </div>
    </section>
  )
}

export default Category