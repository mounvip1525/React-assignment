import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Sidebar from "../Sidebar/Sidebar";
import "./Subjects.css";

export default function Subjects() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <div className="subjects-wrapper">
          <div className="subjects-sidebar">
            <h3>CLASSES</h3>
            <button className="subject-active">+</button>
            <button className="subject-active">PRE KG</button>
            <button>LKG</button>
            <button>UKG</button>
            <button>CLASS I</button>
            <button>CLASS II</button>
            <button>CLASS III</button>
            <button>CLASS IV</button>
            <button>CLASS V</button>
            <button>CLASS VI</button>
            <button>CLASS VII</button>
            <button>CLASS VII</button>
            <button>CLASS VIII</button>
            <button>CLASS IX</button>
            <button className="last-btn">CLASS X</button>
          </div>
          <div className="subjects-content">
            <div className="subjects-btns">
              <div>
                <select>
                  <option value="val1">Andra Pradesh</option>
                  <option value="val2">Karnatak</option>
                  <option value="val3">Maharastra</option>
                  <option value="val4">Tamil Nadu</option>
                  <option value="val5">Goa</option>
                  <option value="val6">Kerala</option>
                </select>
                <button>CBSE</button>
                <button>ICSE</button>
              </div>
              <button>ADD</button>
            </div>
            <h2>SUBJECTS</h2>
            <div className="subjects-table-wrapper">
              <div className="degree-box subjects-box">
                <h3>ADD SUBJECTS</h3>
                <div>
                  <input
                    type="text"
                    name="sid"
                    placeholder="ENTER SUBJECTS NAME"
                  />
                  <input type="text" name="ref" placeholder="REF." />
                  <button>ADD</button>
                  <ExpandMoreIcon />
                </div>
              </div>
              <table className="subject-table">
                <tr>
                  <th>#</th>
                  <th>UNIQUE ID</th>
                  <th>SUBJECT NAME</th>
                  <th>REF.</th>
                  <th>ACTION</th>
                </tr>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>BB001</td>
                    <td>ENGLISH</td>
                    <td>ENG</td>
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
                    <td>SCIENCE</td>
                    <td>SCI</td>
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
                    <td>MATHS</td>
                    <td>MAT</td>
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
                    <td>SOCIAL</td>
                    <td>SOC</td>
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
                    <td>HINDI</td>
                    <td>HIN</td>
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
        </div>
      </div>
    </div>
  );
}
