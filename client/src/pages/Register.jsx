import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();
  const[userData, setUserData] = useState({
      name : '',
      email : '',
      password : ''
    });

    const SendData = async(e) =>{
      e.preventDefault();
        const {name, email, password} = userData;
      if(name === '' || email === '' || password === ''){
        alert('provide details');
      }else{
        try {
          const res = await axios.post('http://localhost:8000/Register',{name, email, password})
        const receivedData = res.data;
        
          console.log(receivedData);
          navigate('/login')
        } catch (error) {
          console.log(error.response.data)
          alert (error.response.data || 'registration failed')
        }
        
      }
    }
    
    return (
      <section className='pt-32'>
        <div className='bg-white max-w-[555px] h-[500px] m-auto px-14 py-16 rounded-lg'>
          <h3 className='text-3xl font-bold'>Sign Up</h3>
          <form method='post' onSubmit={SendData}>
          <div className='flex flex-col w-full py-6'>
            <input type="text" placeholder='Enter Your Name' name='name' onChange={(e) => setUserData({...userData, name : e.target.value})} value={userData.name} className='p-[12px] outline-none rounded-lg bg-slate-900/5 my-2'/>
            <input type="email" placeholder='Enter Your Email' name='email' onChange={(e) => setUserData({...userData, email : e.target.value})} value={userData.email}  className='p-[12px] outline-none rounded-lg bg-slate-900/5 my-2'/>
            <input type="password" placeholder='Enter Your Password' name='password' onChange={(e) => setUserData({...userData, password : e.target.value})} value={userData.password} className='p-[12px] outline-none rounded-lg bg-slate-900/5 my-2'/>
          </div>
          <button type='submit' className='bg-black text-white w-full text-center rounded-lg py-2'>Continue</button>
          <p className='py-3'>Already have account ? <Link to={'/login'} className='text-orange-500'>Login</Link></p>
          </form>
        </div>
      </section>
    )
  
}

export default Register