import axios from 'axios';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate = useNavigate();
  const[Data, setData] = useState({
    email : '',
    password : ''
  });

  const SendData = async(e) =>{
    e.preventDefault();
    const {email, password} = Data
    if(email === '' || password === ''){
      alert('Provide all Fields')
    }else{
      try {
        const res = await axios.post('http://localhost:8000/Login', {email, password});
      const {accessToken, refreshToken} = res.data;
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
        Navigate('/');
        window.location.reload();
      } catch (error) {
        console.log(error.response.data)
        alert(error.response.data || 'Login failed')
      }
    }
  }

  return (
    <section className='pt-32'>
      <div className='bg-white max-w-[555px] h-[500px] m-auto px-14 py-16 rounded-lg'>
        <h3 className='text-3xl font-bold'>Login</h3>
        <form method='post' onSubmit={SendData}>
        <div className='flex flex-col w-full py-6'>
          <input type="email" name='email' placeholder='Enter Your Email' onChange={(e) => setData({...Data, email : e.target.value})} value={Data.email}  className='p-[12px] outline-none rounded-lg bg-slate-900/5 my-2'/>
          <input type="password" name='password' placeholder='Enter Your Password' onChange={(e) => setData({...Data, password : e.target.value})} value={Data.password} className='p-[12px] outline-none rounded-lg bg-slate-900/5 my-2'/>
          <Link to={'/forgetpassword'} className='text-black w-full text-left py-2'>Forget Password?</Link>
        </div>
        <button type='submit' className='bg-black text-white w-full text-center rounded-lg py-2'>Continue</button>
        <p className='py-3'>Don,t have account ? <Link to={'/register'} className='text-orange-500'>Sign Up</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login