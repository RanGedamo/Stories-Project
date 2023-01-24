import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/bars/NavBar";
import Sidebar from "./components/bars/Sidebar";
import View  from "./pages/stories/View"
import Challenges from './components/cards/Challenges'

import Routing from "./Routing";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar/> */}
        <Challenges />
      </BrowserRouter>
    </div>
  )
};