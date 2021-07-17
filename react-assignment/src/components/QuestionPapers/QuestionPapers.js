import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./QuestionPapers.css";
import pdf from "../../Assets/pdf.png";

export default function QuestionPapers() {
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <h1>QUESTION PAPERS</h1>
        <div className="qp-selects">
          <select>
            <option value="option1">STATE</option>
          </select>
          <select>
            <option value="option1">YEAR</option>
          </select>
          <select>
            <option value="option1">CLASS X</option>
          </select>
          <select>
            <option value="option1">SUBJECT</option>
          </select>
          <button>SEARCH</button>
        </div>
        <div className="qp-flex">
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>TERM TEST 1</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>TERM TEST 2</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>TERM TEST 3</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>TERM TEST 1</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>TERM TEST 2</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>TERM TEST 3</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>TERM TEST 1</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>EXAM 1</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>EXAM 2</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>EXAM 3</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>EXAM 4</h4>
          </div>
          <div>
            <div>
              <p>DOWNLOAD</p>
              <img src={pdf} alt="pdf" />
            </div>
            <h4>EXAM 1</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
