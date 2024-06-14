import React, { useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./courselist.css";
import Coursenav from "../Coursenav/Coursenav";
import Sidebar from "../SidbarComp/Sidebar";
import { Container, Row, Col } from 'react-bootstrap';

const Courselist = () => {
  const initialCourses = [
    { title: "Course 1", price: "$199", status: "Published", category: "Computer Science" },
    { title: "Course 2", price: "$199", status: "Published", category: "Information Science" },
    { title: "Course 3", price: "$199", status: "Published", category: "AI and ML" },
    { title: "Course 4", price: "$199", status: "Published", category: "Computer Science" },
    { title: "Course 5", price: "$199", status: "Published", category: "Information Science" },
    { title: "Course 6", price: "$199", status: "Published", category: "AI and ML" },
    { title: "Course 7", price: "$199", status: "Published", category: "Computer Science" },
    { title: "Course 8", price: "$199", status: "Published", category: "Information Science" },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [badgeStates, setBadgeStates] = useState(initialCourses.map(course => course.status));
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("None");

  const handleBadgeClick = (index) => {
    const newBadgeStates = [...badgeStates];
    newBadgeStates[index] =
      newBadgeStates[index] === "Published" ? "Unpublish" : "Published";
    setBadgeStates(newBadgeStates);
  };

  const handleDeleteClick = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
    const newBadgeStates = newCourses.map(course => course.status);
    setBadgeStates(newBadgeStates);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  const filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
          <Sidebar />
          </Col>
          <Col>
            <Coursenav />
          </Col>
        </Row>
      </Container>
      <div className="filter-container" style={{ marginLeft: "320px", marginBottom: "20px", display: "flex", alignItems: "center" }}>
        <Dropdown onSelect={handleCategoryChange}>
          <Dropdown.Toggle className="custom-toggle dropdown-button" variant="primary" id="dropdown-basic">
            {selectedCategory}
            <span className="material-symbols-outlined">expand_more</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Computer Science">Computer Science</Dropdown.Item>
            <Dropdown.Item eventKey="Information Science">Information Science</Dropdown.Item>
            <Dropdown.Item eventKey="AI and ML">AI and ML</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <ButtonGroup>
          <Button
            variant={sortOption === "Trending" ? "primary" : "secondary"}
            onClick={() => handleSortOptionChange("Trending")}
          >
            Trending
          </Button>
          <Button
            variant={sortOption === "Most Viewed" ? "primary" : "secondary"}
            onClick={() => handleSortOptionChange("Most Viewed")}
          >
            Most Viewed
          </Button>
        </ButtonGroup>
      </div>
      <h1 className="" style={{ marginLeft: "320px" }}>
        Course Management
      </h1>
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
          {filteredCourses.map((course, index) => (
            <tr key={index}>
              <td scope="row">{course.title}</td>
              <td>{course.price}</td>
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
                    <Dropdown.Item className="dropdown-item">
                      <Link
                        to={`/coursedetail/${course.title}`}
                        className="link"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <span className="material-symbols-outlined icon">visibility</span>
                        <span className="text">View Course</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item">
                      <Link
                        to="/courseedit"
                        className="link"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <span className="material-symbols-outlined icon">edit</span>
                        <span className="text">Edit</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDeleteClick(index)}
                      className="dropdown-item"
                    >
                      <span className="material-symbols-outlined icon">delete</span>
                      <span className="text">Delete</span>
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
