import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Users.css'

export default function Users() {
    return (
        <div className="wrapper">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>
            <div className="content-wrapper users-wrapper">
                <h1>USERS</h1>
                <div className="users-header">
                <select>
                    <option value="option1">ALL</option>
                    <option value="option2">SCHOOL</option>
                    <option value="option3">COLLEGE</option>
                </select>
                <div>
                    <input type="text" name="uid" placeholder="ENTER UNIQUE ID / INSTITUTE NAME" />
                    <button>SEARCH</button>
                </div>
                </div>
                <div className="users-table">
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>UNIQUE ID</th>
                        <th>NAME</th>
                        <th>TYPE</th>
                        <th>ADDRESS</th>
                        <th>CONTACT NO</th>
                        <th>STRENGTH</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>AA001</td>
                            <td>Ramaiah University</td>
                            <td>SCHOOL</td>
                            <td>Kudlu road, Bangalore</td>
                            <td>9876768768</td>
                            <td>253 : 40</td>
                            <td className="underline">View</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>AA001</td>
                            <td>Ramaiah University</td>
                            <td>UNIVERSITY</td>
                            <td>Kudlu road, Bangalore</td>
                            <td>9876768768</td>
                            <td>253 : 40</td>
                            <td className="underline">View</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}
