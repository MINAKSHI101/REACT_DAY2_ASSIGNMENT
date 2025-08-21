import React from "react";

function RoomCard({ room, setSelectedRoom }) {
  return (
    <div
      style={{ border: "1px solid gray", padding: 10, cursor: "pointer" }}
      onClick={() => setSelectedRoom(room)}
    >
      <h3>{room.type}</h3>
      <p>₹{room.price} / night</p>
    </div>
  );
}

export default RoomCard;
