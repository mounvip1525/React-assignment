import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import './Create.css'

export default function ExamPatterns() {
    return (
        <div className="wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="content-wrapper c-wrapper">
            <CreateSidebar />
            <div className="c-content">
  hi exam pattern
            </div>
        </div>
      </div>
    )
}
