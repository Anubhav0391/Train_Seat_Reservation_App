import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Booking_Form from './components/Booking_Form';
import Booked from './components/Booked';
import Coach from './components/Coach';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [passenger,setPassenger]=useState('')
  const [booked,setBooked]=useState([])
  const [coach, setCoach] = useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://naughty-erin-tie.cyclic.app//seats")
      .then((res) => setCoach(res.data))
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false));
  }, [booked]);

  if(loading){
    return <h1>Loading ...</h1>
  }

  return (
    <div className="App">
      <Nav/>
      <Booking_Form setPassenger={setPassenger} setBooked={setBooked} />
      <Booked passenger={passenger} booked={booked}/>
      <Coach coach={coach} passenger={passenger} booked={booked}/>
    </div>
  );
}

export default App;
