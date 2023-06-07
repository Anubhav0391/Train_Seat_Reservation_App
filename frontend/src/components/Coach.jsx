// import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Coach({coach,passenger,booked}) {
  

  return (
    <div
      style={{
          width: "fit-content",
          margin:'auto',
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          padding: "1%",
        }}
    >
      <h3>Coach 01</h3>
      <div
        style={{
          margin: "3% auto",
          width: "fit-content",
          display: "grid",
          gridTemplateColumns: "repeat(7,50px)",
          gap: "10px",
        }}
      >
        {coach.map((el) => {
          return (
            <div
              key={el._id}
              style={{
                height: "50px",
                backgroundColor: el.status ? "#BDBDBD" : "#81C784",
                lineHeight: "50px",
              }}
            >
             {
                !booked.includes(`${el.row}-${el.seat}`)?`${el.row}-${el.seat}`:passenger[0].toUpperCase()
             }
            
            </div>
          );
        })}
      </div>
    </div>
  );
}
