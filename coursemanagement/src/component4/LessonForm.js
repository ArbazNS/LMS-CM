// LessonForm.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import GoToBackPageButton from "../basic_componenrts/GoToBackPageButton";

const LessonForm = ({ onSubmit, onCancel }) => {
  const [lessonData, setLessonData] = useState({
    title: "",
    content: "",
    video: null,
    attachments: [],
    quizzes: [],
    moduleId: "", // Assuming lessons are categorized into modules
    markAsFree: false, // Assuming a checkbox to mark lesson as free
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setLessonData({
      ...lessonData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setLessonData({ ...lessonData, attachments: files });
  };

  const handleAddQuiz = () => {
    // Add quiz logic here
    // For example:
    // const newQuiz = { question: '', options: [], answer: '' };
    // setLessonData({ ...lessonData, quizzes: [...lessonData.quizzes, newQuiz] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onSubmit function to save lesson data
    onSubmit(lessonData);
    // Clear form fields after submission
    setLessonData({
      title: "",
      content: "",
      video: null,
      attachments: [],
      quizzes: [],
      moduleId: "",
      markAsFree: false,
    });
  };

  const handleAddAnotherLesson = () => {
    setLessonData({
      title: "",
      content: "",
      video: null,
      attachments: [],
      quizzes: [],
      moduleId: "",
      markAsFree: false,
    });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Create/Edit Lesson</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={lessonData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Content</label>
          <textarea
            className="form-control"
            name="content"
            value={lessonData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Upload Video</label>
          <input
            type="file"
            className="form-control"
            name="video"
            accept="video/*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Attachments</label>
          <input
            type="file"
            className="form-control"
            name="attachments"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            style={{ border: "2px solid #427D9D" }}
            type="checkbox"
            className="form-check-input"
            name="markAsFree"
            checked={lessonData.markAsFree}
            onChange={handleChange}
          />
          <label className="ms-3">Mark as Free</label>
        </div>
        <div className="form-group mb-3">
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={handleAddQuiz}
          >
            Add Quiz
          </button>
        </div>
        <div className="form-group mb-3">
         
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddAnotherLesson}
          >
            {" "}
            Save & Add Another Lesson
          </button>
          

          <Link
            to="/lessonmanagement"
            style={{ textDecoration: "none", color: "black" }}
          >
            <button type="submit" className="btn btn-primary mr-2">
              Save
            </button>
          </Link>
          
        </div>
      </form>
    </div>
  );
};

export default LessonForm;
