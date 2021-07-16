import React from 'react'
import v1 from '../../Assets/institutions.png'
import v2 from '../../Assets/subject.png'
import v3 from '../../Assets/question.png'
import v4 from '../../Assets/rank.png'
import v5 from '../../Assets/user.png'
import v6 from '../../Assets/Vector.png'
import v7 from '../../Assets/degree.png'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <button className='grey-main-btn'>DASHBOARD</button>
            <div>
                <img src={v1} />
                <h3>INSTITUTIONS</h3>
            </div>
            <div>
                <img src={v2} />
                <h3>SUBJECT (S)</h3>
            </div>
            <div>
                <img src={v3} />
                <h3>QUESTION PAPERS</h3>
            </div>
            <div>
                <img src={v4} />
                <h3>RANKS</h3>
            </div>
            <div>
                <img src={v7} />
                <h3>DEGREE (C)</h3>
            </div>
            <div>
                <img src={v5} />
                <h3>USERS</h3>
            </div>
            <div>
                <img src={v6} />
                <h3>EXAM PATTERNS</h3>
            </div>
        </div>
    )
}
