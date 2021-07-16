import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './QuestionPapers.css'

export default function QuestionPapers() {
    return (
        <div className="wrapper">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="content-wrapper">
                <h1>QUESTION PAPERS</h1>
            </div>
        </div>
    )
}
