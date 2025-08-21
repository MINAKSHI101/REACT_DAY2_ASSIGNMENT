import React from "react";

function Summary({ selectedRoom, checkIn, checkOut, totalPrice }) {
  return (
    <div style={{ marginTop: 20, border: "1px solid black", padding: 10 }}>
      <h2>📋 Booking Summary</h2>
      {selectedRoom ? (
        <div>
          <p>Room: {selectedRoom.type}</p>
          <p>Check-in: {checkIn || "Not selected"}</p>
          <p>Check-out: {checkOut || "Not selected"}</p>
          <p>Total Price: ₹{totalPrice}</p>
        </div>
      ) : (
        <p>No room selected</p>
      )}
    </div>
  );
}

export default Summary;
