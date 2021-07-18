import React , {useState} from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Create.css";

export default function Create() {
    const [school,setSchool] = useState(true)
    const handleChange = (e) => {
        (e.target.value !== "school") ? setSchool(false) : setSchool(true)
    }
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <div className="create-wrapper">
          <select onChange={handleChange}>
            <option value="school">SCHOOL</option>
            <option value="college">COLLEGE</option>
          </select>
          {school ? <h2>CREATE SCHOOL ID</h2> : <h2>CREATE COLLEGE ID</h2>}
          <div className="create-box">
            <div>
              {school ? <h4>SCHOOL UNIQUE ID</h4> : <h4>COLLEGE UNIQUE ID</h4>}
              <p className="create-left">AA001</p>
            </div>
            <div>
              <h4>NAME</h4>
              <input type="text" name="name"  className="create-left" placeholder="Ramaiah University" />
            </div>
            <div>
              <h4>ADDRESS</h4>
              <textarea type="text" name="name"  className="create-left"/>
            </div>
            <div>
              <h4>CONTACT NO</h4>
              <input type="text" name="name"  className="create-left"/>
            </div>
            {school ? 
                        <div>
                        <h4>MEDIUM</h4>
                        <div className="create-left">
                          <div>
                            <input type="checkbox" id="state" />
                            <label for="state">STATE</label>
                          </div>
                          <div>
                            <input type="checkbox" id="cbse" />
                            <label for="cbse">CBSE</label>
                          </div>
                          <div>
                            <input type="checkbox" id="icse" />
                            <label for="icse">ICSE</label>
                          </div>
                        </div>
                      </div> :
                      <div>
                          <h4>DEGREE</h4>
                          <select>
                              <option value="option1">ENGINEERING</option>
                              <option value="option2">MEDICAL</option>
                              <option value="option3">COMMERCE</option>
                              <option value="option4">ARTS</option>
                          </select>
                    </div>}
            <div>
              <h4>ATTENDANCE FREQUENCY</h4>
              <input
                className="attendance-box"
                type="text"
                name="attendance"
                placeholder="2"
               />
            </div>
            <Link to="/classes"><button>CREATE</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
