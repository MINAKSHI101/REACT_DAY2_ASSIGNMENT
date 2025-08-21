import React from "react";

const CourseCard = ({ course, isEnrolled, handleEnroll }) => {
  return (
    <div style={{ border: "1px solid #aaa", margin: "10px", padding: "10px" }}>
      <h3>{course.title}</h3>
      <p>Author: {course.author}</p>
      <p>Duration: {course.duration}</p>

      {isEnrolled ? (
        <button disabled style={{ background: "gray", color: "white" }}>
          Already Enrolled
        </button>
      ) : (
        <button onClick={() => handleEnroll(course)}>Enroll</button>
      )}
    </div>
  );
};

export default CourseCard;
