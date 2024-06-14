import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaClock, FaStar } from "react-icons/fa"; 
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import GoToBackPageButton from "../basic_componenrts/GoToBackPageButton.js";
import "./CourseDetail.css";
import Sidebar from "../SidbarComp/Sidebar.js";
import { Container, Row, Col } from 'react-bootstrap';

const CourseDetail = () => {
  const { title } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const course = {
    title,
    overview: "This course provides an introduction to React, a popular JavaScript library for building user interfaces.React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    duration: "10 hours",
    level: "Beginner",
    content: [
      {
        name: "Introduction to React",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGZmleO-ud3Quc7vcByoeBdmWo4hG-pONrRgf9VENhA&s",
      },
      {
        name: "Components and Props",
        thumbnail: "https://cdn.educba.com/academy/wp-content/uploads/2020/03/React-Components.jpg",
      },
      {
        name: "State and Lifecycle",
        thumbnail: "https://magecomp.com/blog/wp-content/uploads/2022/10/ReactJS-Understanding-State-and-Lifecycle-1024x512.png",
      },
      {
        name: "Handling Events",
        thumbnail: "https://magecomp.com/blog/wp-content/uploads/2022/12/ReactJS-Handling-Events-with-Example.png",
      },
      {
        name: "Introduction to React",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGZmleO-ud3Quc7vcByoeBdmWo4hG-pONrRgf9VENhA&s",
      },
      {
        name: "Components and Props",
        thumbnail: "https://cdn.educba.com/academy/wp-content/uploads/2020/03/React-Components.jpg",
      },
      
    ],
    whatYouWillLearn: [
      "Understand the fundamental concepts of React",
      "Build reusable components",
      "Manage state in a React application",
      "Handle events and user inputs",
      "Perform conditional rendering",
      "Work with lists and forms",
    ],
    instructor: {
      name: "Arbaz Shrirangapattan",
      bio: "Arbaz is a seasoned software engineer with over 10 years of experience in web development and a passion for teaching. Specializes in Front-End Web Development with a focus on cybersecurity and experience as a Trainer, dedicated to realizing your digital ambitions while prioritizing robust security measures. With extensive experience crafting tailored websites for businesses of all sizes and developing innovative tech products, I possess the technical expertise to enhance your online presence. Outside of my professional endeavors, I am also a passionate trainer, sharing my knowledge and skills with others as a hobby",
      image: "/arbaz.jpg",
    },
    thumbnail: "https://binaryinformatics.com/wp-content/uploads/2023/06/ReactJS-jpg.webp",
    price: 1500,
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, course.content.length - 4));
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
      <div className="card course-card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="course-header" style={{ backgroundImage: `url(${course.thumbnail})` }}>
                <div className="course-header-content">
                  <h1 className="card-title">{course.title}</h1>
                  <p className="card-text" style={{ textAlign: "justify", color: "white" }}>{course.overview}</p>
                  <div className="course-meta mt-3 d-flex align-items-center justify-content-between">
                    <div>
                      <span className="badge bg-primary text-light me-2">
                        <FaClock className="me-1" /> {course.duration}
                      </span>
                      <span className="badge bg-success text-light">
                        <FaStar className="me-1" /> {course.level}
                      </span>
                    </div>
                    <div className="price-enroll-container">
                      <span className="course-price text-white">₹{course.price}</span>
                      <button className="btn btn-primary enroll-button ml-2">
                        <span className="material-symbols-outlined">Edit</span>
                        Edit Course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-4">Course Content</h2>
          <div className="course-content-carousel position-relative">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={handlePrevClick}
              disabled={currentIndex === 0}
            >
              <IoArrowBackCircle size={30} />
            </button>
            <div className="carousel-container">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {course.content.map((lesson, index) => (
                  <div key={index} className="carousel-card">
                    <div className="card mb-3 course-card">
                      <img src={lesson.thumbnail} className="card-img-top" alt={lesson.name} />
                      <div className="card-body">
                        <h5 className="card-title course-card-title">{lesson.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNextClick}
              disabled={currentIndex >= course.content.length - 4}
            >
              <IoArrowForwardCircle size={30} />
            </button>
          </div>

          <h2 className="mt-4">What You Will Learn</h2>
          <div className="what-you-will-learn">
            {course.whatYouWillLearn.map((item, index) => (
              <div key={index} className="learn-item">
                <div className="learn-circle">{index + 1}</div>
                <span className="learn-text">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="mt-4">Instructor</h2>
          <div className="instructor-profile d-flex align-items-start">
            <div className="text-center">
              <img src={course.instructor.image} alt={course.instructor.name} className="profile-image" />
              <p className="card-text mt-2 ml-2"><strong>{course.instructor.name}</strong></p>
            </div>
            <div className="ml-3">
              <p className="card-text"><strong>Skills: Front-End Web Development, Cybersecurity  </strong></p>
              <p className="card-text"><strong>Experience: Over 10 years of experience in web development and teaching. </strong></p> 
              <p className="card-text instructor-bio">{course.instructor.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <GoToBackPageButton />
      </div>
    </div>
    </>
  );
};

export default CourseDetail;
