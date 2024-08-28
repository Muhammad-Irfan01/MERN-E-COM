import { NavLink } from "react-router-dom"
import {MdHomeFilled, MdCategory, MdShop2, MdContacts} from 'react-icons/md'

const Navbar = ({containerStyle}) => {
  return (
    <nav className={`${containerStyle}`}>
      <NavLink to={'/home'} className={({isActive}) => isActive ? 'text-orange-400 relative flex-1 after:w-full after:h-[1] after:bg-orange-400 after:absolute after:-bottom-3 after:right-0' : ''}><div className="flex gap-x-1 items-center"><MdHomeFilled/>Home</div></NavLink>
      <NavLink to={'/mens'} className={({isActive}) => isActive ? 'text-orange-400 relative flex-1 after:w-full after:h-[1] after:bg-orange-400 after:absolute after:-bottom-3 after:right-0' : ''}><div className="flex gap-x-1 items-center"><MdCategory/>Men's</div></NavLink>
      <NavLink to={'/womens'} className={({isActive}) => isActive ? 'text-orange-400 relative flex-1 after:w-full after:h-[1] after:bg-orange-400 after:absolute after:-bottom-3 after:right-0' : ''}><div className="flex gap-x-1 items-center"><MdShop2/>Women's</div></NavLink>
      <NavLink to={'/kids'} className={({isActive}) => isActive ? 'text-orange-400 relative flex-1 after:w-full after:h-[1] after:bg-orange-400 after:absolute after:-bottom-3 after:right-0' : ''}><div className="flex gap-x-1 items-center"><MdContacts/>Kid's</div></NavLink>
    </nav>
  )
}

export default Navbar