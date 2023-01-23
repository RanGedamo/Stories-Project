import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/bars/Sidebar";
import View  from "./pages/stories/View"


import Routing from "./Routing";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
        <Routing />
      </BrowserRouter>
    </div>
  )
};