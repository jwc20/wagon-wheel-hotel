import { useState, useEffect } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import {
  CCard,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardBody,
  CButton,
  CCol,
} from "@coreui/react";

function RoomCard({ room }) {
  const [openModal, setOpenModal] = useState("none");
  const open = () => setOpenModal(true);
  const close = () => setOpenModal("none");

  return (
    <div>
      <CCard className="h-100" style={{ width: "18rem" }}>
        {room.room_type === "basic" ? (
          <CCardImage orientation="top" src="https://i.imgur.com/HPWqqes.jpg" />
        ) : (
          <CCardImage orientation="top" src="https://i.imgur.com/0xBTIyF.jpg" />
        )}
        <CCardBody>
          <CCardTitle>{room.room_number}</CCardTitle>
          <CButton onClick={() => setOpenModal("modal")} href="#">
            Description
          </CButton>
        </CCardBody>
      </CCard>

      <Dialog aria-label="Room Modal" isOpen={openModal === "modal"}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <h1>{room.room_name}</h1>
        <p>Type: {room.room_type}</p>
        <p>Description: {room.description}</p>
        <p>Price: ${room.current_price}</p>
      </Dialog>
    </div>
  );
}

export default RoomCard;
