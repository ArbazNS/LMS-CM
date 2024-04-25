{/*course list page*/}
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./courselist.css";
import { Link } from 'react-router-dom';


const Courselist = () => {
  const initialBadgeState = [
    "Published",
    "Published",
    "Published",
    "Published",
    "Published",
    "Published",
    "Published",
    "Published",
  ];

  const [badgeStates, setBadgeStates] = useState(initialBadgeState);

  const handleBadgeClick = (index) => {
    const newBadgeStates = [...badgeStates];
    newBadgeStates[index] =
      newBadgeStates[index] === "Published" ? "Unpublish" : "Published";
    setBadgeStates(newBadgeStates);
  };

  

  const handleDeleteClick = (index) => {
  };

  return (
    <>
          <h1 className='' style={{marginLeft:'320px'}}>Course Manegment</h1>

      <table className="table Courselisttable table-hover">
        <thead>
          <tr>
            <th scope="col" className="tableheading">
              <div className="heading-content">
                <span>Title</span>
                <span className="material-symbols-outlined">swap_vert</span>
              </div>
            </th>
            <th scope="col" className="tableheading">
              <div className="heading-content">
                <span>Price</span>
                <span className="material-symbols-outlined">swap_vert</span>
              </div>
            </th>
            <th scope="col" className="tableheading">
              <div className="heading-content">
                <span>Status</span>
                <span className="material-symbols-outlined">swap_vert</span>
              </div>
            </th>
            <th scope="col" className="tableheading"></th>
          </tr>
        </thead>
        <tbody>
          {initialBadgeState.map((initialState, index) => (
            <tr key={index}>
              <td scope="row">Course {index + 1}</td>
              <td>$199</td>
              <td>
                <div className="badagebutton">
                  {badgeStates[index] === "Published" ? (
                    <span
                      className="badge rounded-pill bdageactvecolor"
                      onClick={() => handleBadgeClick(index)}
                    >
                      Published
                    </span>
                  ) : (
                    <span
                      className="badge rounded-pill text-bg-secondary"
                      onClick={() => handleBadgeClick(index)}
                    >
                      Unpublish
                    </span>
                  )}
                </div>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    className="custom-toggle"
                    variant="secondary"
                    id="dropdown-basic"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "black",
                    }}
                  >
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" >
                      <Link to="/courseedit" className="link" style={{ textDecoration: 'none', color: 'black' }}>
                        <span class="material-symbols-outlined ">edit</span>
                        Edit
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDeleteClick(index)} className="dropdown-item">
                      <span class="material-symbols-outlined">delete</span>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Courselist;
