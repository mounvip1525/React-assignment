import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import "./Create.css";

export default function Sports() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper c-wrapper">
        <CreateSidebar />
        <div className="c-content sports-content">
          <div className="degree-box">
            <h3>SPORTS</h3>
            <div>
              <input type="text" name="did" placeholder="ENTER UNIQUE ID" />
              <button>ADD</button>
              {/* <ExpandMoreIcon /> */}
            </div>
          </div>
          <table>
            <tr>
              <th>#</th>
              <th>UNIQUE ID</th>
              <th>GAME NAME</th>
              <th>INTER</th>
              <th>INTRA</th>
              <th>ACTION</th>
            </tr>
            <tbody>
              <tr>
                <td>1</td>
                <td>BB001</td>
                <td>CRICKET</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB002</td>
                <td>BASKETBALL</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB003</td>
                <td>FOOTBALL</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB004</td>
                <td>VOLLEYBALL</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
                    <ClearIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>BB005</td>
                <td>KHO KHO</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div>
                    <p className="underline">VIEW</p>
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
