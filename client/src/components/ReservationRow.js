import { CTable } from "@coreui/react";

function ReservationRow({ reservation }) {
  return (
    <tr>
      <td>{reservation.guest_id}</td>
      <td>{reservation.room_id}</td>
      <td>{reservation.start_date}</td>
      <td>{reservation.end_date}</td>
      <td>{reservation.price}</td>
    </tr>
  );
}

export default ReservationRow;
