import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyCalendar from "./pages/Calender";

import Routing from "./Routing";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <MyCalendar/>


    </div>
  )
};