import React from "react";

export default function Booked({passenger,booked}) {
  return (
    booked.length!==0 && <div
      style={{
        padding: "1%",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        margin: "3% auto",
        width: "30%",
      }}
    >
      <h3>Booked Seats</h3>
      <table
        style={{
          width: "fit-content",
          margin: "auto",
          textAlign: "center",
          border: "1px solid gainsboro",
        }}
      >
        <thead>
          <th
            style={{
              width: "fit-content",
              margin: "auto",
              textAlign: "center",
              padding: "10px 30px",
              border: "1px solid gainsboro",
            }}
          >
            Passenger
          </th>
          <th
            style={{
              width: "fit-content",
              margin: "auto",
              textAlign: "center",
              padding: "10px 30px",
              border: "1px solid gainsboro",
            }}
          >
            Coach No.
          </th>
          <th
            style={{
              width: "fit-content",
              margin: "auto",
              textAlign: "center",
              padding: "10px",
              border: "1px solid gainsboro",
            }}
          >
           Row-Seat
          </th>
        </thead>
        <tbody>
          <td
            style={{
              width: "fit-content",
              margin: "auto",
              textAlign: "center",
              padding: "10px",
              border: "1px solid gainsboro",
            }}
          >
            {passenger}
          </td>
          <td
            style={{
              width: "fit-content",
              margin: "auto",
              textAlign: "center",
              padding: "10px",
              border: "1px solid gainsboro",
            }}
          >
            01
          </td>
          <td
            style={{
              width: "fit-content",
              margin: "auto",
              textAlign: "center",
              padding: "10px",
              border: "1px solid gainsboro",
            }}
          >
            {booked?.join(",")}
          </td>
        </tbody>
      </table>
    </div>
  );
}
