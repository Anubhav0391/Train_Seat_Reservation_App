<h1 style="text-align:center;margin:50px;">Train Seats Reservation App</h1> 
<p>Train Seats Reservation App is a platform where train-seat reservation are made.</p>
<p>It is an indivildual project developed in three days. The objective of the project was to implement the backend-learnings.</p>
<h4>Note : Sometimes data is not visible in UI as well as in backend for few minutes due to free deployment of backend. </h4>
<h2 style="text-align:center;margin:50px;">
      GET : <a href="https://naughty-erin-tie.cyclic.app//seats"> /seats</a> 
</h2>
<h2 style="text-align:center;margin:50px;">
      PATCH : <a href="https://naughty-erin-tie.cyclic.app//seats/reserve"> /seats/reserve</a>
</h2>
<h2 style="text-align:center;margin-left:-500px;" >Backend Features :- <a href="https://naughty-erin-tie.cyclic.app/">🔗</a></h2>
<h3 style="width:fit-content;margin:auto">
      <ol >
        <li>Seat data can be get at  [ /seats ].</li>
        <li>Seats can be booked at  [ /seats/reserve ].</li>
        <li>You have to provide the number of required seats in body of the request.</li>
        <li>An user can book upto 7 seats at a time. </li>
        <li>In the backend priority will be to book seats in single row.</li>
        <li>If required seats are not available in single row, seats will be booked in nearby rows.</li>
      </ol>
</h3>
   <br/>
   <h2 style="text-align:center;margin-left:-500px;" >Frontend Features :- <a href="https://reserve-my-trainseat.vercel.app/">🔗</a></h2>
   <h3>1. Reservation Form</h3><br/>
   <img src="https://www.linkpicture.com/q/reservation_form.png"><br/>
   <h3>2. Booked Seats</h3><br/>
   <img src="https://www.linkpicture.com/q/booked_seats.png"><br/>
   <h3>3. Coach 01</h3>
   <h4>(green => available, &nbsp; &nbsp; &nbsp; gray with seat number =>already reserved, &nbsp; &nbsp; &nbsp; gray with capital letter of name => reserved by current user)</h4> <br/>
   <img src="https://www.linkpicture.com/q/coach.png">

