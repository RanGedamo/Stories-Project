import { BrowserRouter } from "react-router-dom";
import "./App.css";
import View  from "./pages/stories/View"


import Routing from "./Routing";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  )
};