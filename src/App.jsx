// import { useState } from 'react'
import {Routes, Route} from  'react-router-dom'
import './App.css'
import ViewAllProducts from './assets/pages/ViewAllProducts'
import ShoppingCart from './assets/pages/ShoppingCart'
import Settings from './assets/pages/Settings'
import Authenticate from './assets/pages/Authenticate'
import NavBar from './assets/components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // const [token, setToken] = useState(localStorage.getItem("token"))
  // const [authenticated, setAuthenticated] = useState(false)

  return (
    <>
      <>
      <NavBar />
      </>
      <Routes>
        <Route path ='/' element={<ViewAllProducts />} />
        <Route path ='/authenticate' element={<Authenticate />} />
        <Route path ='/cart' element={<ShoppingCart />} />
        <Route path ='/setting' element={<Settings />} />
      </Routes>
      
    </>
  )
}

export default App
