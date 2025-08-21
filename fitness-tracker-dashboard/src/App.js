import React, { useState } from "react";
import StepsTracker from "./components/StepsTracker";
import CaloriesTracker from "./components/CaloriesTracker";
import WaterTracker from "./components/WaterTracker";
import Summary from "./components/Summary";

function App() {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>🏋️ Fitness Tracker Dashboard</h1>
      <div style={{ display: "flex", gap: 20 }}>
        <StepsTracker steps={steps} updateSteps={setSteps} />
        <CaloriesTracker calories={calories} updateCalories={setCalories} />
        <WaterTracker water={water} updateWater={setWater} />
      </div>
      <Summary steps={steps} calories={calories} water={water} />
    </div>
  );
}

export default App;
