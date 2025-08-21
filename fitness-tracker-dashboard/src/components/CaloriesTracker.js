import React from "react";

function CaloriesTracker({ calories, updateCalories }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <h3>🔥 Calories</h3>
      <p>{calories} kcal</p>
      <button onClick={() => updateCalories(calories + 50)}>+50 kcal</button>
    </div>
  );
}

export default CaloriesTracker;
