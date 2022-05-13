import { useEffect, useState } from "react";
import RoomList from "../components/RoomList";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  return (
    <div>
      <h1>Rooms</h1>
      <RoomList />
    </div>
  );
}

export default Rooms;
