import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import Sidebar from "../Sidebar/Sidebar";
import "./ExamPattern.css";

export default function ExamPatterns() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <h1>EXAM PATTERNS</h1>
        <div className="btn-container">
          <button className="btn-active">SCHOLL</button>
          <button>COLLEGE</button>
        </div>
        <div className="exam-header">
          <h3>EXAM TYPE</h3>
          <div className="input-box">
            <input placeholder="ENTER EXAM TYPE" name="exam-type" />
            <button>ADD</button>
          </div>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>EXAM NAME</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
              <td>TEST 1</td>
              <td>
                <div>
                  <ClearIcon />
                  <p>EDIT</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>TEST 1</td>
              <td>
                <div>
                  <ClearIcon />
                  <p>EDIT</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>ASSIGNMENT 1</td>
              <td>
                <div>
                  <ClearIcon />
                  <p>EDIT</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>TEST 1</td>
              <td>
                <div>
                  <ClearIcon />
                  <p>EDIT</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
