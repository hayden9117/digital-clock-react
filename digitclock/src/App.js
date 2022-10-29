import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [power, setPower] = useState(true);
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <p> This is a digital clock made with react and java script with love</p>
      <div className="clock-container">
        <div className="clock-screen">
          <h1>{power ? date.toLocaleTimeString() : null}</h1>{" "}
        </div>
        <div className="power-button" onClick={() => setPower(!power)}>
          I/O
        </div>
      </div>
    </div>
  );
}

export default App;
