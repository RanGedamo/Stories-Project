import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

// import Comunnity from "./pages/Comunnity/Comunnity";
import Routing from "./Routing";
import Home from "./pages/Home/Home";
import NavBar from "./components/navbar/NavBar";
import Cookies from "js-cookie";



export default function App() {
  const user = Cookies.get("user")
  return (
    <div className="App">

      <BrowserRouter>
       {user? <NavBar />:""}
        <Routing />
        {user? <Footer />:""}
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
};