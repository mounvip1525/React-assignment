import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import CreateSidebar from "./CreateSidebar";
import "./Create.css";

export default function Classes() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper c-wrapper">
          <CreateSidebar />
          <div className="c-content">
hi classes
          </div>
      </div>
    </div>
  );
}
