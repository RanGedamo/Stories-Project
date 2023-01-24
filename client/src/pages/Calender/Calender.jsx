
import "./Calender.css";
import { useEffect, useState } from "react";
import PopUpCalender from "../../components/PopUp/PopupCalender";
import { getAllEvents } from "../../services/eventServices";
const MyCalendar = () => {
  const [toggle, setToggle] = useState(false);


  const today=new Date()

  
  console.log(today);

  const changeToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <div>
        {toggle?<PopUpCalender/>:""}
      <div className="container-cal">
        <div className="calendar">
          <div className="front">
            <div className="current-date">
              <h1>{today.toString().slice(0,10)}</h1>
              <h1>{today.getFullYear()}</h1>
            </div>

            <div className="current-month">
              <ul className="week-days">
                <li>MON</li>
                <li>TUE</li>
                <li>WED</li>
                <li>THU</li>
                <li>FRI</li>
                <li>SAT</li>
                <li>SUN</li>
              </ul>

              <div className="weeks">
                <div className="first">
                  <span className="last-month">28</span>
                  <span className="last-month">29</span>
                  <span className="last-month">30</span>
                  <span className="last-month">31</span>
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                </div>

                <div className="second">
                  <span>04</span>
                  <span>05</span>
                  <span className="event" onClick={changeToggle}>
                    
                    06
                  </span>
                  <span>07</span>
                  <span>08</span>
                  <span>09</span>
                  <span>10</span>
                </div>

                <div className="third">
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span >15</span>
                  <span>16</span>
                  <span>17</span>
                </div>

                <div className="fourth">
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                  <span className="event" onClick={changeToggle}>21</span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>
                </div>

                <div className="fifth">
                  <span className="active">25</span>
                  <span>26</span>
                  <span>27</span>
                  <span>28</span>
                  <span className="event" onClick={changeToggle}>29</span>
                  <span>30</span>
                  <span>31</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyCalendar;
