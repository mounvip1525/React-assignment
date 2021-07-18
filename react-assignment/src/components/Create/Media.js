import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import "./Create.css";

export default function Media() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper c-wrapper">
        <CreateSidebar />
        <div className="c-content degree-wrapper">
          <h1>MEDIA</h1>
          <div className="degree-btns justifyBtns">
            <div className="flex">
            <button>ENGINEERING</button>
            <button>COMMERCE</button>
            </div>
          </div>
          <div className="select-box media-selects">
              <select value="DEPARTMENT">
                  <option value="option1">CSE</option>
                  <option value="option2">ECE</option>
                  <option value="option3">MECH</option>
                  <option value="option4">IEEE</option>
                  <option value="option5">CIVIL</option>
                  <option value="option6">IS</option>
              </select>
              <select value="SEM 1">
                  <option value="option1">SEM I</option>
                  <option value="option2">SEM II</option>
                  <option value="option3">SEM III</option>
                  <option value="option4">SEM IV</option>
                  <option value="option5">SEM V</option>
                  <option value="option6">SEM VI</option>
                  <option value="option7">SEM VII</option>
                  <option value="option8">SEM VIII</option>
              </select>
              <select value="MATHS">
                  <option value="option1">SCIENCE</option>
                  <option value="option2">ENGLISH</option>
                  <option value="option3">SOCIAL</option>
                  <option value="option4">EVS</option>
                  <option value="option5">HINDI</option>
              </select>
          </div>
          <div className="degree-box media-box">
                <h3>CHAPTERS</h3>
              {/* <ExpandMoreIcon /> */}
          </div>
          <table>
            <tr>
              <th>#</th>
              <th>CHAPTERS</th>
              <th>TITLE</th>
              <th>FILES</th>
            </tr>
            <tbody>
              <tr>
                <td>1</td>
                <td>CHAPTER 1</td>
                <td>NUMBERS</td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>CHAPTER 2</td>
                <td>ALPHABETS</td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                  </div>
                </td>
              </tr>              <tr>
                <td>1</td>
                <td>CHAPTER 3</td>
                <td>ALGEBRA</td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                  </div>
                </td>
              </tr>              <tr>
                <td>1</td>
                <td>CHAPTER 1</td>
                <td>TRIGNOMETRY</td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                  </div>
                </td>
              </tr>              <tr>
                <td>1</td>
                <td>CHAPTER 1</td>
                <td>DECIMALS</td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
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
