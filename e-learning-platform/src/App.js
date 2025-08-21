import React, { useState } from "react";
import CourseList from "./CourseList";

const App = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, { ...course, progress: 0 }]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 E-Learning Platform</h1>
      <CourseList enrolledCourses={enrolledCourses} handleEnroll={handleEnroll} />

      <h2>My Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled yet</p>
      ) : (
        <ul>
          {enrolledCourses.map((course) => (
            <li key={course.id}>
              {course.title} - Progress: {course.progress}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
