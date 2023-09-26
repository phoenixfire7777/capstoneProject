import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ViewAllProducts from './assets/pages/ViewAllProducts'
import ShoppingCart from './assets/pages/ShoppingCart'
import Settings from './assets/pages/Settings'
import Authenticate from './assets/pages/Authenticate'
import NavBar from './assets/components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './assets/pages/SingleProduct'
import SearchPage from './assets/pages/SearchPage'
function App() {
  // const [token, setToken] = useState(localStorage.getItem("token"))
  // const [authenticated, setAuthenticated] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchProducts, setSearchProducts] = useState()

  function addToCart(product){
    const cartItem = {
        ...product,
        quantity: 1
    }

    setCart([...cart, cartItem]);
    
}



  console.log(products)
  console.log(cart)

  return (
    <>
      <>
        <NavBar
          cart={cart}
          searchProducts={searchProducts}
          setSearchProducts={setSearchProducts}


        />
      </>
      <Routes>
        <Route path='/' element={<ViewAllProducts
          isActive={isActive}
          setIsActive={setIsActive}
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />}
        />
        <Route path='/product/:id' element={<SingleProduct
          isActive={isActive}
          setIsActive={setIsActive} 
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
          />}
        />
        <Route path='/search/:searchProduct' element={<SearchPage
          cart={cart}
          setCart={setCart}
        />} />
        <Route path='/authenticate' element={<Authenticate />} />
        <Route path='/cart' element={<ShoppingCart
          cart={cart}
          setCart={setCart} />}
        />
        <Route path='/setting' element={<Settings />} />
      </Routes>

    </>
  )
}

export default App
