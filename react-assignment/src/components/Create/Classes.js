import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import ClearIcon from "@material-ui/icons/Clear";
import "./Create.css";

export default function Classes() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper c-wrapper">
        <CreateSidebar />
        <div className="c-content degree-wrapper">
          <h1>CLASSES</h1>
          <h4>UG</h4>
          <div className="degree-btns justifyBtns">
            <div className="flex">
            <button>ENGINEERING</button>
            <button>COMMERCE</button>
            </div>
          <select>
            <option value="option1">2020</option>
            <option value="option2">2015</option>
            <option value="option3">2010</option>
            <option value="option3">2005</option>
            <option value="option3">2000</option>
            <option value="option3">1995</option>
            <option value="option3">1990</option>
          </select>
          </div>
          <div className="select">
            <select>
              <option value="option1">UG</option>
              <option value="option2">PG</option>
              <option value="option3">PHD</option>
            </select>
          </div>
          <div className="degree-box classes-box">
              <select>
                <option value="option1">AERONAUTICAL ENGINEERING</option>
                <option value="option2">COMPUTER SCIENCE ENGINEERING</option>
                <option value="option3">CIVIL ENGINEERING</option>
                <option value="option4">MECHANICAL ENGINEERING</option>
              </select>
              <button>ADD</button>
              {/* <ExpandMoreIcon /> */}
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
                <td className="underline">AE</td>
                <td>
                  <div>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB002</td>
                <td className="underline">CSE</td>
                <td>
                  <div>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB003</td>
                <td className="underline">ECE</td>
                <td>
                  <div>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB004</td>
                <td className="underline">ME</td>
                <td>
                  <div>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB005</td>
                <td className="underline">CIVIL</td>
                <td>
                  <div>
                    <ClearIcon />
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
