import { useEffect, useState } from "react";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/hotel_rooms")
      .then((r) => r.json())
      .then(setRooms);
  }, []);

  return (
    <div>
      <h1>Rooms</h1>
      {rooms.map((room) => (
        <li key={room.id}>
          {room.room_name} {room.description} ${room.current_price}
        </li>
      ))}
    </div>
  );
}

export default Rooms;
