import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import "./Create.css";

export default function Library() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper c-wrapper">
        <CreateSidebar />
        <div className="c-content degree-wrapper">
          <h1>LIBRARY</h1>
          <div className="degree-btns justifyBtns">
            <div className="flex-end">
            <button>ADD MORE</button>
            </div>
          </div>

          <div className="users-table library-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>UNIQUE ID</th>
                <th>AUTHOR NAME</th>
                <th>BOOK NAME</th>
                <th>REG DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>AA001</td>
                <td>Ramaiah</td>
                <td>THINK AND GROW RICH</td>
                <td>22 AUG 2020</td>
                <td className="underline">View</td>
              </tr>
              <tr>
                <td>1</td>
                <td>AA001</td>
                <td>Ramaiah</td>
                <td>THINK AND GROW RICH</td>
                <td>22 AUG 2020</td>
                <td className="underline">View</td>
              </tr>              <tr>
                <td>1</td>
                <td>AA001</td>
                <td>Ramaiah</td>
                <td>THINK AND GROW RICH</td>
                <td>22 AUG 2020</td>
                <td className="underline">View</td>
              </tr>              <tr>
                <td>1</td>
                <td>AA001</td>
                <td>Ramaiah</td>
                <td>THINK AND GROW RICH</td>
                <td>22 AUG 2020</td>
                <td className="underline">View</td>
              </tr>              <tr>
                <td>1</td>
                <td>AA001</td>
                <td>Ramaiah</td>
                <td>THINK AND GROW RICH</td>
                <td>22 AUG 2020</td>
                <td className="underline">View</td>
              </tr>              <tr>
                <td>1</td>
                <td>AA001</td>
                <td>Ramaiah</td>
                <td>THINK AND GROW RICH</td>
                <td>22 AUG 2020</td>
                <td className="underline">View</td>
              </tr>
            </tbody>
          </table>
        </div>
        
          </div>
      </div>
    </div>
  );
}
