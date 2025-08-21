import React, { useState } from "react";
import SeatSelector from "./SeatSelector";
import Summary from "./Summary";

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmed, setConfirmed] = useState(false);

  const ticketPrice = 150;
  const movie = { title: "Inception", timing: "7:00 PM", price: ticketPrice };

  const handleSeatToggle = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const confirmBooking = () => {
    if (selectedSeats.length > 0) {
      setConfirmed(true);
    } else {
      alert("Please select at least one seat before confirming.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎟️ Movie Ticket Booking</h1>
      <h2>{movie.title} - {movie.timing}</h2>

      <SeatSelector
        selectedSeats={selectedSeats}
        handleSeatToggle={handleSeatToggle}
      />

      <Summary
        movie={movie}
        selectedSeats={selectedSeats}
        confirmed={confirmed}
      />

      {!confirmed && (
        <button
          onClick={confirmBooking}
          style={{ marginTop: "15px", padding: "10px", cursor: "pointer" }}
        >
          Confirm Booking
        </button>
      )}

      {confirmed && <h3 style={{ color: "green" }}>✅ Booking Confirmed!</h3>}
    </div>
  );
};

export default App;
