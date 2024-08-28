import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import logout from '../assets/logout.svg'
import user from '../assets/user.svg'
import Navbar from "./Navbar"
import { useState } from "react"
import { MdClose, MdMenu, MdOutlineShoppingCart } from "react-icons/md"
// import {FaOpenCart} from 'react-icons/fa'

const Header = () => {

  const[menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    // e.preventDefault
    setMenuOpen(!menuOpen)
    }
  return (
    <header style={{height:'67px' }} className="fixed top-0 left-0 m-auto w-full bg-transparent bg-white ring-1 ring-slate-900 z-10">
       <div className="flex justify-between px-4 py-3 max-xs:px-2">
       <div>
            <Link>
            <img src={logo} alt="" height={66} width={88} />
            </Link>
        </div>

          <Navbar containerStyle = {"hidden md:flex gap-x-5 xl:gap-x-10 font-medium"} />
          <Navbar containerStyle={`${menuOpen ? "flex flex-col item-start p-12 bg-white w-64 gap-y-10 fixed top-20 right-8 rounded-3xl shadow-md ring-1 ring-slate-900/5 transition-all" 
            : "flex flex-col item-start p-12 bg-white w-64 gap-y-10 fixed top-20 -right-[100%] rounded-3xl shadow-md ring-1 ring-slate-900/5 transition-all"}`} />
         
         <div className="flex sm:gap-x-6">
            {!menuOpen ? (<MdMenu className="md:hidden mt-1 cursor-pointer hover:text-orange-400 mr-2 ring-1 ring-slate-900/30 p-1 w-8 h-8 rounded-full" onClick={toggleMenu}/>) 
            : (<MdClose className="md:hidden mt-1 cursor-pointer hover:text-orange-400 mr-2 ring-1 ring-slate-900/30 p-1 w-8 h-8 rounded-full" onClick={toggleMenu} />)} 
             <div className="flex sm:gap-x-6">
              <NavLink to={'cart'} className={'flex p-1'}>
              <MdOutlineShoppingCart className="p-1 w-8 h-8 ring-1 ring-slate-900/30 rounded-full"/>
              <span className="h-5 w-5 relative flex justify-center rounded-full bg-orange-400 text-white -top-2 font-medium">0</span>
              </NavLink>

              {/* <NavLink to={'logout'} className={'btn w-[120px] h-10 bg-orange-400 rounded-full flex justify-center p-1.5 gap-x-2 font-medium text-white'}>
                <img src={logout} alt="" height={19} width={19} />
                Logout
              </NavLink> */}

              <NavLink to={'login'} className={'btn w-[120px] h-10 bg-orange-400 rounded-full flex justify-center p-1.5 gap-x-2 font-medium text-white'}>
                <img src={user} alt="" height={19} width={19} />
                Login
              </NavLink>
             </div>
           
          </div>
       </div>


    </header>
  )
}

export default Header