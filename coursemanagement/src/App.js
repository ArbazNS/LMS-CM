import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/SidbarComp/Sidebar';
import Coursenav from './components/Coursenav/Coursenav';
import Courselist from './components/Courselist/Courselist';
import Courseedit from './component3/Courseedit';
import CourseAddForm from './component2/Courseaddform';
import LessonManagementPage from './component4/LessonManagementPage';
import LessonList from './component4/LessonList ';
import LessonForm from './component4/LessonForm';
import Coursedetail from './components/CourseDetail/CourseDetail';
import {Route, Router, Routes } from 'react-router-dom';



const App = () => {
  return (
   <>
    <Container fluid>
      <Row>
        <Col >
          <Sidebar />
        </Col>
      </Row>
    </Container>
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

