import { useState } from 'react'
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
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [authenticated, setAuthenticated] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const [products, setProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState()
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0)
  

  console.log(localStorage.getItem('token'))
  console.log(token)
  console.log(cart)

  
  

  function addToCart(product){
    const ProductExists = cart.find((item) => item.id === product.id)
    if(ProductExists){
      setCart(cart.map((item) => item.id===product.id ?
      {...ProductExists, quantity: ProductExists.quantity + 1}: item)
      )
      setCartCount(cartCount + 1)
    }
    else {
      setCart([...cart, {...product, quantity: 1}])
      setCartCount(cartCount + 1)
    }
    console.log(ProductExists)
    
}


  return (
    <>
      <>
        <NavBar
          cart={cart}
          searchProducts={searchProducts}
          setSearchProducts={setSearchProducts}
          token={token}
          setToken={setToken}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          cartCount={cartCount}

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
          token={token}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
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
        <Route path='/authenticate' element={<Authenticate 
          token={token}
          setToken={setToken}
          setAuthenticated={setAuthenticated}
        />} />
        <Route path='/cart' element={<ShoppingCart
          cart={cart}
          setCart={setCart} />}
        />
        <Route path='/profile' element={<Settings 
          token={token}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />} />
      </Routes>

    </>
  )
}

export default App
