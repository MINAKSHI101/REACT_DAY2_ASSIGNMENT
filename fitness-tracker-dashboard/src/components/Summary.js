import React from "react";

function Summary({ steps, calories, water }) {
  return (
    <div style={{ marginTop: 20, border: "1px solid black", padding: 10 }}>
      <h2>📊 Daily Summary</h2>
      <p>Steps: {steps}</p>
      <p>Calories: {calories}</p>
      <p>Water: {water} glasses</p>
    </div>
  );
}

export default Summary;
