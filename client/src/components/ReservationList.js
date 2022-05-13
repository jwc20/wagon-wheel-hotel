import { useEffect, useState } from "react";
import ReservationRow from "./ReservationRow";
import { CTable, CTableHead, CTableRow, CTableHeaderCell } from "@coreui/react";

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("/reservations")
      .then((r) => r.json())
      .then(setReservations);
  }, []);

  const reservationRow = reservations.map((reservation) => (
    <ReservationRow key={reservation.id} reservation={reservation} />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Guest ID</th>
            <th scope="col">Room ID</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>{reservationRow}</tbody>
      </table>
    </div>
  );
}

export default ReservationList;
