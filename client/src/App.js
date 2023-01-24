import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import Routing from "./Routing";
import Home from "./pages/Home/Home.jsx";


export default function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <NavBar/> */}
      {/* <Routing/> */}
      {/* </BrowserRouter> */}
      <Home/>
    </div>
  )
};