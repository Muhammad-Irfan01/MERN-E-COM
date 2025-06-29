import { IoIosArrowRoundForward } from "react-icons/io";
import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'
import { RiStarSFill } from "react-icons/ri";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../Redux/action";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Productdetail = () => {
  const {id} = useParams('');
  const [singData, setSingData] = useState([]);

  const dispatch = useDispatch();
  const {data} = useSelector(state => state.firstReducer);
  const popularData = data?.filter(item => item.type === 'popular')

  useEffect(() =>{
    dispatch(getData())
  }, [dispatch]);

  const getSingleData = async() =>{
    
    try {
      const res = await axios.get(`http://localhost:8000/getSingleProduct/${id}`);
      
      const data = res.data;
        setSingData([data])
    } catch (error) {
      console.log(error.message + 'failed to fetch data');    
    }
  }
  
  useEffect(() =>{
    getSingleData()
  }, [id]);

  const CartData = async(id) =>{
    const token = localStorage.getItem('accessToken');
    console.log(token)
    try {
        const res = await axios.get(`http://localhost:8000/AddCart/${id}`, {headers : {Authorization : `Bearer ${token}`},})
        const receivedData = await res.data;
        console.log(receivedData);
        setSingData(receivedData);
    } catch (error) {
        console.log(error.response.data)
    }
}
useEffect(() =>{
  const token = localStorage.getItem('accessToken');
  if(!token) {
    console.log("token not provided")
  }
}, [])

  return (
    <section className="mt-16">
      {singData.map((item) =>{
        return(
          <div key={item} className="px-2 md:px-20 py-10 overflow-hidden">
            <div className='flex items-center px-4 gap-2 py-6'>
                <span>Home</span>
                <IoIosArrowRoundForward className='text-xl mt-1'/>
                <span>Shop</span>
                <IoIosArrowRoundForward className='text-xl mt-1'/>
                <span>{item.category}</span>
                <IoIosArrowRoundForward className='text-xl mt-1'/><br />
                <h3>{item.name}</h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col-reverse md:flex-row md:space-x-2 ">
                <div className="flex md:flex-col flex-wrap md:space-y-2 space-x-2 md:space-x-0">
                    <img src={product_rt_1} alt="ProductImage" className='max-h-[99px]'/>
                    <img src={product_rt_2} alt="ProductImage" className='max-h-[99px]'/>
                    <img src={product_rt_3} alt="ProductImage" className='max-h-[99px]'/>
                    <img src={product_rt_4} alt="ProductImage" className='max-h-[99px]'/>
                </div>
                <img src={item.image} alt="Image" className="h-[420px]"/>
            </div>

            <div className="space-y-4 md:w-1/2">
              <h1 className="text-3xl">{item.name}</h1>
              <div className="flex items-center gap-3">
                <RiStarSFill className="text-orange-500 text-xl"/>
                <RiStarSFill className="text-orange-500 text-xl"/>
                <RiStarSFill className="text-orange-500 text-xl"/>
                <RiStarSFill className="text-orange-500 text-xl"/>
                  <p className="text-gray-400">(111)</p>
              </div>
              <div className="flex gap-6">
                <h2 className="line-through">{item.old_price}</h2>
                <h2 className="text-orange-500">{item.new_price}</h2>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h5>Select Size :</h5>
                <div className="flex gap-4">
                  <div className="ring-2 ring-slate-900 px-4 py-2 cursor-pointer">S</div>
                  <div className="ring-2 ring-slate-900/10 px-4 py-2 cursor-pointer">M</div>
                  <div className="ring-2 ring-slate-900/10 px-4 py-2 cursor-pointer">L</div>
                  <div className="ring-2 ring-slate-900/10 px-4 py-2 cursor-pointer">XL</div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
               <Link onClick={() => CartData(item.id)} to={`/cart`}><button className="md:w-full border border-black uppercase py-2 w-auto hover:bg-black hover:text-white md:tracking-widest">Add to Cart</button></Link>
              <Link to={'/'}><button className="md:w-full bg-black text-white py-2 w-auto uppercase hover:bg-white hover:text-black border border-black md:tracking-widest">Buy it Now</button></Link>
              </div>
              <div>
                <p>Category : <span className="text-gray-500">Women | Jacket | Winter</span></p>
              </div>
            </div>
            </div>
        </div>
        )
      })}


        <div className="py-10">
        <div className='md:w-3/4 m-auto'>
            <h3 className='h3 text-2xl text-center font-semibold'>Related Products</h3>
            <hr className='h-[10px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-10'/>
        </div>

        <div className='md:w-3/4 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Array.isArray(popularData) && popularData.map((elem) =>(
                <Item key={elem.id} id={elem.id} name={elem.name} image={elem.image} old_price={elem.old_price} new_price={elem.new_price}/>
            ))}

        </div>
        </div>
    </section>
  )
}

export default Productdetail