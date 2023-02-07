import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./components/Home"
import { Route,Routes } from "react-router-dom"
import Products from "./components/Products"
import Product from "./components/Product"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/products/:id" element={<Product/>}/>
      </Routes>
    </div>
  )
}

export default App