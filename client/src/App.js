import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routing";



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar/> */}
      <Routing/>
      </BrowserRouter>
    </div>
  )
};