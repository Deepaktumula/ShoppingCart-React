import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"



const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-slate-900">
      
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
