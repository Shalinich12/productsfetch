
import { Navbar } from './Page/Navbar'
import { Products } from './Page/Products'
import { SingleProduct } from './Page/SingleProduct'
import Footer from './Page/Footer'
import {Route, Routes} from 'react-router-dom'
function App(){
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/Products' element={<Products/>}></Route>
    <Route path='/product/:id' element={<SingleProduct/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}
export default App
