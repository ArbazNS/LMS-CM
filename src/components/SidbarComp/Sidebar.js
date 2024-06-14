import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column flex-shrink-0 p-3"
      style={{ width: "280px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4 fw-bolder">Bizplus4you</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <a href="#" className="nav-link" aria-current="page">
            <span class="material-symbols-outlined">collections_bookmark</span>
            Courses
          </a>
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span class="material-symbols-outlined">Analytics</span>
            Analytics
          </a>
        </li>
        {/* Other nav items */}
      </ul>
      {/* <hr />
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="profiletoggle">
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          Arbaz Shrirangapattan bhai
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" className="dropdown-item">
            <span class="material-symbols-outlined">person</span>Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4" className="dropdown-item">
            <span class="material-symbols-outlined">logout</span>Sign out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </div>
  );
};

export default Sidebar;
