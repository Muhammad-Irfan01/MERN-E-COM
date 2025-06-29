import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Header from './Component/Header'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './Component/Footer'
import bannerWomen from '../src/assets/bannerwomens.png'
import bannerMens from './assets/bannermens.png'
import bannerKids from './assets/bannerkids.png'
import Productdetail from './Component/ProductDetail'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getData } from './Redux/action'


function App() {
 return (
  <main className='bg-[#F0F3F4]'>
  <BrowserRouter>
    <AppContent/>
  </BrowserRouter>
   </main>
 )
}

function AppContent() {
  const dispatch = useDispatch();
  const location = useLocation();
    const {data} = useSelector(state => state.firstReducer);
    const menData = data?.filter(item => item.category === 'men');
    const womenData = data?.filter(item => item.category === 'women');
    const kidData = data?.filter(item => item.category === 'kid');

    useEffect(()=>{
      dispatch(getData());
    },[dispatch]);
    
    const hideFooter = ['/login', '/register', '/forgetPassword', '/resetPassword'].some(path => location.pathname.startsWith(path));
  return (
    
      <>
      <Header/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/mens" element={<Category banner={bannerMens} DATA={menData}/>} />
          <Route path="/womens" element={<Category banner={bannerWomen} DATA={womenData}/>} />
          <Route path="/kids" element={<Category banner={bannerKids} DATA={kidData}/>} />
          <Route path="/product" element={<Productdetail/>}/>
              <Route path='/getSingleProduct/:id' element={<Productdetail/>}></Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgetPassword" element={<ForgetPassword/>}/>
          <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
        </Routes>

        {!hideFooter && <Footer />}
      </>
  )
}

export default App
