import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { CCardGroup } from "@coreui/react";

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/rooms")
      .then((r) => r.json())
      .then(setRooms);
  }, []);

  return (
    <div>
      <CCardGroup>
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </CCardGroup>
    </div>
  );
}

export default RoomList;
