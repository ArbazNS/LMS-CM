import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './courseedit.css';
import { FiUpload } from 'react-icons/fi'; // Import upload icon from react-icons library
import { Link } from 'react-router-dom';
import GoToBackPageButton from '../basic_componenrts/GoToBackPageButton.js';
import Sidebar from '../SidbarComp/Sidebar.js';
import { Container, Row, Col } from 'react-bootstrap';
const CourseEditForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '', 
    category: '',
    chapters: [],
    price: '',
    resources: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call)
    console.log(formData);
  };

  return (
    <>
    <Container fluid>
        <Row>
          <Col>
          <Sidebar />
          </Col>
        </Row>
      </Container>
    <div className="container mt-5">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Course Title</label>
          <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Course Description</label>
          <textarea className="form-control" id="description" rows="3" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="CourseHighlights" className="form-label">Course Highlights</label>
          <textarea className="form-control" id="description" rows="3" name="coursehighlights" value={formData.coursehighlights} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Course Thumbnail
            <FiUpload className="upload-icon" /> {/* Added upload icon */}
          </label>
          <input type="file" className="form-control" accept="image/*" id="thumbnail" name="thumbnail" onChange={handleChange} /> {/* Changed type to 'file' */}
        </div>
        {/* <div className="mb-3">
          <label htmlFor="resources" className="form-label">
            Upload Resources
            <FiUpload className="upload-icon" /> 
          </label>
          <input type="file" className="form-control" id="resources" name="resources" onChange={handleChange} /> 
        </div> */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Course Category</label>
          <select className="form-select" id="category" name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="category1">Computer Scince</option>
            <option value="category2">Electrical Engineering</option>
            <option value="category3">Information Technology</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Course Price</label>
          <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
        </div>

        <div className="buttons-container">
          <GoToBackPageButton/>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type="button " className="btn btnaddnewcourse btn-primary">
              Cancel
            </button>
          </Link>
          <Link to="/lessonmanagement" style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btnaddnewcourse btn-primary">
              View Lessons
            </button>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default CourseEditForm;
