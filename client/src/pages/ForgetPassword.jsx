import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const ForgetPassword = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('')
    const [Data, setData] =  useState({
        email : '',
    })

    const forgetPassword = async(e) =>{
        e.preventDefault() ;
        try {
          const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_ENDPOINT}/ForgetPassword`, {email : Data.email});
          alert(res,'successful');
          setMessage(res.message);
          navigate('/login')
        } catch (error) {
          alert(error.res);
        }
      }

  return (
      <section className='pt-32'>
        {message && <p>{message}</p>}
        <div className='bg-white max-w-[555px] h-[350px] m-auto px-14 py-16 rounded-lg'>
          <h3 className='text-3xl font-bold'>Reset Password</h3>
          <form method='post'>
          <div className='flex flex-col w-full py-6'>
            <input type="email" name='email' placeholder='Enter Your Email' onChange={(e) => setData({...Data, email : e.target.value})} value={Data.email}  className='p-[12px] outline-none rounded-lg bg-slate-900/5 my-2'/>
          </div>
          <button onClick={forgetPassword} className='bg-black text-white w-full text-center rounded-lg py-2'>Continue</button>
          </form>
        </div>
      </section>
    )
}

export default ForgetPassword