import { NavLink, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
function App() {
  return (
    <>
      <div>
       <nav style={{textAlign:"center",marginTop:"20px"}}>  
        <div class="ok">
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/">Home</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/contact">Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
       </nav>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
       </Routes>
      </div>
    </>
  )
}

export default App
