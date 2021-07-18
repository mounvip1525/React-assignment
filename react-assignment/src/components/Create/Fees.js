import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import './Create.css'

export default function Fees() {
    return (
        <div className="wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper c-wrapper">
            <CreateSidebar />
            <div className="c-content">
  hi fees
            </div>
        </div>
      </div>
    )
}
