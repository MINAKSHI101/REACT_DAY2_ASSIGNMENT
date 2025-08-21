import React from "react";

const Summary = ({ movie, selectedSeats, confirmed }) => {
  const totalCost = selectedSeats.length * movie.price;

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>Booking Summary</h3>
      <p><strong>Movie:</strong> {movie.title}</p>
      <p><strong>Time:</strong> {movie.timing}</p>
      <p><strong>Selected Seats:</strong> {selectedSeats.join(", ") || "None"}</p>
      <p><strong>Total Cost:</strong> ₹{totalCost}</p>
      {confirmed && <p style={{ color: "green" }}>🎉 Enjoy your movie!</p>}
    </div>
  );
};

export default Summary;
