import React from "react";

function StepsTracker({ steps, updateSteps }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <h3>🚶 Steps</h3>
      <p>{steps} steps</p>
      <button onClick={() => updateSteps(steps + 500)}>+500 Steps</button>
    </div>
  );
}

export default StepsTracker;
