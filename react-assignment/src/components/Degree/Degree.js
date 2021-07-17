import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClearIcon from "@material-ui/icons/Clear";
import Sidebar from "../Sidebar/Sidebar";
import "./Degree.css";

export default function Degree() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper degree-wrapper">
        <h1>DEGREE</h1>
        <div className="degree-btns">
          <button>ENGINEERING</button>
          <button>MEDICAL</button>
          <button>COMMERCE</button>
          <button>ARTS</button>
          <button>DIPLOMA</button>
          <button>OTHERS</button>
        </div>
        <select>
          <option value="option1">UNDERGRADUATION</option>
          <option value="option2">MASTERS</option>
          <option value="option3">PHD</option>
        </select>
        <div className="degree-box">
          <h3>DEPARTMENT</h3>
          <div>
            <input type="text" name="did" placeholder="ENTER DEPARTMENT NAME" />
            <input type="text" name="surname" placeholder="SURNAME" />
            <select>
              <option value="option1">QUATERLY</option>
              <option value="option2">TRIMESTER</option>
              <option value="option3">SEMESTER</option>
            </select>
            <select>
              <option value="option1">1y</option>
              <option value="option2">2y</option>
              <option value="option3">3y</option>
              <option value="option4">4y</option>
              <option value="option5">5y</option>
              <option value="option6">6y</option>
              <option value="option7">7y</option>
              <option value="option8">8y</option>
            </select>
            <button>ADD</button>
            {/* <ExpandMoreIcon /> */}
          </div>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>UNIQUE ID</th>
            <th>DEPARTMENT NAME</th>
            <th>ACTION</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
              <td>BB001</td>
              <td>AE</td>
              <td>
                <div>
                  <p>VIEW</p>
                  <p>EDIT</p>
                  <ClearIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>BB002</td>
              <td>CSE</td>
              <td>
                <div>
                  <p>VIEW</p>
                  <p>EDIT</p>
                  <ClearIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>BB003</td>
              <td>ECE</td>
              <td>
                <div>
                  <p>VIEW</p>
                  <p>EDIT</p>
                  <ClearIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>BB004</td>
              <td>ME</td>
              <td>
                <div>
                  <p>VIEW</p>
                  <p>EDIT</p>
                  <ClearIcon />
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>BB005</td>
              <td>CIVIL</td>
              <td>
                <div>
                  <p>VIEW</p>
                  <p>EDIT</p>
                  <ClearIcon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
