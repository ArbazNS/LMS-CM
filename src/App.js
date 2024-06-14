import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Courselist from './components/Course_list_Page/Courselist';
import Courseedit from './components/Course_Edit_Page/Courseedit';
import CourseAddForm from './components/Course_Addform/Courseaddform';
import LessonManagementPage from './components/Lesson_Managment/LessonManagementPage';
import LessonList from './components/Lesson_Managment/LessonList';
import LessonForm from './components/Lesson_Managment/LessonForm';
import Coursedetail from './components/Course_Detail_Page/CourseDetail';
import {Route, Router, Routes } from 'react-router-dom';



const App = () => {
  return (
   <>
        <Routes>
        <Route path='/' element={<Courselist />}/>
        <Route path='/courseaddform' element={<CourseAddForm />} />
        <Route path='/courseedit' element={<Courseedit />} />
        <Route path='/lessonmanagement' element={<LessonManagementPage />} />
        <Route path='/lessonlist' element={<LessonList />} />
        <Route path='/lessonform' element={<LessonForm />} />
        <Route path="/coursedetail/:title" element={<Coursedetail />} />
      </Routes>
   </>
  );
};

export default App;

