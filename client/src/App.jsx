import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Component/Header'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './Component/Footer'
import bannerWomen from '../src/assets/bannerwomens.png'
import bannerMens from './assets/bannermens.png'
import bannerKids from './assets/bannerkids.png'

function App() {
 
  return (
    <main className='bg-primary'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mens" element={<Category Category='mens' banner={bannerMens}/>} />
        <Route path="/womens" element={<Category Category='women' banner={bannerWomen}/>} />
        <Route path="/kids" element={<Category Category='kids' banner={bannerKids}/>} />
        <Route path="/product" element={<Product/>}/>
            <Route path=':productId' element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
