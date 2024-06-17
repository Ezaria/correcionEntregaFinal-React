import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Error404 from './components/Error404.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import ShopCategory from './components/ShopCategory.jsx'
import Checkout from './components/Checkout.jsx'
import { CartProvider } from './context/cart.jsx'
import Cloud from './components/Cloud.jsx'


 

function App() {
  
  return ( 
    <CartProvider>
      <BrowserRouter>
      
        <NavBar/> 
          
          <Routes>   
            <Route path={"/"} element={<ShopCategory />} />
            <Route path={"/category/:id"} element={<ShopCategory />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Cloud />
          <Footer/>
          

      </BrowserRouter>
    </CartProvider>

    

    
    
  ) 
    
}

export default App
