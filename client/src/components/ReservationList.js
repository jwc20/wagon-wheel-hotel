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

  return (
    <div>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
            <CTableHeaderCell scope="col">Total Price</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        {reservations.map((reservation) => (
          <ReservationRow key={reservation.id} reservation={reservation} />
        ))}
      </CTable>
    </div>
  );
}

export default ReservationList;
