import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from '../assets/logo.svg'
import logout from '../assets/logout.svg'
import user from '../assets/user.svg'
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import { MdClose, MdMenu, MdOutlineShoppingCart } from "react-icons/md"
import axios from "axios"


const Header = () => {
  const[menuOpen, setMenuOpen] = useState(false)
  const [Data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    }
    const token = localStorage.getItem('accessToken');

    const ValidUser = async() =>{
      const token = localStorage.getItem('accessToken');
      if(!token) {
        setIsLoggedIn(false)
      }
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_ENDPOINT}/Validate`, {headers : {Authorization : `Bearer ${token}`}});
            const receivedData = await res.data;
            const Cart = receivedData.cart
            const unique = Cart.filter((item, index, self) => index === self.findIndex(t => t.id === item.id));
            const uniqueLength = unique.length;
            setData([receivedData, uniqueLength]);
            setIsLoggedIn(true)
      } catch (error) {
        alert(error.response.data)
        localStorage.removeItem('accessToken');
        navigate('/');
      }
    }

    useEffect(()=>{
        ValidUser();
    }, []);


    const LogoutUser = async() =>{
      const token = localStorage.getItem('accessToken')
      try {
         await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_ENDPOINT}/Logout`, {}, {headers : {Authorization : `Bearer ${token}`}})
        alert('logout successful');
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        setData([]);
        navigate('/')
      } catch (error) {
        alert(error.response.data)
      }
    }
  return (
    <header className="fixed top-0 left-0 m-auto w-full bg-transparent bg-white ring-1 ring-slate-900 z-10">
       <div className="flex justify-between px-4 py-3 max-xs:px-2">
       <div>
            <Link>
            <img src={logo} alt="" height={66} width={88} />
            </Link>
        </div>
          {token && (
            <>
            <Navbar containerStyle = {"hidden md:flex gap-x-5 xl:gap-x-10 font-medium"} />
            <Navbar containerStyle={`${menuOpen ? "flex flex-col item-start p-12 bg-white w-64 gap-y-10 fixed top-20 right-8  rounded-3xl shadow-md ring-1 ring-slate-900/5 transition-all" 
              : "flex flex-col item-start p-12 bg-white w-64 gap-y-10 fixed top-20 -right-[100%] rounded-3xl shadow-md ring-1 ring-slate-900/5 transition-all"}`} />
            </>
          )}

         
         <div className="flex sm:gap-x-6">
            {!menuOpen ? (<MdMenu className="md:hidden mt-1 cursor-pointer hover:text-orange-400 mr-2 ring-1 ring-slate-900/30 p-1 w-8 h-8 rounded-full" onClick={toggleMenu}/>
            ):(
            <MdClose className="md:hidden mt-1 cursor-pointer hover:text-orange-400 mr-2 ring-1 ring-slate-900/30 p-1 w-8 h-8 rounded-full" onClick={toggleMenu} />
            )} 
             <div className="flex sm:gap-x-6">
              {Data[0] && (
                <NavLink to={'cart'} className={'flex p-1'}>
                <MdOutlineShoppingCart className="p-1 w-8 h-8 ring-1 ring-slate-900/30 rounded-full"/>
                <span className="h-5 w-5 relative flex justify-center items-center rounded-full bg-orange-400 text-white -top-2 font-medium">{Data[1]}</span>
                </NavLink>
              )}
            {isLoggedIn ? (          
              <button onClick={LogoutUser} className={'btn w-[120px] h-10 bg-orange-400 rounded-full flex justify-center p-1.5 gap-x-2 font-medium text-white'}>
                <img src={logout} alt="" height={19} width={19} />
                Logout
              </button>
            ):(
              <NavLink to={'login'} className={'btn w-[120px] h-10 bg-orange-400 rounded-full flex justify-center p-1.5 gap-x-2 font-medium text-white'}>
                <img src={user} alt="" height={19} width={19} />
                Login
              </NavLink>
            )}              
             </div>
           
          </div>
       </div>
    </header>
  )
}

export default Header 