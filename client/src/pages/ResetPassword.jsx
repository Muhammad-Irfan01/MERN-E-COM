import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const {token} = useParams
    const navigate  = useNavigate();
    const [message, setMessage] = useState('');
    const [Data, setData] = useState({
        password : ''
    })

    const resetPassword = async(e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_ENDPOINT}/ResetPassword/${token}`, {password : Data.password});
            setMessage(res.data);
            navigate('/login');
        } catch (error) {
            setMessage(error.response.data)
        }
    }
  return (
      <section className='pt-32'>
        {message && <p>{message}</p>}
        <div className='bg-white max-w-[555px] h-[500px] m-auto px-14 py-16 rounded-lg'>
          <h3 className='text-3xl font-bold'>New Password</h3>
          <form method='post'>
          <div className='flex flex-col w-full py-6'>
            <input type="password" name='password' placeholder='Enter Your New Password' onChange={(e) => setData({...Data, password : e.target.value})} value={Data.password} className='p-[12px] outline-none rounded-lg bg-slate-900/5 my-2'/>
          </div>
          <button onClick={resetPassword} className='bg-black text-white w-full text-center rounded-lg py-2'>Continue</button>
          <p className='py-3'>Don,t have account ? <Link to={'/register'} className='text-orange-500'>Sign Up</Link></p>
          </form>
        </div>
      </section>
    )
}

export default ResetPassword