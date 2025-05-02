
import { Navbar } from './Page/Navbar'
import { Products } from './Page/Products'
import { SingleProduct } from './Page/SingleProduct'
import Footer from './Page/Footer'
import {Route, Routes} from 'react-router-dom'
import { Home } from './Page/Home'
import { Cart } from './Page/Cart'
function App(){
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/Home' element={<Home/> }></Route>
    <Route path='/Products' element={<Products/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='/product/:id' element={<SingleProduct/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}
export default App
