import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ enrolledCourses, handleEnroll }) => {
  const courses = [
    { id: 1, title: "React Basics", author: "John Doe", duration: "6h" },
    { id: 2, title: "Advanced JavaScript", author: "Jane Smith", duration: "8h" },
    { id: 3, title: "Node.js API Development", author: "Alex Brown", duration: "5h" },
  ];

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isEnrolled={!!enrolledCourses.find((c) => c.id === course.id)}
          handleEnroll={handleEnroll}
        />
      ))}
    </div>
  );
};

export default CourseList;
