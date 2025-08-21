import React from "react";

const SeatSelector = ({ selectedSeats, handleSeatToggle }) => {
  const seats = ["A1", "A2", "A3", "B1", "B2", "B3"];

  return (
    <div>
      <h3>Select Seats:</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => handleSeatToggle(seat)}
            style={{
              padding: "10px",
              background: selectedSeats.includes(seat) ? "green" : "lightgray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelector;
