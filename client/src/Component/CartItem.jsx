import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from 'react';

const CartItem = () => {
    const [Data, setData] = useState([]);
    const mergeData = [];
    const cartItem = async() =>{
        const token = localStorage.getItem('accessToken');
        try {
            const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_ENDPOINT}/Validate`, {headers : {Authorization : `Bearer ${token}`}});
            const receivedData = await res.data;
            setData(receivedData.cart)
        } catch (error) {
            alert(error.response.data);
        }
    }

    const removeItem = async(id) =>{
        const token = localStorage.getItem('accessToken');
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_APP_BACKEND_ENDPOINT}/${id}`, {headers : {Authorization : `Bearer ${token}`}});
            cartItem();
        } catch (error) {
            alert(error.response);
        }
    }

    if(Array.isArray(Data)){
        const productMap = {};
        Data.forEach((item) =>{
            const key = item.id;
            const amount = Number(item.Amount) || 1
            if(productMap[key]){
                productMap[key].Amount += amount;
            }else{
                productMap[key] = {...item, Amount : amount}
            }
        })
        for(let key in productMap){
            mergeData.push(productMap[key])
        }
    }
        
    useEffect(() => {
        cartItem();   
      }, []);
  
  return (
    <section className='pt-20'>
        <div>
            <table className='w-full mx-auto'>
                <thead>
                    <tr className='bg-slate-900/10'>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {mergeData.map((item, index) =>(
                        <tr key={index} className='text-center'>
                            <td><img src={item.image} alt="Product Image" className='w-[70px] m-auto'/></td>
                            <td>{item.name}</td>
                            <td>{item.new_price}</td>
                            <td>{item.Amount}</td>
                            <td>{item.new_price * item.Amount}</td>
                            <td onClick={() => removeItem(item.id)}><MdDelete className='m-auto'/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
  )
}


export default CartItem