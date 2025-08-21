import React from "react";
import RoomCard from "./RoomCard";

function RoomList({ rooms, setSelectedRoom }) {
  return (
    <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} setSelectedRoom={setSelectedRoom} />
      ))}
    </div>
  );
}

export default RoomList;
