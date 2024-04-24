// LessonList.js
import React from 'react';

const LessonList = ({ lessons }) => {
  return (
    <div>
      <h2>Lessons</h2>
      <ul className="list-group">
        {lessons.map(lesson => (
          <li key={lesson.id} className="list-group-item">
            <div>{lesson.title}</div>
            {/* You can display other details of the lesson here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;
