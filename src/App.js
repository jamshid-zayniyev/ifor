import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./components/Home"
import { Route,Routes } from "react-router-dom"
import Products from "./components/Products"
import Product from "./components/Product"
import Cart from "./components/Cart"
import { UserContext } from "./context/userContext"
import { useState } from "react"
import NavR from "./components/Nav"
import Login from "./components/Login"
import Register from "./components/Register"
const App = () => {
  const [state,setState] = useState([])
  
  return (
    <div>
      <UserContext.Provider value={{state,setState}}>
      {/* <Navbar/> */}
      <NavR/>
      <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
       
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App