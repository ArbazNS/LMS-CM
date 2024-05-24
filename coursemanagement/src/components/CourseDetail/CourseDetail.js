import React from "react";
import { useParams } from "react-router-dom";
import { FaClock, FaStar } from "react-icons/fa"; // Importing icons for duration and level
import GoToBackPageButton from "../../basic_componenrts/GoToBackPageButton";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { title } = useParams();

  const course = {
    title,
    overview: "This course provides an introduction to React, a popular JavaScript library for building user interfaces.React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    duration: "10 hours", // Added course duration
    level: "Beginner", // Added course level
    content: [
      "Introduction to React",
      "Components and Props",
      "State and Lifecycle",
      "Handling Events",
      "Conditional Rendering",
      "Lists and Keys",
      "Forms",
      "Lifting State Up",
      "Composition vs Inheritance",
      "Thinking in React",
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
      bio: "Arbaz is a seasoned software engineer with over 10 years of experience in web development and a passion for teaching. Specialize in Front-End Web Development with a focus on cybersecurity and experience as a Trainer, dedicated to realizing your digital ambitions while prioritizing robust security measures. With extensive experience crafting tailored websites for businesses of all sizes and developing innovative tech products, I possess the technical expertise to enhance your online presence. Outside of my professional endeavors, I am also a passionate trainer, sharing my knowledge and skills with others as a hobby. Whether it's in the realm of technology or related fields, I enjoy empowering individuals and teams to reach their full potential. By integrating cybersecurity principles into every stage of development, I deliver scalable, high-performance, and reliable products that safeguard your data. Let's work together to create something exceptional that exceeds your expectations and sets new benchmarks for digital excellence.",
      image: "/arbaz.jpg", // Replace with the actual URL of the image
    },
    thumbnail: "https://binaryinformatics.com/wp-content/uploads/2023/06/ReactJS-jpg.webp", // Replace with the actual URL of the thumbnail image
    price: 1500, // Added course price
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h1 className="card-title">{course.title}</h1>
              <p className="card-text" style={{ textAlign: "justify" }}>{course.overview}</p>
              <div className="course-meta mt-3 d-flex align-items-center">
                <span className="badge bg-primary text-light me-2">
                  <FaClock className="me-1" /> {course.duration}
                </span>
                <span className="badge bg-success text-light">
                  <FaStar className="me-1" /> {course.level}
                </span>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="thumbnail">
                <img src={course.thumbnail} alt="Course Thumbnail" className="img-fluid rounded" />
              </div>
              <div className="price-enroll-container mt-3">
                <span className="course-price">₹{course.price}</span>
                <button className="btn btn-primary enroll-button ml-2">
                  <span className="material-symbols-outlined">school</span>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          <h2 className="mt-4">Course Content</h2>
          <ul className="list-group list-group-flush">
            {course.content.map((item, index) => (
              <li key={index} className="list-group-item">
                {index + 1}. {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-4">What You Will Learn</h2>
          <ul className="list-group list-group-flush">
            {course.whatYouWillLearn.map((item, index) => (
              <li key={index} className="list-group-item">
                {index + 1}. {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-4">Instructor</h2>
          <div className="instructor-profile d-flex align-items-start">
            <div className="text-center">
              <img src={course.instructor.image} alt={course.instructor.name} className="profile-image" />
              <p className="card-text mt-2 ml-2"><strong>{course.instructor.name}</strong></p>
            </div>
            <div className="ml-3">
              <p className="card-text" style={{ textAlign: "justify" }}>{course.instructor.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <GoToBackPageButton />
      </div>
    </div>
  );
};

export default CourseDetail;
