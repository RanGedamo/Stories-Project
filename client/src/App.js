import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/navbar/NavBar";
// import Comunnity from "./pages/Comunnity/Comunnity";
// import Routing from "./Routing";
import Home from "./pages/Home/Home";




export default function App() {
  return (
    <div className="App">
      <Home/>
     {/* <BrowserRouter>  */}
     {/* <NavBar/> */}
       {/* <Routing/> */}
      {/* </BrowserRouter>  */}
    </div>
  )
};