import axios from "axios";
import React, { useState } from "react";

export default function Booking_Form({ setPassenger, setBooked }) {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState();
  const [loading,setLoading]=useState(false)

  function bookSeats(e) {
    e.preventDefault();
    setLoading(true)
    axios
      .patch("https://naughty-erin-tie.cyclic.app//seats/reserve", { seats })
      .then((res) => {
        console.log(res.data);
        setPassenger(name);
        setBooked(res.data);
        alert("Successfully reserved");
      })
      .catch((err) => {
        if (!+seats) alert("Please enter proper number of seats");
        else if (+seats > 7) alert("You can book upto 7 seats at once");
        else alert('Seat not available');
      })
      .finally(()=>setLoading(false));
      
  }

  return (
    <form
      onSubmit={bookSeats}
      style={{
        padding: "1%",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        margin: "3% auto",
        width: "30%",
      }}
    >
      <h3>RESERVATION FORM</h3>
      <input
        placeholder="Name"
        required
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          textAlign: "center",
          border: "1px solid gainsboro",
          margin: "10px auto",
          width: "100%",
          padding: "10px 0px",
          fontSize: "20px",
          borderRadius: "4px",
        }}
      />
      <br />
      <input
        placeholder="Number of seats"
        required
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        style={{
          textAlign: "center",
          border: "1px solid gainsboro",
          margin: "10px auto",
          width: "100%",
          padding: "10px 0px",
          fontSize: "20px",
          borderRadius: "4px",
        }}
      />
      <br />
      <button
        type="submit"
        style={{
          color: "white",
          backgroundColor: "black",
          border: "1px solid gainsboro",
          margin: "10px auto",
          width: "100%",
          padding: "10px 3px",
          fontWeight: "bold",
          fontSize: "20px",
          borderRadius: "4px",
        }}
      >
        {loading?'loading...':'BOOK'}
      </button>
    </form>
  );
}
