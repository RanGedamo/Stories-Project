import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
// import NavBar from "./components/navbar/NavBar";
// import Comunnity from "./pages/Comunnity/Comunnity";
import Routing from "./Routing";
import Home from "./pages/Home/Home";
import MostActive from "./components/sections/MostActive";



export default function App() {
  return (
    <div className="App">
      {/* <Home/> */}
     <BrowserRouter> 
     {/* <NavBar/> */}
       <Routing/>
      </BrowserRouter> 
      <MostActive/>
      <Footer/>
    </div>
  )
};