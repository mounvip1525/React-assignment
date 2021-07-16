import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import Sidebar from "../Sidebar/Sidebar";
import "./Ranks.css";

export default function Ranks() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <h1>RANKS</h1>
        <div className="rank-header rank-main-header">
          <h3>Enter UID Of Classes to Compare</h3>
          <button>ADD</button>
        </div>
        <div className="ranks-box">
        <div className="rank-header">
          <h3>RAMAIAH UNIVERSITY</h3>
          <div className="input-box rank-input">
            <input placeholder="ENTER UNIQUE ID OF CLASS" name="exam-type" />
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
        <div className="ranks-box">
        <div className="rank-header">
          <h3>RAMAIAH UNIVERSITY</h3>
          <div className="input-box rank-input">
            <input placeholder="ENTER UNIQUE ID OF CLASS" name="exam-type" />
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
    </div>
  );
}
