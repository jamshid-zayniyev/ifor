import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./components/Home"
import { Route,Routes } from "react-router-dom"
import Products from "./components/Products"
import Product from "./components/Product"
import Cart from "./components/Cart"
import { UserContext } from "./context/userContext"
import { useState } from "react"
const App = () => {
  const [state,setState] = useState([])
  
  return (
    <div>
      <UserContext.Provider value={{state,setState}}>
      <Navbar/>
      <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
       
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App