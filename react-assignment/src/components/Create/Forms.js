import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import ClearIcon from "@material-ui/icons/Clear";
import './Create.css'

export default function Forms() {
    return (
        <div className="wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper c-wrapper">
            <CreateSidebar />
            <div className="c-content degree-wrapper">
            <div className="content-wrapper degree-wrapper">
        <h1>FORMS</h1>
        <div className="flex justifyContent">
            <div>
            <input type="text" placeholder="ENTER TITLE"/>
            <button>SEARCH</button>
            </div>
            <button className="btn-active">CREATE NEW FORM</button>
        </div>
        <table className="form-table">
          <tr>
            <th>#</th>
            <th>TITLE</th>
            <th>VALID FROM</th>
            <th>VALID TILL</th>
            <th>MAXIMUM ENTRIES</th>
            <th>NO. OF ENTRIES</th>
            <th>ACTION</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
              <td>HACKATHON</td>
              <td>22 OCT 2021</td>
              <td>22 OCT 2312</td>
              <td>30</td>
              <td>30</td>
              <td>
                <div>
                  <p className="underline">VIEW</p>
                  <p className="underline">EDIT</p>
                  <p className="underline">DELETE</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
            </div>
        </div>
      </div>
    )
}
