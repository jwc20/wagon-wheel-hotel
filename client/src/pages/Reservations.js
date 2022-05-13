import { useEffect, useState } from "react";
import ReservationList from "../components/ReservationList";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Reservations() {
  const [reservation, setReservation] = useState([]);
  const [openModal, setOpenModal] = useState("none");
  const open = () => setOpenModal(true);
  const close = () => setOpenModal("none");

  const [guest_id, setGuestID] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [total_price, setTotalPrice] = useState(0);



  function handleSubmit(e) {
    e.preventDefault();
    const reservation = {
      guest_id: guest_id,
      start_date: start_date,
      end_date: end_date,
      total_price: total_price,
    };
    fetch("/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
      .then((r) => r.json())
      .then(setReservation);
  }

  return (
    <div>
      <h1>Reservations</h1>
      <ReservationList />

      <button onClick={() => setOpenModal("reserve")}>Create reservation</button>

      {/* Dialog */}
      <Dialog aria-label="Reservation form" isOpen={openModal === "reserve"}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>

        <h1>Reserve</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="integer"
              name="guest_id"
              placeholder="Guest name"
              required
              onChange={(e) => setGuestID(e.target.value)}
            />
          </div>
          <div>
            <input
              type="date"
              name="start_date"
              placeholder="Start Date"
              required
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <input
              type="date"
              name="end_date"
              placeholder="End Date"
              required
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <input
              type="decimal"
              name="total_price"
              placeholder="Total Price"
              required
              onChange={(e) => setTotalPrice(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => setOpenModal("none")}>Close</button>
      </Dialog>
    </div>
  );
}

export default Reservations;
