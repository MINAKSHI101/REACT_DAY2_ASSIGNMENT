import React from "react";

function WaterTracker({ water, updateWater }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10 }}>
      <h3>💧 Water</h3>
      <p>{water} glasses</p>
      <button onClick={() => updateWater(water + 1)}>+1 Glass</button>
    </div>
  );
}

export default WaterTracker;
