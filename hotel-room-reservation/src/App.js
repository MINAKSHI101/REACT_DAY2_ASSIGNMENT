import React, { useState } from "react";
import RoomList from "./components/RoomList";
import Summary from "./components/Summary";

const rooms = [
  { id: 1, type: "Single Room", price: 1200 },
  { id: 2, type: "Double Room", price: 2000 },
  { id: 3, type: "Suite", price: 3500 }
];

function App() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);

  const days =
    checkIn && checkOut
      ? (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
      : 0;

  const totalPrice = selectedRoom ? selectedRoom.price * days : 0;

  return (
    <div style={{ padding: 20 }}>
      <h1>🏨 Hotel Room Reservation</h1>
      <div>
        <label>Check-in: </label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        <br />
        <label>Check-out: </label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>
      <RoomList rooms={rooms} setSelectedRoom={setSelectedRoom} />
      <Summary selectedRoom={selectedRoom} checkIn={checkIn} checkOut={checkOut} totalPrice={totalPrice} />
    </div>
  );
}

export default App;
